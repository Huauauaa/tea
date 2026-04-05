import { getCategoryBySlug } from "../data/tea-categories";
import { useI18n } from "../i18n/i18n-context";
import {
  teaBlurb,
  teaImageAlt,
  teaPrimaryName,
  teaSecondaryName,
} from "../i18n/tea-labels";
import { AppLink } from "../routing";

type Props = { slug: string };

export function TeaCategoryPage({ slug }: Props) {
  const { locale, t } = useI18n();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-display text-3xl text-tea-steam">
          {t("categoryMissingTitle")}
        </h1>
        <p className="mt-4 font-body text-tea-steam/70">
          {t("categoryMissingDesc")}
        </p>
        <AppLink
          to="/"
          className="mt-8 inline-block font-body text-tea-gold underline-offset-4 hover:underline"
        >
          {t("backHome")}
        </AppLink>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <p
        className={`font-body text-sm tracking-[0.2em] text-tea-gold/90 ${locale === "en" ? "uppercase" : ""}`}
      >
        {t("teaCategoryEyebrow")}
      </p>
      <h1 className="mt-2 font-display text-4xl text-tea-steam md:text-5xl">
        {teaPrimaryName(category, locale)}
      </h1>
      <p className="mt-2 font-body text-lg text-tea-steam/55 md:text-xl">
        {teaSecondaryName(category, locale)}
      </p>
      <p className="mt-6 font-body text-lg leading-relaxed text-tea-steam/80">
        {teaBlurb(category, locale)}
      </p>
      {category.imageSrc ? (
        <figure className="mt-10 overflow-hidden rounded-xl border border-tea-gold/20">
          <img
            src={category.imageSrc}
            alt={teaImageAlt(category, locale)}
            className="aspect-[2/1] w-full object-cover"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </figure>
      ) : null}
      <AppLink
        to="/"
        className="mt-12 inline-block font-body text-tea-gold underline-offset-4 hover:underline"
      >
        {t("backHomeArrow")}
      </AppLink>
    </article>
  );
}
