"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Trophy, Check, ArrowRight, ShieldCheck, Zap, Users, Gem } from "lucide-react";

const HERO_VIEWS = [
  {
    id: "arena",
    label: "Arena Battle",
    tag: "7-Player Match",
    src: "/images/screenshot-6.jpg",
    desc: "Real-time 7-player elimination round on center stage.",
  },
  {
    id: "aura",
    label: "Aura Showroom",
    tag: "Cosmetic Loadout",
    src: "/images/screenshot-2.jpg",
    desc: "Equip legendary particle auras with 360° stage inspection.",
  },
  {
    id: "podium",
    label: "Winner Podium",
    tag: "Victory Celebration",
    src: "/images/screenshot-7.jpg",
    desc: "Stand atop the 1st place podium and claim the trophy.",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentView = HERO_VIEWS[activeTab];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
      
      {/* Background Soft Glow & Dot Pattern */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-200/50 via-cyan-100/30 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#1d1340] shadow-[0_2px_0_#1d1340] text-xs font-black text-[#1d1340] mb-6">
              <span className="grid size-4 place-items-center rounded-full bg-amber-400 text-[#1d1340]">
                <Sparkles size={10} className="fill-[#1d1340]" />
              </span>
              <span>Free to Play · Real-Time 7-Player Party Battle · Android</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.04] text-[#1d1340] mb-6">
              Watch. Memorize.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-500">
                Copy The Moves.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4a3f7a] font-medium max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Step onto the center podium with up to 7 players worldwide! Watch the round leader execute an action-packed string of moves, then copy the sequence in exact order within the 0.8s reaction window. Outlast the crowd to claim the crown.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              
              {/* Google Play Store Badge Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn game-btn-yellow text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-2xl group shadow-[0_5px_0_#1d1340]"
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

              {/* See How It Works Button */}
              <Link
                href="/#how-to-play"
                className="game-btn game-btn-white text-base px-6 py-3.5 rounded-2xl flex items-center gap-2 hover:bg-slate-50"
              >
                <span>How to Play</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust Checks Row */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm font-bold text-[#4a3f7a]">
              <li className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" /> Instant Guest Play
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" /> 7-Player Matchmaking
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" /> 100% Free to Play
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" /> Zero Pay-to-Win
              </li>
            </ul>

          </div>

          {/* Right Column: High-End Live Game Window Mockup */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Top-Right Floating Chip */}
            <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2 rounded-xl border-2 border-[#1d1340] bg-white py-1.5 px-3.5 text-xs font-black text-[#1d1340] shadow-[0_3px_0_#1d1340]">
              <Users size={14} className="text-sky-600" />
              <span>7 Players Active</span>
            </div>

            {/* Main Window Frame Container */}
            <div className="game-card overflow-hidden bg-white shadow-2xl relative">
              
              {/* Window Chrome Top Bar */}
              <div className="flex h-11 items-center justify-between border-b-2 border-[#1d1340]/15 bg-slate-50 px-4">
                <div className="flex items-center gap-1.5" aria-hidden>
                  <span className="size-2.5 rounded-full bg-rose-400 border border-[#1d1340]/40" />
                  <span className="size-2.5 rounded-full bg-amber-400 border border-[#1d1340]/40" />
                  <span className="size-2.5 rounded-full bg-emerald-400 border border-[#1d1340]/40" />
                </div>
                
                {/* Centered Room Pill with Live Pulse */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#1d1340]/20 px-3 py-1 text-[11px] font-black text-[#1d1340] shadow-sm">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Room #2847 · Round 4/5</span>
                </div>

                <div className="text-[11px] font-black text-slate-400">
                  0.8s
                </div>
              </div>

              {/* View Switcher Tabs Bar */}
              <div className="grid grid-cols-3 border-b border-[#1d1340]/10 bg-slate-100/70 p-1.5 gap-1 text-xs font-black">
                {HERO_VIEWS.map((v, idx) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center ${
                      activeTab === idx
                        ? "bg-white text-[#1d1340] border border-[#1d1340]/30 shadow-sm"
                        : "text-slate-500 hover:text-[#1d1340]"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Game View Display Aspect */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={currentView.src}
                  alt={currentView.label}
                  fill
                  className="object-contain transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white">
                  <div>
                    <span className="text-[10px] font-black tracking-wider uppercase text-amber-300 block">
                      {currentView.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      {currentView.desc}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom-Left Floating Lead Card */}
            <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-4 z-20 rounded-2xl border-2 border-[#1d1340] bg-white p-3 sm:p-4 shadow-[0_5px_0_#1d1340] max-w-[240px] sm:max-w-[270px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 rounded-lg bg-amber-100 border border-[#1d1340]/20 text-amber-800">
                  <Trophy size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400">
                    Leaderboard
                  </div>
                  <div className="text-xs font-black text-[#1d1340]">
                    Current Leader: You
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-[#4a3f7a] pt-1.5 border-t border-slate-100">
                <span className="text-emerald-700 font-black">Streak: 4x Perfect</span>
                <span>+150 Coins</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
