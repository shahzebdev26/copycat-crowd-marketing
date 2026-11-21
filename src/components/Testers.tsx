import Image from "next/image";
import { CheckCircle2, Mail, ExternalLink } from "lucide-react";

export function Testers() {
  return (
    <section id="testers" className="py-24 relative bg-[#070913]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#0f1325]/95 via-[#17132e]/90 to-[#0f1325]/95 shadow-2xl">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-300 text-xs font-semibold mb-6">
                Google Play Closed Testing Track
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Join Our 14-Day Closed Beta Testing Team
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Google Play requires 20 dedicated testers for 14 continuous days before releasing the game to the general public. Help us verify features, test party rooms, and earn <b className="text-amber-300">1,000 Free Crystals + Exclusive Beta Pioneer Badge</b> upon public launch!
              </p>

              <div className="space-y-3 mb-8 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-none mt-0.5" />
                  <span><b>Step 1:</b> Email us or request to be added to the Google Play Closed Testing group.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-none mt-0.5" />
                  <span><b>Step 2:</b> Open the official Google Play opt-in link sent to your email and click <i>&quot;Accept invitation&quot;</i>.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-none mt-0.5" />
                  <span><b>Step 3:</b> Install Copycat Crowd on your device and launch it for a quick dance battle once per day!</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hassualoo@gmail.com?subject=Copycat%20Crowd%20Beta%20Tester%20Request&body=Hi%20Hasan,%20I%20would%20love%20to%20be%20an%20active%20tester%20for%20Copycat%20Crowd%20on%20Google%20Play!%20My%20Google%20Play%20account%20email%20is:%20"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email to Join as Tester
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-sm transition-all"
                >
                  View on Google Play <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="text-center bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Image
                src="/images/app-icon.png"
                alt="Copycat Crowd"
                width={120}
                height={120}
                className="mx-auto rounded-3xl shadow-xl shadow-purple-500/20 mb-4"
              />
              <div className="font-mono text-xs text-sky-400 font-bold mb-1">
                com.hasan.copycatcrowd
              </div>
              <div className="text-sm font-bold text-white mb-1">
                Version 1.0.1 (Build 2)
              </div>
              <p className="text-xs text-slate-400">
                Developer: Muhammad Hasan Alam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
