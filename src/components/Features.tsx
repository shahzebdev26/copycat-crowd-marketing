import { Users, Diamond, Flame, Trophy } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 relative bg-[#0a0d1c]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-semibold mb-4">
            Packed With Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Built For Serious Party Gamers
          </h2>
          <p className="text-slate-400 text-base">
            From custom dance moves to real-time player-driven trading, Copycat Crowd takes party gaming to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 (Wide) */}
          <div className="md:col-span-2 bg-[#0f1325] border border-white/8 hover:border-sky-400/30 rounded-3xl p-8 hover:-translate-y-1 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/10 text-sky-400 flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Real-Time 7-Player Party Rooms</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Host private matches with custom 4-letter room codes or jump into global matchmaking. Enjoy seamless low-latency WebSockets with automatic seat retention and mid-match reconnection so you never lose your spot.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f1325] border border-white/8 hover:border-purple-400/30 rounded-3xl p-8 hover:-translate-y-1 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-400/10 text-purple-400 flex items-center justify-center mb-6">
              <Diamond className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">CS:GO Style Community Market</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A genuine peer-to-peer marketplace. Trade duplicate cosmetics, legendary auras, and animated toppers with other players directly for Diamonds.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f1325] border border-white/8 hover:border-amber-400/30 rounded-3xl p-8 hover:-translate-y-1 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-6">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Custom Move Packs</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expand beyond classic dancing! Unlock Rock Paper Scissors battles, Martial Arts kicks and blocks, and high-energy Party Groove moves.
            </p>
          </div>

          {/* Card 4 (Wide) */}
          <div className="md:col-span-2 bg-[#0f1325] border border-white/8 hover:border-emerald-400/30 rounded-3xl p-8 hover:-translate-y-1 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">VIP Pass & Weekly Champion Rewards</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Join VIP for 2x match coin multipliers, 10 daily bonus crystals, exclusive royal prestige auras, and special leaderboard trophies to show off to competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
