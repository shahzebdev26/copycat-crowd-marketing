export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Lead the Dance",
      desc: "When it is your turn on center stage, record a rhythm sequence of jumps, spins, ducks, and poses for everyone to copy.",
    },
    {
      num: "02",
      title: "Mirror or Fall",
      desc: "Watch closely! When the countdown ends, accurately recall and enter the exact sequence within the fast 0.8s reaction window.",
    },
    {
      num: "03",
      title: "Claim the Podium",
      desc: "Outlast the crowd, earn Mimic Coins, collect rare auras and toppers, and claim your spot on the Weekly Global Leaderboard.",
    },
  ];

  return (
    <section id="how-to-play" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-semibold mb-4">
            Simple Rules, High Stakes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            How To Play & Win
          </h2>
          <p className="text-slate-400 text-base">
            A fast-paced test of memory, timing, and composure. Every round elevates the challenge with longer combinations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#0f1325] border border-white/8 hover:border-sky-400/30 rounded-3xl p-8 hover:-translate-y-1 transition-all shadow-xl hover:shadow-sky-500/10 group"
            >
              <div className="text-5xl font-black text-white/10 group-hover:text-sky-400/30 transition-colors mb-4 font-mono">
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
