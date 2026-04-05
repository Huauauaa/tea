import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  messages,
  readStoredLocale,
  writeStoredLocale,
} from "./strings";

const I18nContext = createContext<I18n.ProviderContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<I18n.Locale>(() => {
    return readStoredLocale() ?? DEFAULT_LOCALE;
  });

  const setLocale = useCallback((next: I18n.Locale) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = messages[locale].docTitle;
  }, [locale]);

  const t = useCallback(
    (key: I18n.MessageKey) => messages[locale][key],
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18n.ProviderContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
