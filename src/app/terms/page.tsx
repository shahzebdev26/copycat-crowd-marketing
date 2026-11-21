import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Copycat Crowd",
  description: "Terms of Service for Copycat Crowd (com.hasan.copycatcrowd). Rules of fair play, virtual currency, and account conduct.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="game-card bg-white p-6 sm:p-12 shadow-[0_8px_0_#1d1340]">
        
        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border-2 border-[#1d1340] text-xs font-black text-[#1d1340] mb-3">
          TERMS & PLAYER CONDUCT
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1340] mb-2">
          Terms of Service
        </h1>
        
        <div className="text-xs font-mono font-bold text-slate-500 pb-6 border-b-2 border-slate-100 mb-6">
          Last Updated: November 21, 2026 · Package: <span className="text-[#ff5d8f]">com.hasan.copycatcrowd</span>
        </div>

        <div className="space-y-6 text-[#4a3f7a] text-sm sm:text-base leading-relaxed font-medium">
          <p>
            By downloading, installing, or accessing <b>Copycat Crowd</b>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the game.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            1. Fair Play & Conduct
          </h2>
          <p>
            Copycat Crowd is a skill- and memory-based multiplayer game. You agree not to use unauthorized third-party software, bots, macros, automation tools, or packet injectors. Any user caught exploiting bugs or interfering with server matchmaking is subject to immediate and permanent account suspension.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            2. Virtual Currencies & Marketplace
          </h2>
          <p>
            The game includes virtual currencies (Mimic Coins and Crystals) and virtual cosmetic items (toppers, auras, move packs, titles).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Virtual items and currencies have no real-world monetary value and cannot be exchanged for real cash.</li>
            <li>All trades on the Community Market are final once confirmed. Users are responsible for inspecting the item and price before confirming a purchase.</li>
            <li>We reserve the right to moderate or revoke virtual items obtained through exploits, unauthorized chargebacks, or fraudulent activities.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            3. In-App Purchases & Subscriptions
          </h2>
          <p>
            Purchases of Crystals and VIP Gold Stage passes are billed through Google Play Billing. All refund requests are governed by Google Play’s standard refund policies. VIP Subscriptions renew automatically unless cancelled via Google Play Subscriptions at least 24 hours prior to the renewal date.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            4. Limitation of Liability
          </h2>
          <p>
            Copycat Crowd is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted server connectivity or error-free gameplay. In no event will the developer be liable for indirect, incidental, or consequential damages arising from the use of the game.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-[#1d1340] border-b-2 border-slate-100 pb-2 pt-4">
            5. Contact Information
          </h2>
          <p>
            For support, dispute inquiries, or account questions:
          </p>
          <div className="bg-slate-50 border-2 border-[#1d1340] rounded-xl p-4 font-bold text-sm text-[#1d1340]">
            <div><b>Developer:</b> Muhammad Hasan Alam</div>
            <div><b>Email:</b> <a href="mailto:hasanalam.dev@gmail.com" className="text-[#ff5d8f] underline">hasanalam.dev@gmail.com</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}
