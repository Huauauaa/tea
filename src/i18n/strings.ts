export const DEFAULT_LOCALE: I18n.Locale = "zh";

const STORAGE_KEY = "tea-locale";

export function readStoredLocale(): I18n.Locale | null {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "zh" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeStoredLocale(locale: I18n.Locale) {
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
    greenTeaMapTitle: "中国绿茶代表产区（示意）",
    greenTeaMapNote:
      "地图为示意轮廓，标点为各地知名绿茶代表，非完整产区名录。",
    greenTeaMapAria: "中国绿茶主要产区示意图",
    greenTeaMapAmapHint:
      "未配置高德 Key：当前为示意地图。请在项目根目录创建 .env.local，设置 VITE_AMAP_KEY 与 VITE_AMAP_SECURITY_JS_CODE（高德开放平台）。",
    greenTeaMapAmapError:
      "高德地图加载失败，已切换为示意地图。请确认安全密钥与 Key 匹配，并在控制台将当前页面域名（含 localhost）加入 Web 端 Key 的「域名白名单」；开发环境下可打开浏览器控制台查看 [Amap] 报错。",
    oolongProcessTitle: "乌龙茶加工工艺流程（示意）",
    oolongProcessNote:
      "以下为常见工序顺序；具体参数与是否包揉、焙火程度等因产地、品种（条形乌龙、球形乌龙等）而异。",
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
    greenTeaMapTitle: "Green tea regions in China (schematic)",
    greenTeaMapNote:
      "Outline is approximate; pins mark famous representative teas, not an exhaustive list.",
    greenTeaMapAria: "Schematic map of major green tea regions in China",
    greenTeaMapAmapHint:
      "Amap keys not set: showing schematic map. Add VITE_AMAP_KEY and VITE_AMAP_SECURITY_JS_CODE in .env.local (Amap Open Platform).",
    greenTeaMapAmapError:
      "Amap failed to load; showing schematic map instead. Check security code matches the key, whitelist your domain (including localhost) for the Web JS key, and see the browser console for [Amap] warnings in dev.",
    oolongProcessTitle: "Oolong processing (schematic flow)",
    oolongProcessNote:
      "Typical step order; timing, wrapping/ball-shaping, and roast level vary by origin and style.",
  },
} as const satisfies Record<I18n.Locale, Record<I18n.MessageKey, string>>;
