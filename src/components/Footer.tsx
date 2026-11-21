import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t-[3.5px] border-[#1d1340] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#1d1340]/10">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#1d1340] shadow-[0_2px_0_#1d1340]">
              <Image
                src="/images/app-icon.png"
                alt="Copycat Crowd"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <span className="font-black text-xl text-[#1d1340]">
                COPYCAT <span className="text-[#ff5d8f]">CROWD</span>
              </span>
              <p className="text-xs font-bold text-[#4a3f7a]">
                Multiplayer Memory Party Battle · Developed by Muhammad Hasan Alam
              </p>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="flex flex-wrap items-center gap-6 font-bold text-sm text-[#1d1340]">
            <Link href="/privacy" className="hover:text-[#ff5d8f] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#ff5d8f] transition-colors">
              Terms of Service
            </Link>
            <a
              href="mailto:hasanalam.dev@gmail.com"
              className="hover:text-[#ff5d8f] transition-colors"
            >
              Developer Support
            </a>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#4a3f7a]">
          <p>© {new Date().getFullYear()} Copycat Crowd. All rights reserved.</p>
          <p>Package: <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[#1d1340]">com.hasan.copycatcrowd</code></p>
        </div>

      </div>
    </footer>
  );
}
