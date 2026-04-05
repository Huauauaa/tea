import { getCategoryBySlug } from "../data/tea-categories";
import {
  OTHER_SECTIONS,
  getOtherSubBySlug,
  subsForSection,
} from "../data/other-tea";
import { useI18n } from "../i18n/i18n-context";
import {
  teaBlurb,
  teaPrimaryName,
  teaSecondaryName,
} from "../i18n/tea-labels";
import { AppLink, useRoute } from "../routing";

function subLabel(s: OtherTea.Subcategory, locale: I18n.Locale): string {
  return locale === "zh" ? s.nameZh : s.nameEn;
}

function sectionTitle(
  id: OtherTea.SectionId,
  locale: I18n.Locale,
): string {
  const sec = OTHER_SECTIONS.find((x) => x.id === id)!;
  return locale === "zh" ? sec.titleZh : sec.titleEn;
}

export function OtherPage() {
  const { path } = useRoute();
  const { locale, t } = useI18n();

  if (path.startsWith("/other/")) {
    const rest = path.slice("/other/".length);
    if (rest.includes("/") || rest === "") {
      return (
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="font-display text-3xl text-tea-steam">
            {t("notFoundTitle")}
          </h1>
          <p className="mt-4 font-body text-tea-steam/70">{t("notFoundDesc")}</p>
          <AppLink
            to="/other"
            className="mt-8 inline-block font-body text-tea-gold underline-offset-4 hover:underline"
          >
            {t("otherBackToSection")}
          </AppLink>
        </div>
      );
    }
  }

  const subSlug =
    path === "/other" ? null : path.startsWith("/other/") ? path.slice(7) : null;

  if (subSlug && !getOtherSubBySlug(subSlug)) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-display text-3xl text-tea-steam">
          {t("notFoundTitle")}
        </h1>
        <p className="mt-4 font-body text-tea-steam/70">{t("notFoundDesc")}</p>
        <AppLink
          to="/other"
          className="mt-8 inline-block font-body text-tea-gold underline-offset-4 hover:underline"
        >
          {t("otherBackToSection")}
        </AppLink>
      </div>
    );
  }

  const category = getCategoryBySlug("other") as Tea.Category;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:gap-10 lg:py-14">
      <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-56">
        <p className="mb-3 font-body text-xs tracking-[0.2em] text-tea-gold/90 uppercase">
          {locale === "zh" ? "其他" : "Other"}
        </p>
        <nav
          className="flex flex-col gap-6 border-b border-tea-gold/15 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6"
          aria-label={locale === "zh" ? "其他茶类" : "Other tea types"}
        >
          <AppLink
            to="/other"
            className={`rounded-md px-3 py-2 font-body text-sm transition-colors ${
              path === "/other"
                ? "bg-white text-tea-deep"
                : "border border-tea-steam/35 bg-transparent text-tea-steam/80 hover:bg-tea-moss/40 hover:text-tea-steam"
            }`}
          >
            {t("otherOverviewLink")}
          </AppLink>

          {OTHER_SECTIONS.map((section) => (
            <div key={section.id}>
              <h2 className="mb-2 font-body text-xs font-medium tracking-wide text-tea-steam/50">
                {sectionTitle(section.id, locale)}
              </h2>
              <ul className="flex flex-col gap-1">
                {subsForSection(section.id).map((s) => {
                  const href = `/other/${s.slug}`;
                  const active = path === href;
                  return (
                    <li key={s.slug}>
                      <AppLink
                        to={href}
                        className={`block rounded-md px-3 py-2 font-body text-sm transition-colors ${
                          active
                            ? "bg-white text-tea-deep"
                            : "border border-tea-steam/35 bg-transparent text-tea-steam/80 hover:bg-tea-moss/40 hover:text-tea-steam"
                        }`}
                      >
                        {subLabel(s, locale)}
                      </AppLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1">
        {subSlug ? (
          <OtherSubDetail sub={getOtherSubBySlug(subSlug)!} />
        ) : (
          <OtherOverview category={category} locale={locale} />
        )}
      </main>
    </div>
  );
}

function OtherOverview({
  category,
  locale,
}: {
  category: Tea.Category;
  locale: I18n.Locale;
}) {
  return (
    <article>
      <p className="font-body text-sm tracking-[0.2em] text-tea-gold/90">
        {locale === "zh" ? "茶类 · 其他" : "Tea · Other"}
      </p>
      <h1 className="mt-2 font-display text-4xl text-tea-steam md:text-5xl">
        {teaPrimaryName(category, locale)}
      </h1>
      <p className="mt-2 font-body text-lg text-tea-steam/55 md:text-xl">
        {teaSecondaryName(category, locale)}
      </p>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-tea-steam/80">
        {teaBlurb(category, locale)}
      </p>
      <p className="mt-8 font-body text-tea-steam/60">
        {locale === "zh"
          ? "请从左侧选择再加工茶或代用茶子类查看说明。"
          : "Choose a subcategory in the sidebar for reprocessed tea or tea substitutes."}
      </p>
    </article>
  );
}

function OtherSubDetail({ sub }: { sub: OtherTea.Subcategory }) {
  const { locale, t } = useI18n();

  return (
    <article>
      <p className="font-body text-sm tracking-[0.2em] text-tea-gold/90">
        {locale === "zh" ? "其他" : "Other"}
      </p>
      <h1 className="mt-2 font-display text-3xl text-tea-steam md:text-4xl">
        {locale === "zh" ? sub.nameZh : sub.nameEn}
      </h1>
      <p className="mt-2 font-body text-lg text-tea-steam/55">
        {locale === "zh" ? sub.nameEn : sub.nameZh}
      </p>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-tea-steam/80">
        {locale === "zh" ? sub.blurbZh : sub.blurbEn}
      </p>
      <p className="mt-6 font-body text-tea-steam/70">
        <span className="text-tea-gold/90">
          {locale === "zh" ? "举例" : "Examples"}
        </span>
        {" · "}
        {locale === "zh" ? sub.examplesZh : sub.examplesEn}
      </p>
      <AppLink
        to="/other"
        className="mt-10 inline-block font-body text-tea-gold underline-offset-4 hover:underline"
      >
        {t("otherDetailBack")}
      </AppLink>
    </article>
  );
}
