function App() {
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

      <main className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <header className="max-w-xl animate-[rise_0.9s_ease-out_both]">
          <p className="mb-4 font-body text-sm tracking-[0.35em] text-tea-gold/90 uppercase">
            Steep · Sip · Still
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-tea-steam md:text-7xl">
            A quiet corner for{" "}
            <span className="italic text-tea-gold">leaf</span>
            {" & "}thought.
          </h1>
          <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-tea-steam/75">
            Vite, React, Tailwind, and Vitest — warmed through and ready to pour.
            Deploys to GitHub Pages when you push to{" "}
            <code className="rounded bg-tea-moss/80 px-1.5 py-0.5 font-mono text-sm text-tea-gold/95">
              main
            </code>
            .
          </p>
        </header>

        <aside className="w-full max-w-sm shrink-0 animate-[rise_0.9s_ease-out_0.15s_both]">
          <div className="rotate-1 border border-tea-gold/35 bg-tea-moss/40 p-8 shadow-[12px_16px_0_0_rgba(201,162,39,0.12)] backdrop-blur-sm">
            <h2 className="font-display text-2xl text-tea-steam">Today&apos;s brew</h2>
            <ul className="mt-6 space-y-4 font-body text-tea-steam/80">
              <li className="flex justify-between gap-4 border-b border-tea-steam/10 pb-3">
                <span>Build</span>
                <span className="text-tea-gold">pnpm build</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-tea-steam/10 pb-3">
                <span>Test</span>
                <span className="text-tea-gold">pnpm test</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Dev</span>
                <span className="text-tea-gold">pnpm dev</span>
              </li>
            </ul>
          </div>
        </aside>
      </main>

      <style>{`
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
