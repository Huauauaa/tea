export function teaNavLabel(c: Tea.Category, locale: I18n.Locale): string {
  return locale === "zh" ? c.nameZh : c.name;
}

/** Primary (large) title on carousel / detail */
export function teaPrimaryName(c: Tea.Category, locale: I18n.Locale): string {
  return locale === "zh" ? c.nameZh : c.name;
}

/** Secondary (smaller) line — the other language */
export function teaSecondaryName(c: Tea.Category, locale: I18n.Locale): string {
  return locale === "zh" ? c.name : c.nameZh;
}

export function teaBlurb(c: Tea.Category, locale: I18n.Locale): string {
  return locale === "zh" ? c.blurb : c.blurbEn;
}

export function teaImageAlt(c: Tea.Category, locale: I18n.Locale): string {
  return locale === "zh" ? c.imageAltZh : c.imageAlt;
}
