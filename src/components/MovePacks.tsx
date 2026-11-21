import { Sparkles } from "lucide-react";

export function MovePacks() {
  const packs = [
    {
      id: "classic",
      title: "Classic Move Pack",
      badge: "FREE · 6 MOVES",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      moves: ["Jump", "Spin", "Crouch", "Wave", "Lean Left", "Lean Right"],
      desc: "The standard tournament move set. Clean, balanced, and perfect for quick rounds with any crowd.",
    },
    {
      id: "combat",
      title: "Martial Arts Pack",
      badge: "ACTION · 3 MOVES",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      moves: ["High Kick", "Heavy Punch", "Shield Guard Block"],
      desc: "Fast, striking actions that keep opponents guessing. Ideal for high-stakes 1v1 showdowns.",
    },
    {
      id: "rps",
      title: "Rock Paper Scissors",
      badge: "TACTICAL · 3 MOVES",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      moves: ["Rock (Fist)", "Paper (Palm)", "Scissors (Cross)"],
      desc: "Fast pattern recognition! Force players to distinguish between lightning-quick hand signs.",
    },
    {
      id: "party",
      title: "Victory Moves Pack",
      badge: "EXPRESSIVE · 4 MOVES",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      moves: ["Disco Point", "Rhythm Groove", "Celebrate", "Victory Pose"],
      desc: "Add flair to your sequences. Stun the room with clean victory gestures and high-energy poses.",
    },
  ];

  return (
    <section id="moves" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5d8f] text-white border-2 border-[#1d1340] text-xs sm:text-sm font-black shadow-[0_2px_0_#1d1340] mb-4">
            <Sparkles className="w-4 h-4 text-white" />
            <span>EXPAND YOUR MOVE SET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Custom Move Packs
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            They aren&apos;t random buttons — they&apos;re action moves! VIP room hosts can select custom Move Packs and string together up to 10 moves per round with +50% coin bonuses for everyone.
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((p) => (
            <div
              key={p.id}
              className="game-card p-6 flex flex-col justify-between"
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full border text-[10px] font-black tracking-wider uppercase mb-3 ${p.badgeColor}`}>
                  {p.badge}
                </span>

                <h3 className="text-xl font-black text-[#1d1340] mb-2">
                  {p.title}
                </h3>

                <p className="text-[#4a3f7a] text-xs sm:text-sm font-medium mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Move Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.moves.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-[#1d1340]/20 text-[11px] font-black text-[#1d1340]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t-2 border-[#1d1340]/10 flex items-center justify-between text-xs font-black text-[#1d1340]">
                <span>Room Support:</span>
                <span className="text-[#ff5d8f]">All Players</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
