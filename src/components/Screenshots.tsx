"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCREENSHOTS = [
  {
    src: "/images/screenshot-1.jpg",
    title: "Hall of Fame Milestones",
    desc: "Earn win milestones, permanent titles, and cosmic rewards.",
  },
  {
    src: "/images/screenshot-2.jpg",
    title: "Cosmetic Aura Customization",
    desc: "Equip legendary and arcane particle auras with 360° stage rotation.",
  },
  {
    src: "/images/screenshot-3.jpg",
    title: "Crystal Exchange Modal",
    desc: "Trade crystals for coins with transparent balance verification.",
  },
  {
    src: "/images/screenshot-4.jpg",
    title: "Peer-to-Peer Community Market",
    desc: "Browse live player listings with clean item cards and price tags.",
  },
  {
    src: "/images/screenshot-5.jpg",
    title: "In-Game Action Sequence",
    desc: "Watch the leader, memorize the moves, and copy accurately.",
  },
  {
    src: "/images/screenshot-6.jpg",
    title: "Center Stage Arena",
    desc: "Elimination round action with up to 7 players in real-time.",
  },
  {
    src: "/images/screenshot-7.jpg",
    title: "Podium Victory Celebration",
    desc: "Survive all rounds to stand atop the winner podium.",
  },
  {
    src: "/images/screenshot-8.jpg",
    title: "Custom Move Pack Selector",
    desc: "Unlock and equip Classic, Martial Arts, and RPS packs.",
  },
];

export function Screenshots() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? SCREENSHOTS.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === SCREENSHOTS.length - 1 ? 0 : i + 1));

  return (
    <section id="screenshots" className="py-20 relative bg-white/70 border-y-[3px] border-[#1d1340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-200 border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <span>📸 AUTHENTIC GAMEPLAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Gameplay Screenshots
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Take a look inside Copycat Crowd: vibrant 3D arenas, custom auras, market trading, and tense memory showdowns.
          </p>
        </div>

        {/* Featured Screenshot Viewer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="game-card p-3 sm:p-4 bg-white relative">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-[#1d1340] bg-slate-900 shadow-inner">
              <Image
                src={SCREENSHOTS[activeIdx].src}
                alt={SCREENSHOTS[activeIdx].title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 border-2 border-[#1d1340] text-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-0.5 hover:bg-white"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 border-2 border-[#1d1340] text-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-0.5 hover:bg-white"
                aria-label="Next screenshot"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Caption */}
            <div className="pt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-black text-lg text-[#1d1340]">
                  {SCREENSHOTS[activeIdx].title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a]">
                  {SCREENSHOTS[activeIdx].desc}
                </p>
              </div>
              <span className="text-xs font-mono font-black text-slate-400">
                {activeIdx + 1} / {SCREENSHOTS.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2">
          {SCREENSHOTS.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-16 sm:w-24 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                activeIdx === idx
                  ? "border-[#ff5d8f] scale-105 shadow-[0_3px_0_#1d1340]"
                  : "border-[#1d1340]/30 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={s.src}
                alt={s.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
