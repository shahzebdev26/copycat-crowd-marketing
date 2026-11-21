import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Copycat Crowd",
  description: "Official Privacy Policy for Copycat Crowd (com.hasan.copycatcrowd). Explains how player data is collected, stored, and protected.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <div className="bg-[#0f1325] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
          Privacy Policy
        </h1>
        <div className="text-sky-400 font-mono text-xs font-semibold mb-8">
          Last Updated: November 21, 2026 · App Package: com.hasan.copycatcrowd
        </div>

        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <b>Copycat Crowd</b> (&quot;the Game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), developed and operated by <b>Muhammad Hasan Alam</b>. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal and device data when you play Copycat Crowd on Android or the web.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            1. Information We Collect
          </h2>
          <p>We believe in minimal data collection. To provide a functional, fair multiplayer experience, we collect the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Account Information:</b> If you register an account, we store an email address and a securely salted password hash. If you play as a guest, we generate an anonymous randomized player ID and device token so your inventory and rank persist across launches.</li>
            <li><b>Gameplay & Stats Data:</b> We store your in-game player display name, match statistics (matches played, wins, career milestones), equipped cosmetics (skins, toppers, auras, titles), and virtual currency balances (Mimic Coins and Crystals).</li>
            <li><b>Community Market Transactions:</b> If you list or purchase virtual items on the peer-to-peer Community Market, records of the transaction (item ID, price, seller, buyer, timestamp) are stored in our game database for fair play and fraud prevention.</li>
            <li><b>Technical & Diagnostic Data:</b> Standard connection metadata such as client IP address, operating system version, and error logs to maintain server uptime, mitigate abuse, and optimize game performance.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            2. In-App Purchases & Financial Information
          </h2>
          <p>
            All real-money in-app purchases (such as Crystal Packs and VIP Subscriptions) are processed directly by <b>Google Play Billing</b>. 
          </p>
          <p>
            <b>We do not collect, process, or store credit card numbers, bank account numbers, or billing addresses.</b> Google Play provides our server with an encrypted digital purchase token used solely to verify and grant your purchased in-game items.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            3. How We Use Your Information
          </h2>
          <p>The information we collect is strictly used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain the real-time multiplayer servers and matchmaking rooms.</li>
            <li>Manage player accounts, authenticate sessions, and protect against unauthorized access.</li>
            <li>Calculate weekly global leaderboard rankings and distribute earned seasonal rewards.</li>
            <li>Deliver critical account service emails (such as email verification and password reset codes via Resend).</li>
            <li>Prevent cheating, unauthorized automation, and abusive behavior.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            4. Third-Party Service Providers
          </h2>
          <p>We partner with trusted third-party cloud services that adhere to stringent security standards:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Google Play Services:</b> For Android app distribution, in-app billing verification, and developer reporting.</li>
            <li><b>MongoDB Atlas:</b> For secure, encrypted database storage of player profiles, inventory, and leaderboard data.</li>
            <li><b>Resend:</b> For automated delivery of transactional password-reset and account verification emails.</li>
          </ul>
          <p>We do NOT sell, rent, or monetize your personal information to third-party data brokers or behavioral advertising networks.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            5. Children&apos;s Privacy (COPPA Compliance)
          </h2>
          <p>
            Copycat Crowd is designed as a family-friendly party game suitable for general audiences. We do not knowingly collect personal information from children under the age of 13 without parental consent. If you believe your child has provided us with personal information without your consent, please contact us immediately at <a href="mailto:hassualoo@gmail.com" className="text-sky-400 hover:underline">hassualoo@gmail.com</a>, and we will promptly delete such records.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            6. Data Retention & Account Deletion Rights
          </h2>
          <p>
            We retain your game profile data for as long as your account remains active. You have the right at any time to request complete deletion of your account and all associated records.
          </p>
          <p>
            <b>How to delete your account:</b>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>In-Game:</b> Navigate to <b>Menu &rarr; Account &rarr; Delete Account</b> and confirm. Your email, password, match records, inventory, and listings will be permanently erased immediately.</li>
            <li><b>By Email:</b> Contact the developer at <a href="mailto:hassualoo@gmail.com" className="text-sky-400 hover:underline">hassualoo@gmail.com</a> with the subject line <i>&quot;Account Deletion Request&quot;</i> from your registered email.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            7. Security of Your Data
          </h2>
          <p>
            We employ industry-standard security measures including Transport Layer Security (TLS/HTTPS) encryption for all client-server communications, salted cryptographic hashing for passwords, and firewalled database clusters.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            8. Contact Us
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-sm">
            <div><b>Developer:</b> Muhammad Hasan Alam</div>
            <div><b>Email:</b> <a href="mailto:hassualoo@gmail.com" className="text-sky-400 hover:underline">hassualoo@gmail.com</a></div>
            <div><b>Package:</b> com.hasan.copycatcrowd</div>
          </div>
        </div>
      </div>
    </div>
  );
}
