declare namespace Routing {
  type ContextValue = {
    /** Normalized app path: `/` or `/green-tea` etc. */
    path: string;
    navigate: (to: string) => void;
  };
}
