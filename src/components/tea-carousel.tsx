import { useCallback, useEffect, useState } from "react";
import { CAROUSEL_SLIDES } from "../data/tea-categories";
import { useI18n } from "../i18n/i18n-context";
import {
  teaBlurb,
  teaImageAlt,
  teaNavLabel,
  teaPrimaryName,
  teaSecondaryName,
} from "../i18n/tea-labels";
import { AppLink } from "../routing";

const INTERVAL_MS = 5500;

export function TeaCarousel() {
  const { locale, t } = useI18n();
  const [index, setIndex] = useState(0);
  const count = CAROUSEL_SLIDES.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [go]);

  const slide = CAROUSEL_SLIDES[index]!;

  return (
    <section
      className="relative mx-auto w-full max-w-5xl px-6"
      aria-roledescription="carousel"
      aria-label={t("carouselAria")}
    >
      <div className="relative overflow-hidden rounded-xl border border-tea-gold/25 bg-tea-moss/30 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]">
        <AppLink
          to={`/${slide.slug}`}
          className="group relative block aspect-[3/2] min-h-[280px] w-full outline-none focus-visible:ring-2 focus-visible:ring-tea-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tea-deep md:min-h-[360px]"
        >
          <img
            src={slide.imageSrc}
            alt={teaImageAlt(slide, locale)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-tea-deep via-tea-deep/20 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 md:p-8">
            <span
              className={`font-body text-xs text-tea-gold/90 ${locale === "en" ? "tracking-[0.25em] uppercase" : "tracking-wider"}`}
            >
              {t("carouselCta")}
            </span>
            <span className="font-display text-3xl text-tea-steam md:text-4xl">
              {teaPrimaryName(slide, locale)}
            </span>
            <span className="font-body text-sm text-tea-steam/60 md:text-base">
              {teaSecondaryName(slide, locale)}
            </span>
            <span className="max-w-xl font-body text-sm leading-relaxed text-tea-steam/85 md:text-base">
              {teaBlurb(slide, locale)}
            </span>
          </div>
        </AppLink>

        <button
          type="button"
          className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-tea-steam/20 bg-tea-deep/70 text-tea-steam backdrop-blur-sm transition-colors hover:border-tea-gold/50 hover:text-tea-gold md:flex"
          aria-label={t("prevSlide")}
          onClick={(e) => {
            e.preventDefault();
            go(-1);
          }}
        >
          ‹
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-tea-steam/20 bg-tea-deep/70 text-tea-steam backdrop-blur-sm transition-colors hover:border-tea-gold/50 hover:text-tea-gold md:flex"
          aria-label={t("nextSlide")}
          onClick={(e) => {
            e.preventDefault();
            go(1);
          }}
        >
          ›
        </button>
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label={t("tablistAria")}
      >
        {CAROUSEL_SLIDES.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={teaNavLabel(s, locale)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-tea-gold"
                : "w-2 bg-tea-steam/25 hover:bg-tea-steam/45"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
