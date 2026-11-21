"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Trophy, Zap, ShieldCheck } from "lucide-react";

const MOVES = [
  { id: "jump", label: "Jump", icon: "⬆️", color: "bg-sky-400 text-white" },
  { id: "spin", label: "Spin", icon: "🔄", color: "bg-purple-400 text-white" },
  { id: "crouch", label: "Crouch", icon: "⬇️", color: "bg-amber-400 text-[#1d1340]" },
  { id: "wave", label: "Wave", icon: "👋", color: "bg-emerald-400 text-white" },
  { id: "punch", label: "Punch", icon: "🥊", color: "bg-rose-400 text-white" },
  { id: "kick", label: "Kick", icon: "🦵", color: "bg-teal-400 text-white" },
];

export function Hero() {
  const [combo, setCombo] = useState(3);
  const [lastMove, setLastMove] = useState("Jump");
  const [activeAnim, setActiveAnim] = useState(false);

  const handleMovePress = (moveLabel: string) => {
    setLastMove(moveLabel);
    setCombo((prev) => prev + 1);
    setActiveAnim(true);
    setTimeout(() => setActiveAnim(false), 400);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Decorative Cartoon Clouds & Balloon */}
      <div className="absolute top-12 left-4 sm:left-16 w-36 sm:w-56 h-16 sm:h-24 bg-white/70 rounded-full blur-[1px] cloud-float-1 pointer-events-none -z-10 shadow-sm" />
      <div className="absolute top-24 right-6 sm:right-24 w-44 sm:w-64 h-18 sm:h-28 bg-white/60 rounded-full blur-[1px] cloud-float-2 pointer-events-none -z-10 shadow-sm" />
      
      {/* Cartoon Hot Air Balloon Floating in Background */}
      <div className="hidden md:flex flex-col items-center absolute top-20 right-1/4 pointer-events-none -z-10 animate-gentle-bounce opacity-85">
        <div className="w-14 h-16 rounded-full bg-gradient-to-b from-[#ff5d8f] via-[#ffc93c] to-[#38bdf8] border-2 border-[#1d1340] shadow-md flex items-center justify-center">
          <span className="text-xs">🎈</span>
        </div>
        <div className="w-1 h-2 bg-[#1d1340]"></div>
        <div className="w-4 h-3 bg-amber-700 rounded-sm border border-[#1d1340]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Call To Action (Production Ready) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#1d1340] shadow-[0_3px_0_#1d1340] text-xs sm:text-sm font-extrabold text-[#1d1340] mb-6">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Real-Time 7-Player Party Battle · Free To Play</span>
            </div>

            {/* Main Sticker Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-[#1d1340] mb-6">
              WATCH. MEMORIZE.{" "}
              <span className="inline-block text-[#ffc93c] drop-shadow-[0_4px_0_#1d1340]">
                COPY
              </span>{" "}
              THE{" "}
              <span className="inline-block text-[#ff5d8f] drop-shadow-[0_4px_0_#1d1340]">
                MOVES!
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4a3f7a] font-medium max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Step onto the center podium with up to 7 players worldwide! Watch the round leader execute a rapid sequence of action moves, then copy them in exact order within the 0.8s reaction window. Miss a single move and you&apos;re eliminated!
            </p>

            {/* Action Buttons: Direct Production */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              
              {/* Google Play Store Badge Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn game-btn-yellow text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-2xl group shadow-[0_6px_0_#1d1340]"
              >
                <svg className="w-6 h-6 fill-[#1d1340] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] tracking-widest uppercase font-black leading-none text-[#1d1340]/70">
                    GET IT ON
                  </span>
                  <span className="block text-base sm:text-lg font-black leading-tight text-[#1d1340]">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Explore Market Button */}
              <Link
                href="/#market"
                className="game-btn game-btn-teal text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-2xl"
              >
                <span>🛒 Community Market</span>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-extrabold text-[#1d1340]">
              <span className="game-pill bg-white">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Free to Play
              </span>
              <span className="game-pill bg-white">
                <Trophy className="w-4 h-4 text-amber-500" /> Weekly Hall of Fame
              </span>
              <span className="game-pill bg-white">
                <Zap className="w-4 h-4 text-sky-500" /> Instant Guest Play
              </span>
            </div>

          </div>

          {/* Right Column: Authentic In-Game Stage Interactive Preview */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Floating Game Badges */}
            <div className="absolute -top-4 -left-2 z-20 game-pill bg-amber-300 text-xs sm:text-sm">
              <span>⚡</span> 0.8s Move Window
            </div>
            <div className="absolute -bottom-3 right-4 z-20 game-pill bg-cyan-200 text-xs sm:text-sm">
              <span>💎</span> Community Market
            </div>

            {/* Main Stage Simulation Box */}
            <div className="game-card p-5 sm:p-7 relative overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#fffaf0]">
              
              {/* Stage Header Info */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#1d1340]/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 border border-[#1d1340]"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 border border-[#1d1340]"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-[#1d1340]"></span>
                  <span className="text-xs font-black text-[#1d1340] ml-2 tracking-wider">
                    ROOM: 7/7 PLAYERS
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-100 border border-[#1d1340] text-xs font-black text-emerald-800">
                  ROUND 4/5
                </div>
              </div>

              {/* Center Game Arena Podium & Character */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-[#38bdf8] to-[#7dd3fc] border-2 border-[#1d1340] flex flex-col items-center justify-end p-4 overflow-hidden shadow-inner">
                
                {/* Floating Combos & Notification */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                  <div className="game-pill bg-[#ffc93c] text-xs font-black py-0.5 px-3 animate-pulse">
                    🔥 COMBO {combo}x!
                  </div>
                  <div className="text-[11px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Last Move: <span className="text-amber-200">{lastMove}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className="game-pill bg-white text-xs font-bold py-0.5 px-2.5">
                    🪙 +{combo * 25} Coins
                  </div>
                </div>

                {/* Character Mascot & Podium */}
                <div className="relative flex flex-col items-center justify-center">
                  
                  {/* Arcane Glowing Aura Ring */}
                  <div className="absolute -inset-6 rounded-full bg-cyan-300/40 blur-md animate-ping" style={{ animationDuration: '3s' }}></div>

                  {/* Character Avatar */}
                  <div className={`relative w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-200 ${activeAnim ? "-translate-y-4 scale-110" : "animate-gentle-bounce"}`}>
                    <Image
                      src="/images/app-icon.png"
                      alt="Player Character"
                      fill
                      className="object-contain drop-shadow-[0_8px_4px_rgba(0,0,0,0.35)]"
                    />
                  </div>

                  {/* Stage Podium (Yellow base with pink ring like in screenshots) */}
                  <div className="w-48 sm:w-56 h-10 sm:h-12 bg-amber-400 rounded-full border-[3px] border-[#1d1340] shadow-[0_6px_0_#b45309] relative flex items-center justify-center">
                    <div className="w-40 sm:w-48 h-5 sm:h-6 bg-[#ff5d8f] rounded-full border-2 border-[#1d1340]/60 flex items-center justify-center">
                      <span className="text-[10px] font-black tracking-widest text-white uppercase">
                        CENTER PODIUM
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Interactive Move Controls (Clickable!) */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#1d1340] uppercase tracking-wider">
                    Tap to Copy Moves:
                  </span>
                  <span className="text-[11px] font-bold text-[#ff5d8f]">
                    ⚡ Tap a move below!
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {MOVES.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => handleMovePress(m.label)}
                      className={`game-btn ${m.color} p-2 text-xs flex flex-col items-center justify-center rounded-xl border-2 border-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-1 active:shadow-none transition-all`}
                    >
                      <span className="text-lg leading-none mb-1">{m.icon}</span>
                      <span className="font-black text-[11px] tracking-tight">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
