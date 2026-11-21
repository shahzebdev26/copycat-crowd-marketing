import { Users, Coins, Trophy, ShieldCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#ff5d8f]" />,
      title: "7-Player Real-Time Rooms",
      tag: "MULTIPLAYER",
      desc: "Jump into public lobbies or create private rooms with friends. Choose between Simple (free standard moves) and VIP Gold Stage with custom Move Packs and +50% Mimic Coins.",
    },
    {
      icon: <Coins className="w-8 h-8 text-[#f59e0b]" />,
      title: "Community Item Market",
      tag: "COSMETICS",
      desc: "Customize your character with awesome toppers, particle auras, charms, and move packs. Pick up community listings or list your spare cosmetics to earn Crystals.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#22c55e]" />,
      title: "Resilient 1v1 Fair Play",
      tag: "SUDDEN DEATH",
      desc: "Instant reconnect protection: if an opponent disconnects in a head-to-head showdown, the remaining player is immediately awarded the win with full rewards and stats.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#38bdf8]" />,
      title: "Hall of Fame Milestones",
      tag: "PROGRESSION",
      desc: "Unlock permanent titles, medals, and cosmic auras as your all-time wins grow. Compete for the #1 spot on the Weekly and All-Time Global Leaderboards.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>DESIGNED FOR MAXIMUM FUN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Game Features
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Everything you need for an unforgettable multiplayer party — whether playing casually with family or competing at the top of the leaderboard.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="game-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 border-2 border-[#1d1340] shadow-[0_3px_0_#1d1340]">
                    {f.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-[#1d1340]/20 text-[10px] font-black tracking-wider text-[#1d1340]">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#1d1340] mb-3">
                  {f.title}
                </h3>

                <p className="text-[#4a3f7a] text-sm sm:text-base leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#1d1340]/10 flex items-center gap-2 text-xs font-bold text-[#1d1340]">
                <span>✓ Available on Google Play for Android</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
