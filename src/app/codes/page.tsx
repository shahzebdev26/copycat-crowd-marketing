"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Gift, Sparkles, AlertCircle, ShoppingBag, ArrowRight } from "lucide-react";

interface PromoCode {
  code: string;
  rewardType: "crystals" | "coins";
  rewardAmount: number;
  rewardLabel: string;
  badge: string;
  desc: string;
  expires: string;
}

const PROMO_CODES: PromoCode[] = [
  {
    code: "LAUNCH100",
    rewardType: "crystals",
    rewardAmount: 100,
    rewardLabel: "100 Crystals",
    badge: "GLOBAL LAUNCH",
    desc: "Celebrate the global release of Copycat Crowd! Unlock exclusive crates, premium move packs, and special toppers.",
    expires: "Never Expires",
  },
  {
    code: "COPYCAT500",
    rewardType: "coins",
    rewardAmount: 500,
    rewardLabel: "500 Mimic Coins",
    badge: "COMMUNITY BONUS",
    desc: "Free Mimic Coins to spend in the in-game Shop, open Party & Neon crates, or browse the Community Market.",
    expires: "Active",
  },
  {
    code: "WELCOME",
    rewardType: "coins",
    rewardAmount: 250,
    rewardLabel: "250 Mimic Coins",
    badge: "STARTER GIFT",
    desc: "A warm welcome bonus for all new players starting their journey to become the ultimate Copycat Champion.",
    expires: "Active",
  },
];

export default function CodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    }).catch(() => {
      // Fallback
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    });
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffe066] border-[2.5px] border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_3px_0_#1d1340] mb-5 uppercase tracking-wide">
          <Gift size={16} className="text-[#1d1340]" />
          Official Rewards & Redeem Codes
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1d1340] mb-4">
          Claim Free <span className="text-[#06b6d4]">Crystals</span> & <span className="text-[#f59e0b]">Coins</span>!
        </h1>

        <p className="text-base sm:text-lg font-bold text-[#4a3f7a] leading-relaxed">
          Copy any active promo code below, jump into Copycat Crowd, open the <b className="text-[#1d1340]">Shop &rarr; Redeem</b> tab, and paste your code for instant free in-game loot!
        </p>
      </div>

      {/* Copy Toast Notification */}
      {copiedCode && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#22c55e] text-white border-[3px] border-[#1d1340] px-5 py-3 rounded-2xl shadow-[0_6px_0_#1d1340] flex items-center gap-3 font-black text-sm animate-bounce">
          <Check size={20} strokeWidth={3} />
          <span>Code &quot;{copiedCode}&quot; copied to clipboard!</span>
        </div>
      )}

      {/* Codes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {PROMO_CODES.map((item) => {
          const isCopied = copiedCode === item.code;
          const isCrystal = item.rewardType === "crystals";

          return (
            <div
              key={item.code}
              className="game-card bg-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1.5 shadow-[0_8px_0_#1d1340]"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-3 ${
                  isCrystal
                    ? "bg-gradient-to-r from-[#06b6d4] to-[#38bdf8]"
                    : "bg-gradient-to-r from-[#f59e0b] to-[#ffc93c]"
                }`}
              />

              <div>
                {/* Badge & Expiry */}
                <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                  <span
                    className={`text-[11px] font-black px-2.5 py-1 rounded-lg border-2 border-[#1d1340] uppercase tracking-wider ${
                      isCrystal
                        ? "bg-[#e0f2fe] text-[#0369a1]"
                        : "bg-[#fef3c7] text-[#b45309]"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-bold text-[#64748b]">
                    {item.expires}
                  </span>
                </div>

                {/* Reward Display Banner */}
                <div
                  className={`p-4 rounded-2xl border-2 border-[#1d1340] flex items-center gap-3.5 mb-5 ${
                    isCrystal
                      ? "bg-gradient-to-br from-[#ecfeff] to-[#cffafe]"
                      : "bg-gradient-to-br from-[#fffbeb] to-[#fef3c7]"
                  }`}
                >
                  {/* Currency Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border-2 border-[#1d1340] flex items-center justify-center shrink-0 shadow-[0_3px_0_#1d1340] ${
                      isCrystal ? "bg-[#06b6d4]" : "bg-[#f59e0b]"
                    }`}
                  >
                    {isCrystal ? (
                      <svg className="w-7 h-7 fill-white drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]" viewBox="0 0 24 24">
                        <path d="M12 2L3 9l9 13 9-13-9-7zM5.5 9.5l6.5-5.5 6.5 5.5-6.5 9-6.5-9z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 fill-white drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M12 6v12M9 9h6M9 15h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#1d1340] leading-none mb-1">
                      {item.rewardLabel}
                    </div>
                    <div className="text-xs font-bold text-[#4a3f7a]">
                      {isCrystal ? "Premium Currency" : "Free Match Currency"}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Code Box & Copy Button */}
              <div>
                <div className="bg-[#f8fafc] border-2 border-[#1d1340] rounded-xl p-2.5 mb-3 flex items-center justify-between gap-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                  <span className="font-mono font-black text-lg sm:text-xl tracking-wider text-[#1d1340] pl-2 select-all">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider pr-1">
                    TAP COPY
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.code)}
                  className={`w-full py-3 px-4 rounded-xl border-[2.5px] border-[#1d1340] font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isCopied
                      ? "bg-[#22c55e] text-white shadow-[0_2px_0_#1d1340] translate-y-1"
                      : "bg-[#ffc93c] hover:bg-[#ffd255] text-[#1d1340] shadow-[0_4px_0_#1d1340] active:translate-y-1 active:shadow-[0_1px_0_#1d1340]"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check size={18} strokeWidth={3} />
                      <span>COPIED! PASTE IN GAME</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} strokeWidth={2.5} />
                      <span>COPY CODE</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* How to Redeem Step-by-Step Guide */}
      <div className="game-card bg-white p-6 sm:p-10 mb-16 shadow-[0_8px_0_#1d1340]">
        <div className="flex items-center gap-2.5 mb-4">
          <Sparkles className="text-[#ff5d8f]" size={24} />
          <h2 className="text-2xl sm:text-4xl font-black text-[#1d1340]">
            How to Redeem Codes in 4 Simple Steps
          </h2>
        </div>
        <p className="text-sm sm:text-base font-bold text-[#4a3f7a] mb-8">
          Redeeming your free gift codes takes less than 15 seconds. Follow these steps on your mobile phone:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ff5d8f] text-white font-black text-lg border-2 border-[#1d1340] flex items-center justify-center mb-4 shadow-[0_2px_0_#1d1340]">
                1
              </div>
              <h3 className="font-black text-lg text-[#1d1340] mb-2">Open the Game</h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a] leading-relaxed">
                Launch <b className="text-[#1d1340]">Copycat Crowd</b> on your Android phone and load into the main home lobby.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#22c7b5] text-white font-black text-lg border-2 border-[#1d1340] flex items-center justify-center mb-4 shadow-[0_2px_0_#1d1340]">
                2
              </div>
              <h3 className="font-black text-lg text-[#1d1340] mb-2">Tap Shop Icon</h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a] leading-relaxed">
                Tap the yellow <b className="text-[#1d1340]">Shop</b> button located in the bottom navigation dock.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ffc93c] text-[#1d1340] font-black text-lg border-2 border-[#1d1340] flex items-center justify-center mb-4 shadow-[0_2px_0_#1d1340]">
                3
              </div>
              <h3 className="font-black text-lg text-[#1d1340] mb-2">Select Redeem Tab</h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a] leading-relaxed">
                Switch to the dedicated <b className="text-[#1d1340]">Redeem</b> tab (gift box 🎁 icon) next to VIP.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4] text-white font-black text-lg border-2 border-[#1d1340] flex items-center justify-center mb-4 shadow-[0_2px_0_#1d1340]">
                4
              </div>
              <h3 className="font-black text-lg text-[#1d1340] mb-2">Paste & Claim!</h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4a3f7a] leading-relaxed">
                Paste your promo code, tap <b className="text-[#1d1340]">Redeem Code</b>, and your loot is credited instantly!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules & FAQ Card */}
      <div className="game-card bg-white p-6 sm:p-8 mb-16 shadow-[0_8px_0_#1d1340]">
        <h3 className="text-xl sm:text-2xl font-black text-[#1d1340] mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-[#f59e0b]" />
          Redeem Codes Tips & Rules
        </h3>
        <ul className="space-y-3 text-xs sm:text-sm font-bold text-[#4a3f7a]">
          <li className="flex items-start gap-2.5">
            <span className="text-[#22c55e] font-black">&bull;</span>
            <span><b>Case-Insensitive:</b> You can type codes in uppercase or lowercase — the game automatically formats it for you.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#22c55e] font-black">&bull;</span>
            <span><b>One Use Per Player:</b> Each promo code can be redeemed once per account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#22c55e] font-black">&bull;</span>
            <span><b>Permanent Inventory:</b> Crystals and Mimic Coins redeemed through codes remain in your account permanently.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#22c55e] font-black">&bull;</span>
            <span><b>New Codes Updates:</b> Bookmark this official page and check back regularly whenever new seasonal events, game updates, or follower milestones are announced!</span>
          </li>
        </ul>
      </div>

      {/* Download CTA Banner */}
      <div className="game-card bg-gradient-to-r from-[#1b75d0] to-[#38bdf8] p-8 sm:p-12 text-center text-white border-[3.5px] border-[#1d1340] shadow-[0_8px_0_#1d1340] relative overflow-hidden">
        <h2 className="text-3xl sm:text-5xl font-black mb-3 drop-shadow-[0_3px_0_rgba(0,0,0,0.3)]">
          Ready to Claim Your Loot?
        </h2>
        <p className="text-base sm:text-xl font-bold mb-8 text-sky-100 max-w-xl mx-auto drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
          Download Copycat Crowd on Google Play Store now and dive into hilarious multiplayer memory battles!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn game-btn-yellow text-base sm:text-lg py-3 px-8 rounded-full flex items-center gap-3 shadow-[0_4px_0_#1d1340]"
          >
            <svg className="w-5 h-5 fill-[#1d1340] shrink-0" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/>
            </svg>
            <span className="font-black">Download on Google Play</span>
          </a>

          <Link
            href="/"
            className="game-btn game-btn-white text-base py-3 px-6 rounded-full flex items-center gap-2 shadow-[0_4px_0_#1d1340]"
          >
            <span>Back to Home</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
}
