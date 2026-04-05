import { useCallback, useEffect, useRef, useState } from "react";
import AMapLoaderPkg from "@amap/amap-jsapi-loader";
import {
  CHINA_MAINLAND_SCHEMATIC_PATH,
  GREEN_TEA_MAP_MARKERS,
} from "../data/green-tea-regions";
import { useI18n } from "../i18n/i18n-context";

type AMapLoaderOptions = {
  key: string;
  version: string;
  plugins?: string[];
};

function loadAmapApi(options: AMapLoaderOptions): Promise<AMapNS> {
  const mod = AMapLoaderPkg as unknown as {
    load?: (o: AMapLoaderOptions) => Promise<AMapNS>;
    default?: { load: (o: AMapLoaderOptions) => Promise<AMapNS> };
  };
  const load = mod.load ?? mod.default?.load;
  if (typeof load !== "function") {
    return Promise.reject(new Error("AMapLoader.load unavailable"));
  }
  return load(options);
}

/** Minimal typing for JS API 2.0 used here */
type AMapNS = {
  Map: new (
    container: string | HTMLElement,
    opts?: Record<string, unknown>,
  ) => unknown;
  Marker: new (opts: Record<string, unknown>) => unknown;
  Pixel: new (x: number, y: number) => unknown;
};

function GreenTeaMapSchematic({ ariaLabel }: { ariaLabel: string }) {
  const { locale } = useI18n();
  const zh = locale === "zh";

  return (
    <svg
      viewBox="0 0 1000 680"
      className="mx-auto h-auto w-full max-w-3xl text-tea-steam"
      role="img"
      aria-label={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <path
        d={CHINA_MAINLAND_SCHEMATIC_PATH}
        fill="currentColor"
        fillOpacity={0.08}
        stroke="currentColor"
        strokeOpacity={0.35}
        strokeWidth={1.5}
        className="text-tea-gold"
      />
      {GREEN_TEA_MAP_MARKERS.map((m) => {
        const lx = m.cx + m.labelDx;
        const ly = m.cy + m.labelDy;
        return (
          <g key={m.id} className="group cursor-pointer">
            <circle
              cx={m.cx}
              cy={m.cy}
              r={22}
              fill="transparent"
              className="text-tea-gold"
            />
            <line
              x1={m.cx}
              y1={m.cy}
              x2={lx}
              y2={ly}
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth={1}
              className="text-tea-gold"
            />
            <circle cx={m.cx} cy={m.cy} r={5} fill="var(--color-tea-gold)" />
            <text
              x={lx}
              y={ly}
              fill="var(--color-tea-steam)"
              className="pointer-events-none font-body text-[11px] opacity-0 transition-opacity duration-100 group-hover:opacity-100 md:text-[14px]"
              style={{
                textAnchor: m.labelDx >= 0 ? "start" : "end",
                dominantBaseline: "middle",
              }}
            >
              {zh ? m.teaZh : m.teaEn}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

type AmapMapInstance = {
  destroy: () => void;
  add: (o: unknown) => void;
  setFitView: (...args: unknown[]) => void;
  resize: () => void;
  on: (ev: string, fn: () => void) => void;
};

type AmapMarkerInstance = {
  on: (ev: string, fn: () => void) => void;
  setLabel: (opts: Record<string, unknown> | null) => void;
};

function GreenTeaAmapView({
  zh,
  onFailed,
}: {
  zh: boolean;
  onFailed: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<AmapMapInstance | null>(null);

  useEffect(() => {
    const key = import.meta.env.VITE_AMAP_KEY;
    const security = import.meta.env.VITE_AMAP_SECURITY_JS_CODE;
    const el = containerRef.current;
    if (!key || !security || !el) {
      onFailed();
      return;
    }

    (
      window as Window & {
        _AMapSecurityConfig?: { securityJsCode: string };
      }
    )._AMapSecurityConfig = { securityJsCode: security };

    let cancelled = false;
    let resizeObs: ResizeObserver | null = null;

    const fitPadding = [72, 72, 72, 160] as const;

    const scheduleResizeAndFit = (map: AmapMapInstance, markers: unknown[]) => {
      const run = () => {
        if (cancelled) return;
        try {
          map.resize();
          map.setFitView(markers, false, [...fitPadding]);
        } catch {
          /* ignore */
        }
      };
      run();
      requestAnimationFrame(() => {
        requestAnimationFrame(run);
      });
    };

    loadAmapApi({ key, version: "2.0", plugins: [] })
      .then((AMap) => {
        if (cancelled || !containerRef.current) return;
        const map = new AMap.Map(containerRef.current, {
          zoom: 5,
          center: [105.5, 35.5],
          viewMode: "2D",
        }) as unknown as AmapMapInstance;
        mapRef.current = map;

        const markers = GREEN_TEA_MAP_MARKERS.map((m) => {
          const name = zh ? m.teaZh : m.teaEn;
          const marker = new AMap.Marker({
            position: [m.lng, m.lat],
            cursor: "pointer",
          }) as unknown as AmapMarkerInstance;

          const showLabel = () => {
            marker.setLabel({
              content: name,
              direction: "top",
              offset: new AMap.Pixel(0, -10),
            });
          };
          const hideLabel = () => {
            marker.setLabel(null);
          };

          marker.on("mouseover", showLabel);
          marker.on("mouseout", hideLabel);

          return marker;
        });

        map.add(markers);

        map.on("complete", () => {
          scheduleResizeAndFit(map, markers);
        });
        scheduleResizeAndFit(map, markers);

        const containerEl = containerRef.current;
        if (containerEl && typeof ResizeObserver !== "undefined") {
          resizeObs = new ResizeObserver(() => {
            if (!cancelled) scheduleResizeAndFit(map, markers);
          });
          resizeObs.observe(containerEl);
        }
      })
      .catch((err) => {
        if (import.meta.env.DEV) {
          console.warn("[Amap]", err);
        }
        onFailed();
      });

    return () => {
      cancelled = true;
      resizeObs?.disconnect();
      resizeObs = null;
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, [zh, onFailed]);

  return (
    <div
      ref={containerRef}
      className="h-[min(420px,55vh)] min-h-[280px] w-full rounded-lg bg-tea-moss/40"
      role="presentation"
    />
  );
}

export function GreenTeaChinaMap() {
  const { locale, t } = useI18n();
  const zh = locale === "zh";
  const key = import.meta.env.VITE_AMAP_KEY;
  const security = import.meta.env.VITE_AMAP_SECURITY_JS_CODE;
  const canUseAmap = Boolean(key && security);

  const [amapFailed, setAmapFailed] = useState(false);
  const showAmap = canUseAmap && !amapFailed;

  useEffect(() => {
    setAmapFailed(false);
  }, [canUseAmap]);

  const handleAmapFailed = useCallback(() => {
    setAmapFailed(true);
  }, []);

  return (
    <section
      className="mt-12 border-t border-tea-gold/20 pt-10"
      aria-labelledby="green-tea-map-heading"
    >
      <h2
        id="green-tea-map-heading"
        className="font-display text-2xl text-tea-steam md:text-3xl"
      >
        {t("greenTeaMapTitle")}
      </h2>
      <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-tea-steam/60">
        {t("greenTeaMapNote")}
      </p>

      {!canUseAmap ? (
        <p className="mt-4 font-body text-xs leading-relaxed text-tea-gold/80">
          {t("greenTeaMapAmapHint")}
        </p>
      ) : null}
      {canUseAmap && amapFailed ? (
        <p className="mt-4 font-body text-xs leading-relaxed text-tea-gold/80">
          {t("greenTeaMapAmapError")}
        </p>
      ) : null}

      <div className="mt-8 overflow-x-auto rounded-xl border border-tea-gold/25 bg-tea-moss/25 p-2 md:p-4">
        {showAmap ? (
          <GreenTeaAmapView zh={zh} onFailed={handleAmapFailed} />
        ) : (
          <GreenTeaMapSchematic ariaLabel={t("greenTeaMapAria")} />
        )}
      </div>

      <ul className="mt-8 grid gap-3 font-body text-sm text-tea-steam/85 sm:grid-cols-2">
        {GREEN_TEA_MAP_MARKERS.map((m) => (
          <li
            key={m.id}
            className="flex flex-col rounded-md border border-tea-steam/10 bg-tea-deep/40 px-3 py-2"
          >
            <span className="text-tea-gold/95">
              {zh ? m.teaZh : m.teaEn}
            </span>
            <span className="text-tea-steam/55">
              {zh ? `${m.provinceZh} · ${m.teaEn}` : `${m.provinceEn} · ${m.teaZh}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
