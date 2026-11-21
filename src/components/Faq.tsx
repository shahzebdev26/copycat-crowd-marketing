"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Copycat Crowd free to play?",
      a: "Yes! Copycat Crowd is completely free to download and play. All gameplay modes, private and public multiplayer rooms, and weekly tournaments are 100% accessible to every player. Optional cosmetic items, move packs, and VIP passes are available for players who wish to customize their avatar.",
    },
    {
      q: "How does the Community Marketplace work?",
      a: "Just like CS:GO or Standoff 2, players can list unneeded or duplicate cosmetic items (toppers, auras, skins) for sale in the Community Market for in-game Diamonds. Other players can purchase them directly, and your diamond balance is credited automatically.",
    },
    {
      q: "Can I play with my friends in a private room?",
      a: "Yes! When you tap 'Create Room', you can select Private and share the unique 4-letter room code with your friends. Up to 7 players can join a room across Android and web browsers.",
    },
    {
      q: "What happens if an opponent leaves mid-match?",
      a: "If all opponents forfeit or disconnect from an active match, the sole remaining player is immediately awarded a Forfeit Victory! You will receive your match coins, win bonuses, and credit towards your weekly leaderboard rank.",
    },
    {
      q: "What devices and Android versions are supported?",
      a: "Copycat Crowd is optimized for Android phones and tablets running Android 7.0 (API level 24) and higher, as well as modern WebGL-compatible desktop and mobile browsers.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-semibold mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know about Copycat Crowd, gameplay rules, and Google Play testing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0f1325] border border-white/8 hover:border-white/15 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg cursor-pointer"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
