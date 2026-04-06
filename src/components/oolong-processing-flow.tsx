import { OOLONG_PROCESS_STEPS } from "../data/oolong-processing-steps";
import { useI18n } from "../i18n/i18n-context";

function StepCard({
  step,
  index,
  zh,
}: {
  step: (typeof OOLONG_PROCESS_STEPS)[number];
  index: number;
  zh: boolean;
}) {
  return (
    <div className="group relative w-full">
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-b from-tea-gold/35 via-tea-gold/12 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-tea-gold/25 bg-tea-deep/80 px-4 py-4 shadow-[inset_0_1px_0_0_rgba(232,228,220,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-tea-gold/40 group-hover:shadow-[0_12px_28px_-12px_rgba(201,162,39,0.25),inset_0_1px_0_0_rgba(232,228,220,0.08)] motion-reduce:transform-none"
      >
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-tea-gold/[0.07] blur-2xl transition-all duration-500 group-hover:bg-tea-gold/[0.11]"
          aria-hidden
        />
        <div className="relative flex items-start gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-tea-gold/35 bg-gradient-to-br from-tea-moss/50 to-tea-deep/90 font-display text-sm tabular-nums text-tea-gold shadow-[0_0_0_1px_rgba(201,162,39,0.08)] transition-colors duration-300 group-hover:border-tea-gold/55 group-hover:text-[#dcc060]"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="font-display text-[1.05rem] leading-snug text-tea-steam md:text-lg">
              {zh ? step.titleZh : step.titleEn}
            </p>
            <p className="mt-2 border-t border-tea-steam/10 pt-2 font-body text-[0.8125rem] leading-relaxed text-tea-steam/58 md:text-[0.84375rem]">
              {zh ? step.blurbZh : step.blurbEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OolongProcessingFlow() {
  const { locale, t } = useI18n();
  const zh = locale === "zh";

  return (
    <section
      className="mt-12 border-t border-tea-gold/20 pt-10"
      aria-labelledby="oolong-process-heading"
    >
      <div className="relative">
        <span
          className="absolute -left-1 top-1 h-[1.15em] w-1 rounded-full bg-gradient-to-b from-tea-gold to-tea-clay/80"
          aria-hidden
        />
        <h2
          id="oolong-process-heading"
          className="font-display text-2xl tracking-tight md:text-3xl"
        >
          <span className="bg-gradient-to-r from-tea-steam via-[#f0ebe0] to-tea-gold/85 bg-clip-text text-transparent">
            {t("oolongProcessTitle")}
          </span>
        </h2>
      </div>
      <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-tea-steam/60">
        {t("oolongProcessNote")}
      </p>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-tea-gold/20 shadow-[0_0_0_1px_rgba(201,162,39,0.06),0_24px_48px_-24px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 20%, rgba(201, 162, 39, 0.09), transparent 55%),
              radial-gradient(ellipse 70% 50% at 90% 80%, rgba(45, 74, 58, 0.5), transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 0%, rgba(232, 228, 220, 0.04), transparent 45%)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative bg-gradient-to-br from-tea-moss/30 via-tea-deep/75 to-tea-deep/95 p-5 md:p-8">
          <div className="relative mx-auto w-full max-w-2xl">
            <div
              className="pointer-events-none absolute bottom-8 left-[1.125rem] top-8 w-px bg-gradient-to-b from-tea-gold/15 via-tea-gold/45 to-tea-gold/15"
              aria-hidden
            />

            <ol className="relative m-0 flex list-none flex-col gap-0 p-0">
              {OOLONG_PROCESS_STEPS.map((step, index) => {
                const last = index === OOLONG_PROCESS_STEPS.length - 1;
                return (
                  <li
                    key={step.id}
                    className="oolong-flow-step flex w-full flex-row gap-3"
                    style={{
                      animation: `oolong-step-reveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 72}ms both`,
                    }}
                  >
                    <div className="relative flex w-9 shrink-0 justify-center">
                      <span
                        className="z-10 mt-[1.35rem] h-2.5 w-2.5 shrink-0 rounded-full border-2 border-tea-deep bg-tea-gold shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
                        aria-hidden
                      />
                    </div>
                    <div
                      className={`min-w-0 flex-1 ${last ? "pb-0" : "pb-5 md:pb-6"}`}
                    >
                      <StepCard step={step} index={index} zh={zh} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
