export function HowItWorks() {
  const steps = [
    {
      num: "01",
      tag: "THE SEQUENCE",
      title: "Watch The Leader",
      desc: "One player takes center stage as the leader and executes an action-packed string of moves — Jumps, Spins, Crouches, Waves, Kicks, and Punches. Keep your eyes locked on the sequence!",
      color: "bg-sky-100 text-sky-800 border-sky-300",
      icon: "👀",
    },
    {
      num: "02",
      tag: "REACTION WINDOW",
      title: "Copy In Exact Order",
      desc: "When the countdown ends, the floor opens to everyone! Recall and enter the exact move sequence within the ultra-fast 0.8s reaction window. Miss a single move and you're eliminated from the round.",
      color: "bg-amber-100 text-amber-800 border-amber-300",
      icon: "⚡",
    },
    {
      num: "03",
      tag: "VICTORY & LOOT",
      title: "Claim The Podium",
      desc: "Outlast up to 6 opponents to claim the #1 Champion Trophy. Earn Mimic Coins and Crystals, unlock rare career auras in the Hall of Fame, and collect awesome cosmetics in the Community Market!",
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: "🏆",
    },
  ];

  return (
    <section id="how-to-play" className="py-20 relative bg-white/70 border-y-[3px] border-[#1d1340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc93c] border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <span>🎮 SIMPLE RULES · HIGH TENSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            How To Play & Win
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Fast memory, razor reflexes, and pure composure. Every round stacks more moves into the sequence until only one copycat stands!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="game-card p-6 sm:p-8 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{s.icon}</span>
                  <span className="font-mono text-3xl font-black text-[#1d1340]/25">
                    {s.num}
                  </span>
                </div>
                
                <span className={`inline-block px-3 py-1 rounded-full border text-[11px] font-black uppercase tracking-wider mb-3 ${s.color}`}>
                  {s.tag}
                </span>

                <h3 className="text-2xl font-black text-[#1d1340] mb-3">
                  {s.title}
                </h3>

                <p className="text-[#4a3f7a] text-sm sm:text-base leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#1d1340]/10 flex items-center gap-2 text-xs font-bold text-[#1d1340]">
                <span>✓ Pure skill & pattern recall</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
