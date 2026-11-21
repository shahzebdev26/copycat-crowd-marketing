"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How do moves work in Copycat Crowd?",
    a: "Each round, one player is chosen as the leader and performs an action sequence of moves (e.g. Jump, Spin, Crouch, Wave, Punch, Kick). Once the sequence is complete, all other players must repeat the exact moves in order within a 0.8-second reflex window. Miss one move, and you are eliminated from that round!",
  },
  {
    q: "What are Move Packs and how do they work?",
    a: "Move Packs expand the types of moves available during matches. The Classic Pack includes 6 standard moves (Jump, Spin, Crouch, Wave, Lean Left & Right). VIP room hosts can select alternative packs like Martial Arts (High Kick, Heavy Punch, Shield Guard) or Rock-Paper-Scissors to test faster pattern recognition with +50% coin bonuses for all players.",
  },
  {
    q: "How does the Community Market work?",
    a: "The Community Market is an in-game shop where players can find, buy, or list spare cosmetic items like toppers, auras, and move packs using Crystals. It lets you customize your look and pick up cool items from the community.",
  },
  {
    q: "Is Copycat Crowd pay-to-win?",
    a: "No! All items in Copycat Crowd are purely cosmetic (auras, toppers, skins, titles) or grant coin bonuses. Match victories depend entirely on your memory recall speed, reflex timing, and focus.",
  },
  {
    q: "What happens if an opponent disconnects in a 1v1 match?",
    a: "Copycat Crowd features fair-play sudden death logic: if only two players remain and your opponent disconnects or leaves the game, you are immediately awarded the victory, victory rewards, and Hall of Fame win credits.",
  },
  {
    q: "Do I need to create an account to play?",
    a: "No! Copycat Crowd supports instant guest play. Your stats, unlocked items, and coin balance are automatically saved to your device. You can optionally link Google Sign-In at any time to sync progress across multiple devices.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-white/70 border-t-[3px] border-[#1d1340]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <span>❓ FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Got Questions?
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Everything you need to know about moves, multiplayer rules, and customizing your character.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="game-card p-5 sm:p-6 transition-all cursor-pointer bg-white"
                onClick={() => toggle(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-black text-base sm:text-lg text-[#1d1340]">
                    {faq.q}
                  </h3>
                  <div
                    className={`p-1.5 rounded-full border-2 border-[#1d1340] transition-transform ${
                      isOpen ? "rotate-180 bg-[#ffc93c]" : "bg-slate-100"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-4 pt-4 border-t-2 border-[#1d1340]/10 text-sm sm:text-base text-[#4a3f7a] font-medium leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
