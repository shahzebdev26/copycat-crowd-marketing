import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Copycat Crowd",
  description: "Official Privacy Policy for Copycat Crowd. Explains how player data is collected, stored, and protected.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="game-card bg-white p-6 sm:p-12 shadow-[0_8px_0_#1d1340]">
        
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 border-2 border-[#1d1340] text-xs font-black text-[#1d1340] mb-3">
          LEGAL & PLAY STORE COMPLIANCE
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1340] mb-2">
          Privacy Policy
        </h1>
        
        <div className="text-xs font-mono font-bold text-slate-500 pb-6 border-b-2 border-slate-100 mb-6">
          Last Updated: November 21, 2026
        </div>

        <div className="space-y-6 text-[#4a3f7a] text-sm sm:text-base leading-relaxed font-medium">
          <p>
            Welcome to <b>Copycat Crowd</b> (&quot;the Game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), developed and operated by <b>Muhammad Hasan Alam</b>. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal and device data when you play Copycat Crowd on Android.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            1. Information We Collect
          </h2>
          <p>We believe in minimal data collection. To provide a functional, fair multiplayer experience, we collect the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Account Information:</b> If you register an account, we store an email address and a securely salted password hash. If you play as a guest, we generate an anonymous randomized player ID and device token so your inventory and rank persist across launches.</li>
            <li><b>Gameplay & Stats Data:</b> We store your in-game player display name, match statistics (matches played, wins, career milestones), equipped cosmetics (toppers, auras, titles, move packs), and virtual currency balances (Mimic Coins and Crystals).</li>
            <li><b>Community Market Transactions:</b> If you list or purchase virtual items on the peer-to-peer Community Market, records of the transaction (item ID, price, seller, buyer, timestamp) are stored in our game database for fair play and fraud prevention.</li>
            <li><b>Technical & Diagnostic Data:</b> Standard connection metadata such as client IP address, operating system version, and error logs to maintain server uptime, mitigate abuse, and optimize game performance.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            2. In-App Purchases & Financial Information
          </h2>
          <p>
            All real-money in-app purchases (such as Crystal Packs and VIP Subscriptions) are processed directly by <b>Google Play Billing</b>. 
          </p>
          <p>
            <b>We do not collect, process, or store credit card numbers, bank account numbers, or billing addresses.</b> Google Play provides our server with an encrypted digital purchase token used solely to verify and grant your purchased in-game items.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            3. How We Use Your Information
          </h2>
          <p>The information we collect is strictly used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain the real-time multiplayer servers and matchmaking rooms.</li>
            <li>Manage player accounts, authenticate sessions, and protect against unauthorized access.</li>
            <li>Calculate weekly global leaderboard rankings and distribute earned seasonal rewards.</li>
            <li>Deliver critical account service emails (such as email verification and password reset codes).</li>
            <li>Prevent cheating, unauthorized automation, and abusive behavior.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            4. Third-Party Service Providers
          </h2>
          <p>We partner with trusted third-party cloud services that adhere to stringent security standards:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Google Play Services:</b> Authentication, in-app billing verification, and crash telemetry.</li>
            <li><b>MongoDB Atlas:</b> Encrypted cloud database for player accounts and game progress.</li>
            <li><b>Render:</b> Cloud hosting infrastructure for our WebSocket game servers.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            5. Children&apos;s Privacy (COPPA Compliance)
          </h2>
          <p>
            Copycat Crowd is designed as a family-friendly party game suitable for ages 13 and above. We do not knowingly collect personal identifiable information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us immediately at <a href="mailto:techsparks.co@gmail.com" className="text-[#ff5d8f] underline font-bold">techsparks.co@gmail.com</a>, and we will promptly delete such data.
          </p>

          <div id="deletion" className="scroll-mt-36 p-6 sm:p-8 rounded-2xl bg-amber-50/90 border-3 border-amber-400 shadow-[0_6px_0_#d97706]">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-200 border-2 border-amber-600 text-[11px] font-black text-amber-900 tracking-wide uppercase">
                Google Play Data Safety
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#1d1340] pb-2">
              6. Account Deletion & Data Retention
            </h2>
            <p className="mb-4 text-[#4a3f7a]">
              In accordance with Google Play developer policies and global privacy regulations, all players have the right to request full, permanent deletion of their account and all associated personal data at any time.
            </p>

            <div className="space-y-4">
              <div className="text-emerald-800 font-black uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2">
                <span>⚡ How to Delete Your Account (Step-by-Step)</span>
              </div>

              {/* Step 1 & 2 Visual Guide Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Step 1 Card */}
                <div className="bg-white border-3 border-[#1d1340] rounded-2xl p-4 shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-lg bg-yellow-300 border-2 border-[#1d1340] text-xs font-black text-[#1d1340]">
                        STEP 1
                      </span>
                      <span className="text-xs font-bold text-slate-500">In-Game Home Screen</span>
                    </div>
                    <h3 className="text-base font-black text-[#1d1340] mb-1">
                      Tap Your Player Name
                    </h3>
                    <p className="text-xs text-[#4a3f7a] mb-3 font-medium">
                      On the game home screen, tap your <b>Player Name / Profile badge</b> located at the top-left corner.
                    </p>
                  </div>

                  {/* High-Res Mockup of Top-Left Profile Button with Arrow */}
                  <div className="bg-gradient-to-b from-[#60a5fa] to-[#38bdf8] border-2 border-[#1d1340] rounded-xl p-4 relative overflow-hidden flex flex-col items-start gap-2 shadow-inner">
                    <div className="text-[10px] font-black uppercase tracking-wider text-white/90">
                      Game Screen (Top-Left)
                    </div>
                    <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border-2 border-[#1d1340] shadow-[0_3px_0_#1d1340]">
                      <span className="w-5 h-5 rounded-full bg-yellow-400 border border-[#1d1340] flex items-center justify-center text-xs font-black">
                        👤
                      </span>
                      <span className="text-xs font-black text-[#1d1340]">Player2663</span>
                      {/* Pulse Indicator */}
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"></span>
                    </div>

                    {/* Pointing Badge with Arrow */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-400 border-2 border-[#1d1340] shadow-[0_2px_0_#1d1340] mt-1">
                      <span className="text-sm font-black">⬆</span>
                      <span className="text-[11px] font-black text-[#1d1340]">CLICK HERE ON YOUR NAME</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 Card */}
                <div className="bg-white border-3 border-[#1d1340] rounded-2xl p-4 shadow-[0_4px_0_#1d1340] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-lg bg-rose-300 border-2 border-[#1d1340] text-xs font-black text-[#1d1340]">
                        STEP 2
                      </span>
                      <span className="text-xs font-bold text-slate-500">Profile / Account Popup</span>
                    </div>
                    <h3 className="text-base font-black text-[#1d1340] mb-1">
                      Click &quot;DELETE ACCOUNT&quot;
                    </h3>
                    <p className="text-xs text-[#4a3f7a] mb-3 font-medium">
                      Inside your account modal, scroll to the bottom and click the red <b>DELETE ACCOUNT</b> button to confirm.
                    </p>
                  </div>

                  {/* High-Res Mockup of Account Dialog & Delete Button */}
                  <div className="bg-slate-100 border-2 border-[#1d1340] rounded-xl p-3 flex flex-col gap-2 shadow-inner">
                    <div className="flex items-center justify-between border-b border-slate-300 pb-1.5">
                      <span className="text-xs font-black text-[#1d1340]">Account Settings</span>
                      <span className="text-xs font-bold text-slate-400">✕</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500">
                      Progress saved to: <span className="font-bold text-[#1d1340]">player@email.com</span>
                    </div>
                    <div className="pt-1 flex flex-col gap-1.5">
                      <div className="relative inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-500 border-2 border-[#1d1340] text-white font-black text-xs shadow-[0_3px_0_#991b1b] cursor-default">
                        <span>🗑️</span>
                        <span>DELETE ACCOUNT</span>
                      </div>
                      <div className="inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-lg bg-amber-300 border border-[#1d1340] text-[10px] font-black text-[#1d1340]">
                        <span>⬆</span>
                        <span>CLICK THIS RED BUTTON TO DELETE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Uninstalled / Web Email Request Option (Google Play Mandatory) */}
              <div className="bg-white border-3 border-[#1d1340] rounded-2xl p-4 sm:p-5 shadow-[0_4px_0_#1d1340]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-300 border-2 border-[#1d1340] text-xs font-black text-[#1d1340]">
                    CAN&apos;T OPEN THE GAME?
                  </span>
                  <span className="text-xs font-bold text-slate-500">For uninstalled apps or lost phones</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a3f7a] font-medium mb-3">
                  If you have already uninstalled Copycat Crowd or cannot access the app, you can request permanent deletion directly by email:
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:techsparks.co@gmail.com?subject=Copycat%20Crowd%20Account%20Deletion%20Request"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ff5d8f] hover:bg-[#ff4077] border-2 border-[#1d1340] text-white font-black text-xs sm:text-sm shadow-[0_3px_0_#1d1340] transition-transform active:translate-y-0.5"
                  >
                    <span>📧</span>
                    <span>Send Deletion Request Email</span>
                  </a>
                  <span className="text-xs font-mono text-slate-600 font-bold">
                    techsparks.co@gmail.com
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">
                  Please include your registered email address or player display name in the request.
                </p>
              </div>

              {/* Data Wiped Summary */}
              <div className="bg-white/80 border-2 border-amber-300 rounded-xl p-3.5 text-xs text-[#4a3f7a]">
                <b className="text-[#1d1340] block mb-1">What data is permanently deleted?</b>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-semibold">
                  <div className="p-1.5 bg-amber-100/60 rounded-lg border border-amber-200">
                    ✉️ Email &amp; Password hash
                  </div>
                  <div className="p-1.5 bg-amber-100/60 rounded-lg border border-amber-200">
                    💰 Coins &amp; Crystal balances
                  </div>
                  <div className="p-1.5 bg-amber-100/60 rounded-lg border border-amber-200">
                    🎒 Unlocked skins &amp; items
                  </div>
                  <div className="p-1.5 bg-amber-100/60 rounded-lg border border-amber-200">
                    🏆 Match history &amp; leaderboard
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-amber-200/60 text-[11px] text-slate-500 font-medium">
                  All associated data is permanently purged from our servers within 14 business days. No personal data is retained.
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            7. Contact Us
          </h2>
          <p>
            If you have questions or feedback about this Privacy Policy, please contact:
          </p>
          <div className="bg-slate-50 border-2 border-[#1d1340] rounded-xl p-4 font-bold text-sm text-[#1d1340]">
            <div><b>Developer:</b> Muhammad Hasan Alam</div>
            <div><b>Email:</b> <a href="mailto:techsparks.co@gmail.com" className="text-[#ff5d8f] underline">techsparks.co@gmail.com</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}
