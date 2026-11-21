"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, RotateCw, Trophy, Zap, ShieldCheck } from "lucide-react";

const AURAS = [
  {
    id: "void",
    name: "Void Aura",
    rarity: "Arcane",
    rarityStyle: "bg-purple-100 text-purple-900 border-purple-400",
    glowColor: "from-purple-600/40 via-indigo-500/30 to-transparent",
    ringColor: "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]",
    stat: "+25% Match Coins",
    fx: "Dark Matter Pulse",
    unlock: "35 All-Time Career Wins",
  },
  {
    id: "solar",
    name: "Solar Flare",
    rarity: "Legendary",
    rarityStyle: "bg-amber-100 text-amber-900 border-amber-400",
    glowColor: "from-amber-500/40 via-orange-400/30 to-transparent",
    ringColor: "border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.6)]",
    stat: "+15% Match Coins",
    fx: "Solar Corona Flare",
    unlock: "15 All-Time Career Wins",
  },
  {
    id: "lightning",
    name: "Champion Lightning",
    rarity: "Legendary",
    rarityStyle: "bg-sky-100 text-sky-900 border-sky-400",
    glowColor: "from-sky-500/40 via-cyan-400/30 to-transparent",
    ringColor: "border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.6)]",
    stat: "+15% Match Coins",
    fx: "Electric Storm Surge",
    unlock: "Weekly Leaderboard Top 3",
  },
  {
    id: "cosmic",
    name: "Cosmic Starburst",
    rarity: "Arcane",
    rarityStyle: "bg-rose-100 text-rose-900 border-rose-400",
    glowColor: "from-rose-500/40 via-pink-400/30 to-transparent",
    ringColor: "border-rose-400 shadow-[0_0_25px_rgba(244,63,94,0.6)]",
    stat: "+25% Match Coins",
    fx: "Stellar Galaxy Orbit",
    unlock: "50 All-Time Career Wins",
  },
];

export function AuraLab() {
  const [selectedAura, setSelectedAura] = useState(AURAS[0]);
  const [rotation, setRotation] = useState(0);

  const rotatePodium = () => {
    setRotation((prev) => prev + 45);
  };

  return (
    <section className="py-20 relative bg-white border-y-[3px] border-[#1d1340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>COSMETIC SHOWROOM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Interactive Aura Lab
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Equip dynamic particle auras earned through career milestones. Select an aura below and rotate the 360° showroom podium.
          </p>
        </div>

        {/* Aura Lab Interactive Stage Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: 360° Rotating Turntable Podium */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="game-card w-full aspect-square max-w-md p-6 bg-gradient-to-b from-sky-50 via-slate-50 to-amber-50 relative flex flex-col items-center justify-center overflow-hidden">
              
              {/* Dynamic Aura Glow Layer */}
              <div
                className={`absolute inset-10 rounded-full bg-gradient-to-br ${selectedAura.glowColor} blur-2xl animate-aura-pulse transition-all duration-500`}
              />

              {/* Dynamic Aura Particle Ring */}
              <div
                className={`absolute inset-14 rounded-full border-[3px] ${selectedAura.ringColor} border-dashed animate-turntable transition-all duration-500 pointer-events-none`}
              />

              {/* Character Mascot on Turntable */}
              <div
                style={{ transform: `rotate(${rotation}deg)` }}
                className="relative transition-transform duration-500 ease-out flex flex-col items-center justify-center"
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 animate-gentle-bounce">
                  <Image
                    src="/images/app-icon.png"
                    alt="Character Avatar"
                    fill
                    className="object-contain drop-shadow-[0_12px_6px_rgba(0,0,0,0.3)]"
                  />
                </div>

                {/* Turntable Base */}
                <div className="w-52 h-10 bg-amber-400 rounded-full border-[3px] border-[#1d1340] shadow-[0_6px_0_#b45309] relative flex items-center justify-center">
                  <div className="w-44 h-5 bg-[#ff5d8f] rounded-full border-2 border-[#1d1340]/50 flex items-center justify-center">
                    <span className="text-[9px] font-black tracking-widest text-white uppercase">
                      360° TURNTABLE
                    </span>
                  </div>
                </div>
              </div>

              {/* Rotate Button Overlay */}
              <button
                onClick={rotatePodium}
                className="game-btn game-btn-white absolute bottom-4 right-4 py-1.5 px-3 rounded-xl text-xs font-black shadow-[0_3px_0_#1d1340] flex items-center gap-1.5 hover:bg-slate-50"
              >
                <RotateCw size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                <span>Rotate 45°</span>
              </button>

            </div>

          </div>

          {/* Right Column: Aura Selector & Stats Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <span className="text-xs font-black uppercase text-[#1d1340] tracking-wider">
              Select Aura:
            </span>

            {/* Aura Selector Pills */}
            <div className="grid grid-cols-2 gap-3 mb-2">
              {AURAS.map((a) => {
                const isSelected = selectedAura.id === a.id;
                return (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAura(a)}
                    className={`p-3 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? "border-[#1d1340] bg-[#ffc93c] shadow-[0_4px_0_#1d1340] scale-[1.02]"
                        : "border-slate-200 bg-slate-50 hover:bg-white text-slate-700"
                    }`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#1d1340]/60 mb-0.5">
                      {a.rarity}
                    </div>
                    <div className="font-black text-sm text-[#1d1340] leading-snug">
                      {a.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Aura In-Game Stat Box */}
            <div className="game-card p-5 bg-slate-50 border-2 border-[#1d1340]">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
                <span className="font-black text-base text-[#1d1340]">
                  {selectedAura.name}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase ${selectedAura.rarityStyle}`}>
                  {selectedAura.rarity}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-bold text-[#4a3f7a]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Coin Bonus:</span>
                  <span className="font-black text-emerald-700 flex items-center gap-1">
                    <Zap size={13} className="fill-emerald-500" /> {selectedAura.stat}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Particle FX:</span>
                  <span className="text-[#1d1340] font-black">{selectedAura.fx}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Unlock:</span>
                  <span className="text-purple-700 font-black">{selectedAura.unlock}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
