import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#070913]/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/app-icon.png"
            alt="Copycat Crowd"
            width={40}
            height={40}
            className="rounded-xl shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tight text-white">Copycat Crowd</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/#how-to-play" className="hover:text-white transition-colors">How to Play</Link>
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#screenshots" className="hover:text-white transition-colors">Screenshots</Link>
          <Link href="/#testers" className="hover:text-white transition-colors">14-Day Testing</Link>
          <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#testers"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all hover:-translate-y-0.5"
          >
            Join Beta
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-sky-500 to-sky-400 text-slate-950 shadow-md shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </header>
  );
}
