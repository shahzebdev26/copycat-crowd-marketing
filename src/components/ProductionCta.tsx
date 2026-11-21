import Image from "next/image";
import { Check, ShieldCheck, Zap } from "lucide-react";

export function ProductionCta() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="game-card p-8 sm:p-12 bg-gradient-to-br from-[#ffc93c] via-[#ffe082] to-[#fff3d6] text-center relative overflow-hidden">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto">
            
            {/* Mascot Icon */}
            <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden border-[3px] border-[#1d1340] shadow-[0_4px_0_#1d1340]">
              <Image
                src="/images/app-icon.png"
                alt="Copycat Crowd Icon"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <span className="inline-block px-4 py-1 rounded-full bg-white border-2 border-[#1d1340] text-xs font-black uppercase tracking-wider text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
              OFFICIAL PRODUCTION RELEASE · V1.0.1
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
              Ready To Outsmart The Crowd?
            </h2>

            <p className="text-base sm:text-lg text-[#1d1340] font-bold mb-8 leading-relaxed">
              Download Copycat Crowd on Google Play and start copying moves, climbing the leaderboards, and collecting rare cosmetic auras today!
            </p>

            {/* Big Google Play Download Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn game-btn-teal text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-[0_6px_0_#1d1340] hover:-translate-y-1 transition-all group w-full sm:w-auto"
              >
                <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] tracking-widest uppercase font-black leading-none text-white/80">
                    GET IT ON
                  </span>
                  <span className="block text-xl font-black leading-tight text-white">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-[#1d1340]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-800 stroke-[3]" /> Free To Play
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-800 stroke-[3]" /> Instant Guest Login
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-800 stroke-[3]" /> 100% Fair Play
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
