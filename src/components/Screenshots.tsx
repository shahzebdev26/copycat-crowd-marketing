import Image from "next/image";

export function Screenshots() {
  const shots = [
    { src: "/images/screenshot-1.jpg", title: "In-Game Live Match" },
    { src: "/images/screenshot-2.jpg", title: "Cosmetics Locker" },
    { src: "/images/screenshot-3.jpg", title: "Community Marketplace" },
    { src: "/images/screenshot-4.jpg", title: "Career Milestones & Medals" },
    { src: "/images/screenshot-5.jpg", title: "VIP Pass & Shop" },
    { src: "/images/screenshot-6.jpg", title: "Podium Victory Results" },
  ];

  return (
    <section id="screenshots" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-semibold mb-4">
            Visual Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            In-Game Gameplay & Menus
          </h2>
          <p className="text-slate-400 text-base">
            Vibrant 3D visuals rendered smoothly at 60fps on mobile phones, tablets, and desktop browsers.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x snap-mandatory">
          {shots.map((s, idx) => (
            <div
              key={idx}
              className="flex-none w-[310px] sm:w-[350px] snap-start rounded-2xl overflow-hidden border border-white/10 hover:border-sky-400/40 transition-all shadow-xl hover:scale-[1.02] bg-[#0f1325]"
            >
              <Image
                src={s.src}
                alt={s.title}
                width={700}
                height={394}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 text-center text-xs font-bold text-slate-300">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
