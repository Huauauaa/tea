import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type RouteContextValue = {
  /** Normalized app path: `/` or `/green-tea` etc. */
  path: string;
  navigate: (to: string) => void;
};

const RouteContext = createContext<RouteContextValue | null>(null);

function getBasePath(): string {
  const b = import.meta.env.BASE_URL;
  if (b === "/" || b === "") return "";
  return b.endsWith("/") ? b.slice(0, -1) : b;
}

export function pathnameToAppPath(pathname: string): string {
  const base = getBasePath();
  if (!base) {
    return pathname || "/";
  }
  if (pathname === base || pathname === `${base}/`) return "/";
  if (pathname.startsWith(`${base}/`)) {
    const rest = pathname.slice(base.length);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return "/";
}

function appPathToBrowserPath(appPath: string): string {
  const base = getBasePath();
  if (appPath !== "/" && !appPath.startsWith("/")) {
    throw new Error(`Invalid app path: ${appPath}`);
  }
  if (!base) {
    return appPath === "/" ? "/" : appPath;
  }
  return appPath === "/" ? `${base}/` : `${base}${appPath}`;
}

export function RouteProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    pathnameToAppPath(window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setPath(pathnameToAppPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    const next =
      to === "" || to === "/"
        ? "/"
        : to.startsWith("/")
          ? to
          : `/${to}`;
    const browserPath = appPathToBrowserPath(next);
    window.history.pushState(null, "", browserPath);
    setPath(next);
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
}

export function useRoute(): RouteContextValue {
  const ctx = useContext(RouteContext);
  if (!ctx) {
    throw new Error("useRoute must be used within RouteProvider");
  }
  return ctx;
}

type AppLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
  /** When true, use aria-current for active nav styling */
  nav?: boolean;
};

export function AppLink({ to, className, children, nav }: AppLinkProps) {
  const { path, navigate } = useRoute();
  const target = to === "/" ? "/" : to.startsWith("/") ? to : `/${to}`;
  const href = appPathToBrowserPath(target);
  const isNavActive =
    nav &&
    (path === target ||
      (target.length > 1 && path.startsWith(`${target}/`)));

  return (
    <a
      href={href}
      className={className}
      aria-current={isNavActive ? "page" : undefined}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (e.button !== 0) return;
        e.preventDefault();
        navigate(target);
      }}
    >
      {children}
    </a>
  );
}
