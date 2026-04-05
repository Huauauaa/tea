export type Locale = "zh" | "en";

export const DEFAULT_LOCALE: Locale = "zh";

const STORAGE_KEY = "tea-locale";

export function readStoredLocale(): Locale | null {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "zh" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeStoredLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export const messages = {
  zh: {
    navAria: "茶类",
    switchToEn: "切换为英文",
    switchToZh: "切换为中文",
    carouselAria: "六大茶类",
    carouselCta: "点击进入",
    tablistAria: "选择茶类",
    prevSlide: "上一张",
    nextSlide: "下一张",
    teaCategoryEyebrow: "茶类",
    backHome: "返回首页",
    backHomeArrow: "← 返回首页",
    notFoundTitle: "页面不存在",
    notFoundDesc: "该地址没有对应内容。",
    categoryMissingTitle: "未找到该茶类",
    categoryMissingDesc: "链接可能不正确，请从首页菜单选择。",
    docTitle: "茶",
    siteBrand: "茶",
    otherOverviewLink: "总览",
    otherBackToSection: "返回「其他」",
    otherDetailBack: "← 返回其他总览",
  },
  en: {
    navAria: "Tea categories",
    switchToEn: "Switch to English",
    switchToZh: "Switch to Chinese",
    carouselAria: "Six basic tea categories",
    carouselCta: "View category",
    tablistAria: "Choose tea category",
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    teaCategoryEyebrow: "Tea category",
    backHome: "Back to home",
    backHomeArrow: "← Back to home",
    notFoundTitle: "Page not found",
    notFoundDesc: "This URL does not match any page.",
    categoryMissingTitle: "Category not found",
    categoryMissingDesc: "The link may be wrong — pick a tea from the menu.",
    docTitle: "Tea",
    siteBrand: "Tea",
    otherOverviewLink: "Overview",
    otherBackToSection: "Back to Other",
    otherDetailBack: "← Back to Other overview",
  },
} as const;

export type MessageKey = keyof typeof messages.zh;
