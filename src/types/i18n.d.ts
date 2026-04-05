declare namespace I18n {
  type Locale = "zh" | "en";

  /** Keys shared by `messages.zh` and `messages.en` */
  type MessageKey =
    | "navAria"
    | "switchToEn"
    | "switchToZh"
    | "carouselAria"
    | "carouselCta"
    | "tablistAria"
    | "prevSlide"
    | "nextSlide"
    | "teaCategoryEyebrow"
    | "backHome"
    | "backHomeArrow"
    | "notFoundTitle"
    | "notFoundDesc"
    | "categoryMissingTitle"
    | "categoryMissingDesc"
    | "docTitle"
    | "siteBrand"
    | "otherOverviewLink"
    | "otherBackToSection"
    | "otherDetailBack";

  type ProviderContextValue = {
    locale: Locale;
    setLocale: (next: Locale) => void;
    t: (key: MessageKey) => string;
  };
}
