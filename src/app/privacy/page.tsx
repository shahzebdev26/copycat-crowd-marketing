import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Copycat Crowd",
  description: "Official Privacy Policy for Copycat Crowd (com.hasan.copycatcrowd). Explains how player data is collected, stored, and protected.",
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
          Last Updated: November 21, 2026 · Package: <span className="text-[#ff5d8f]">com.hasan.copycatcrowd</span>
        </div>

        <div className="space-y-6 text-[#4a3f7a] text-sm sm:text-base leading-relaxed font-medium">
          <p>
            Welcome to <b>Copycat Crowd</b> (&quot;the Game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), developed and operated by <b>Muhammad Hasan Alam</b>. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal and device data when you play Copycat Crowd on Android or the web.
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
            Copycat Crowd is designed as a family-friendly party game suitable for ages 13 and above. We do not knowingly collect personal identifiable information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us immediately at <a href="mailto:hassualoo@gmail.com" className="text-[#ff5d8f] underline font-bold">hassualoo@gmail.com</a>, and we will promptly delete such data.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            6. Account Deletion & Data Retention
          </h2>
          <p>
            In accordance with Google Play policies, players have the right to request full deletion of their account and associated data at any time. You may request account deletion by emailing <a href="mailto:hassualoo@gmail.com" className="text-[#ff5d8f] underline font-bold">hassualoo@gmail.com</a> with your player name or registered email. All associated data will be permanently wiped within 14 business days.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            7. Contact Us
          </h2>
          <p>
            If you have questions or feedback about this Privacy Policy, please contact:
          </p>
          <div className="bg-slate-50 border-2 border-[#1d1340] rounded-xl p-4 font-bold text-sm text-[#1d1340]">
            <div><b>Developer:</b> Muhammad Hasan Alam</div>
            <div><b>App Package:</b> com.hasan.copycatcrowd</div>
            <div><b>Email:</b> <a href="mailto:hassualoo@gmail.com" className="text-[#ff5d8f] underline">hassualoo@gmail.com</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}
