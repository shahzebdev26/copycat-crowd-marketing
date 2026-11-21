import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060810] text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/app-icon.png"
                alt="Copycat Crowd"
                width={36}
                height={36}
                className="rounded-xl shadow"
              />
              <span className="font-bold text-lg text-white">Copycat Crowd</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              The real-time multiplayer rhythm and memory party game where copycats battle for the crown.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">Game</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/#how-to-play" className="hover:text-white transition-colors">How to Play</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#screenshots" className="hover:text-white transition-colors">Screenshots</Link></li>
              <li><Link href="/#testers" className="hover:text-white transition-colors">14-Day Closed Beta</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">Support & Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="mailto:hassualoo@gmail.com" className="text-sky-400 hover:underline">hassualoo@gmail.com</a></li>
              <li className="text-slate-400">Developer: Muhammad Hasan Alam</li>
              <li className="text-slate-400">Package: com.hasan.copycatcrowd</li>
              <li className="text-slate-400">Version: 1.0.1 (Build 2)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>&copy; 2026 Copycat Crowd. All rights reserved.</div>
          <div>Google Play and the Google Play logo are trademarks of Google LLC.</div>
        </div>
      </div>
    </footer>
  );
}
