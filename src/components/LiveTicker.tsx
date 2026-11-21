"use client";

import { useState, useEffect } from "react";
import { Users, Trophy, Zap, ShieldCheck } from "lucide-react";

const TICKER_ITEMS = [
  { icon: <Zap size={14} className="text-amber-500 fill-amber-400" />, text: "Room #4912 · Player3829 hit a 6x Perfect Move Streak" },
  { icon: <Trophy size={14} className="text-amber-600 fill-amber-400" />, text: "Hall of Fame · WinnerAlpha unlocked Arcane Void Aura" },
  { icon: <Users size={14} className="text-sky-600" />, text: "VIP Gold Arena #108 · 7/7 Players Active with Martial Arts Pack" },
  { icon: <ShieldCheck size={14} className="text-emerald-600" />, text: "Weekly Tournament · Player2663 holds the #1 Champion Podium" },
];

export function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = TICKER_ITEMS[index];

  return (
    <div className="w-full bg-[#1d1340] text-white py-2 px-4 border-y border-[#1d1340] overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] tracking-wider uppercase font-black text-amber-400">
            Live Arena:
          </span>
        </div>

        <div className="flex items-center gap-2 transition-all duration-300">
          {current.icon}
          <span className="truncate max-w-[260px] sm:max-w-none text-slate-200">
            {current.text}
          </span>
        </div>

        <div className="hidden sm:inline-flex text-[11px] font-black text-slate-400">
          Android Exclusive
        </div>
      </div>
    </div>
  );
}
