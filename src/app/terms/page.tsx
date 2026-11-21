import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Copycat Crowd",
  description: "Terms of Service for Copycat Crowd (com.hasan.copycatcrowd). Outlines player rules, fair play guidelines, and virtual item policies.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <div className="bg-[#0f1325] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
          Terms of Service
        </h1>
        <div className="text-sky-400 font-mono text-xs font-semibold mb-8">
          Last Updated: November 21, 2026 · App Package: com.hasan.copycatcrowd
        </div>

        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the <b>Copycat Crowd</b> video game (&quot;the Game&quot;), websites, and services provided by <b>Muhammad Hasan Alam</b> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or playing the Game, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            1. Account & Eligibility
          </h2>
          <p>
            You must be at least 13 years old (or the legal age of digital consent in your jurisdiction) to play Copycat Crowd. You agree to provide accurate information when registering an account and are responsible for maintaining the confidentiality of your login credentials.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            2. Fair Play & Community Guidelines
          </h2>
          <p>Copycat Crowd is built on friendly competition and mutual respect. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use cheats, automation software (bots), hacks, mods, or any unauthorized third-party software that alters game mechanics.</li>
            <li>Exploit software bugs or glitches for unfair competitive advantage or currency duplication.</li>
            <li>Harass, abuse, defame, or use offensive, hateful, or discriminatory usernames or room names.</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of the Game.</li>
          </ul>
          <p>Violation of these rules may result in temporary suspension or permanent termination of your account without refund.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            3. Virtual Items & In-Game Economy
          </h2>
          <p>
            The Game features virtual currencies (&quot;Mimic Coins&quot;, &quot;Diamonds/Crystals&quot;) and virtual cosmetic items (&quot;Skins&quot;, &quot;Toppers&quot;, &quot;Auras&quot;, &quot;Move Packs&quot;):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Virtual currencies and items have no monetary value outside of the Game and cannot be redeemed for real money, goods, or external services.</li>
            <li><b>Community Market:</b> The in-game Community Market enables peer-to-peer trading of eligible cosmetic items between players exclusively for in-game Diamonds. Real-money trading, external escrow, or black-market trading outside the official client is strictly prohibited.</li>
            <li>All purchases of virtual items and VIP subscriptions made via Google Play Billing are final and non-refundable, except as required by applicable law or Google Play policies.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            4. Intellectual Property
          </h2>
          <p>
            All rights, title, and interest in and to the Game—including 3D models, character designs, animations, sound effects, music, visual interfaces, and code—are owned by Muhammad Hasan Alam and protected by copyright and intellectual property laws.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            5. Disclaimer of Warranties & Limitation of Liability
          </h2>
          <p>
            The Game is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind. To the maximum extent permitted by applicable law, Muhammad Hasan Alam shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Game.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-2 pt-4">
            6. Contact Information
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-sm">
            <div><b>Developer:</b> Muhammad Hasan Alam</div>
            <div><b>Email:</b> <a href="mailto:hassualoo@gmail.com" className="text-sky-400 hover:underline">hassualoo@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
