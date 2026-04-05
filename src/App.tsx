import type { ReactNode } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { I18nProvider, useI18n } from "./i18n/I18nContext";
import { HomePage } from "./pages/HomePage";
import { OtherPage } from "./pages/OtherPage";
import { TeaCategoryPage } from "./pages/TeaCategoryPage";
import { AppLink, RouteProvider, useRoute } from "./routing";

function Shell() {
  const { path } = useRoute();
  const { t } = useI18n();

  const teaMatch = /^\/([^/]+)$/.exec(path);
  const slug = teaMatch?.[1];

  let body: ReactNode;
  if (path === "/") {
    body = <HomePage />;
  } else if (path === "/other" || path.startsWith("/other/")) {
    body = <OtherPage />;
  } else if (slug) {
    body = <TeaCategoryPage slug={slug} />;
  } else {
    body = (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-display text-3xl text-tea-steam">
          {t("notFoundTitle")}
        </h1>
        <p className="mt-4 font-body text-tea-steam/70">{t("notFoundDesc")}</p>
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
    <div className="relative min-h-dvh overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-tea-gold/10 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-tea-clay/15 blur-3xl" />

      <div className="relative flex min-h-dvh flex-col">
        <SiteHeader />
        <div className="flex-1">{body}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <RouteProvider>
      <I18nProvider>
        <Shell />
      </I18nProvider>
    </RouteProvider>
  );
}

export default App;
