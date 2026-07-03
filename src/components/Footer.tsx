export default function Footer() {
  return (
    <footer className="relative mt-24 border-t-4 border-ink bg-paper px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="mb-1 font-pixel text-xl">
            STAY_CONNECTED
          </div>

          <p className="text-sm opacity-60">
            Let&apos;s create something strangely beautiful.
          </p>
        </div>

        <div className="flex gap-6 font-pixel text-xs">
          <a href="#" className="hover:text-accent">
            TWITTER
          </a>

          <a href="#" className="hover:text-accent">
            GITHUB
          </a>

          <a href="#" className="hover:text-accent">
            BEHANCE
          </a>

          <a href="#" className="hover:text-accent">
            LINKEDIN
          </a>
        </div>

        <div className="font-mono text-[10px] opacity-40">
          © 2026 FERNANDA_PORTFOLIO.V1_FINAL_FINAL.ZIP
        </div>
      </div>
    </footer>
  );
}