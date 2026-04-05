import { TEA_CATEGORIES } from "../data/tea-categories";
import { useI18n } from "../i18n/i18n-context";
import { teaNavLabel } from "../i18n/tea-labels";
import { AppLink } from "../routing";
import { LocaleSwitcher } from "./locale-switcher";

export function SiteHeader() {
  const { locale, t } = useI18n();

  return (
    <header className="border-b border-tea-gold/20 bg-tea-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full items-center justify-between lg:contents">
          <AppLink
            to="/"
            className="shrink-0 font-display text-xl tracking-tight text-tea-steam transition-colors hover:text-tea-gold lg:order-1"
          >
            {t("siteBrand")}
          </AppLink>
          <LocaleSwitcher />
        </div>
        <nav
          className="flex flex-wrap gap-x-1 gap-y-2 font-body text-sm lg:order-2 lg:min-w-0 lg:flex-1 lg:justify-end"
          aria-label={t("navAria")}
        >
          {TEA_CATEGORIES.map((c) => (
            <AppLink
              key={c.slug}
              to={`/${c.slug}`}
              nav
              className="rounded-md px-2.5 py-1.5 text-tea-steam/80 transition-colors hover:bg-tea-moss/50 hover:text-tea-gold aria-[current=page]:bg-tea-moss/70 aria-[current=page]:text-tea-gold"
            >
              {teaNavLabel(c, locale)}
            </AppLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
