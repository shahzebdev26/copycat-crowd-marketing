"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

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
    title: "Community Market Showcase",
    desc: "Browse community listings for cool toppers, charms, and auras.",
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
  const [modalOpen, setModalOpen] = useState(false);

  const prev = useCallback(() => {
    setActiveIdx((i) => (i === 0 ? SCREENSHOTS.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setActiveIdx((i) => (i === SCREENSHOTS.length - 1 ? 0 : i + 1));
  }, []);

  // Keyboard navigation when modal is open
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, prev, next]);

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
            Take a look inside Copycat Crowd: vibrant 3D arenas, custom auras, community item market, and fast memory showdowns.
          </p>
        </div>

        {/* Featured Screenshot Viewer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="game-card p-3 sm:p-4 bg-white relative">
            
            {/* Clickable Image Box with Zoom Indicator */}
            <div
              onClick={() => setModalOpen(true)}
              className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-[#1d1340] bg-slate-900 shadow-inner cursor-zoom-in"
              role="button"
              tabIndex={0}
              aria-label="Click to open full-screen close-up"
            >
              <Image
                src={SCREENSHOTS[activeIdx].src}
                alt={SCREENSHOTS[activeIdx].title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />

              {/* Hover Zoom Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <ZoomIn size={14} />
                <span>Click to view close-up</span>
              </div>

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/95 border-2 border-[#1d1340] text-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-0.5 hover:bg-white hover:scale-105 transition-all z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/95 border-2 border-[#1d1340] text-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-0.5 hover:bg-white hover:scale-105 transition-all z-10"
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
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="game-pill bg-sky-100 text-xs text-[#1d1340] hover:bg-sky-200"
                >
                  <ZoomIn size={12} />
                  <span>Enlarge</span>
                </button>
                <span className="text-xs font-mono font-black text-slate-400">
                  {activeIdx + 1} / {SCREENSHOTS.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2">
          {SCREENSHOTS.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-16 sm:w-24 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                activeIdx === idx
                  ? "border-[#ff5d8f] scale-105 shadow-[0_3px_0_#1d1340] ring-2 ring-[#ff5d8f]/30"
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

      {/* Fullscreen Close-Up Lightbox Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Top Bar with Title and Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between pb-3 text-white"
          >
            <div>
              <h3 className="font-black text-lg sm:text-xl drop-shadow">
                {SCREENSHOTS[activeIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {SCREENSHOTS[activeIdx].desc}
              </p>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-105"
              aria-label="Close close-up view"
            >
              <X size={22} />
            </button>
          </div>

          {/* Close-Up High-Res Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] rounded-2xl overflow-hidden border-2 border-white/20 bg-black/60 shadow-2xl flex items-center justify-center"
          >
            <Image
              src={SCREENSHOTS[activeIdx].src}
              alt={SCREENSHOTS[activeIdx].title}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />

            {/* Left / Right Arrow Buttons in Modal */}
            <button
              onClick={prev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/30 text-white shadow-lg transition-transform hover:scale-110"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/30 text-white shadow-lg transition-transform hover:scale-110"
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Thumbnails & Counter */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between pt-3 text-xs text-slate-400 font-mono font-bold"
          >
            <span>Tip: Use Left/Right arrow keys or Esc to close</span>
            <span>
              {activeIdx + 1} of {SCREENSHOTS.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
