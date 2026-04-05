import { useI18n } from "../i18n/I18nContext";

/**
 * Overlapping “En” + “中” tiles (language toggle), styled for the tea palette.
 */
export function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();

  const isZh = locale === "zh";
  const isEn = locale === "en";

  const toggle = () => setLocale(isZh ? "en" : "zh");
  const label = isZh ? t("switchToEn") : t("switchToZh");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="group relative h-10 w-11 shrink-0 rounded-md outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-tea-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tea-deep lg:order-3"
    >
      {/* Back tile: 中 */}
      <span
        className={`absolute bottom-0 right-0 flex h-[26px] w-[26px] items-center justify-center rounded-sm font-body text-sm font-semibold leading-none transition-all duration-200 group-active:scale-[0.98] ${
          isZh
            ? "z-20 bg-white text-tea-deep shadow-md"
            : "z-[1] border border-tea-steam/35 bg-transparent text-tea-steam/75"
        }`}
        aria-hidden
      >
        中
      </span>
      {/* Front tile: En */}
      <span
        className={`absolute left-0 top-0 flex h-[26px] w-[26px] items-center justify-center rounded-sm font-body text-[10px] font-semibold uppercase leading-none tracking-tight transition-all duration-200 group-active:scale-[0.98] ${
          isEn
            ? "z-20 bg-white text-tea-deep shadow-md"
            : "z-10 border border-tea-steam/35 bg-transparent text-tea-steam/70"
        }`}
        aria-hidden
      >
        En
      </span>
    </button>
  );
}
