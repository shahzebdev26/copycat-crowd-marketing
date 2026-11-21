"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Crown, Gem, Coins } from "lucide-react";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border-[3px] border-[#1d1340] rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 shadow-[0_4px_0_#1d1340] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#1d1340] shadow-[0_2px_0_#1d1340] group-hover:scale-105 transition-transform">
            <Image
              src="/images/app-icon.png"
              alt="Copycat Crowd"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-wide leading-none text-[#1d1340]">
              COPYCAT <span className="text-[#ff5d8f]">CROWD</span>
            </span>
            <span className="text-[10px] font-bold text-[#4a3f7a] tracking-wider uppercase">
              Memory Party Battle
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm text-[#1d1340]">
          <Link href="/#how-to-play" className="hover:text-[#ff5d8f] transition-colors">How to Play</Link>
          <Link href="/#moves" className="hover:text-[#ff5d8f] transition-colors">Moves & Packs</Link>
          <Link href="/#market" className="hover:text-[#ff5d8f] transition-colors">Community Market</Link>
          <Link href="/#features" className="hover:text-[#ff5d8f] transition-colors">Features</Link>
          <Link href="/#screenshots" className="hover:text-[#ff5d8f] transition-colors">Screenshots</Link>
          <Link href="/#faq" className="hover:text-[#ff5d8f] transition-colors">FAQ</Link>
        </nav>

        {/* In-Game Currencies & Google Play CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* VIP Badge */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 border-2 border-[#1d1340] text-xs font-black text-[#1d1340] shadow-[0_2px_0_#1d1340]">
            <Crown className="w-3.5 h-3.5 text-amber-900 fill-amber-600" />
            <span>VIP Active</span>
          </div>

          {/* Crystals Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border-2 border-[#1d1340] text-xs font-black text-[#1d1340] shadow-[0_2px_0_#1d1340]">
            <Gem className="w-3.5 h-3.5 text-cyan-700 fill-cyan-400" />
            <span>962,209</span>
          </div>

          {/* Coins Pill */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border-2 border-[#1d1340] text-xs font-black text-[#1d1340] shadow-[0_2px_0_#1d1340]">
            <Coins className="w-3.5 h-3.5 text-amber-800 fill-amber-500" />
            <span>1,222,511</span>
          </div>

          {/* Google Play Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn game-btn-yellow py-2 px-3 sm:px-5 text-xs sm:text-sm rounded-full"
          >
            <svg className="w-4 h-4 fill-[#1d1340]" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/>
            </svg>
            <span className="hidden xs:inline">Play Store</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_2px_0_#1d1340] active:translate-y-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white border-[3px] border-[#1d1340] rounded-2xl p-5 shadow-[0_6px_0_#1d1340] flex flex-col gap-4 font-bold text-base text-[#1d1340]">
          <Link
            href="/#how-to-play"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            How to Play
          </Link>
          <Link
            href="/#moves"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            Moves & Packs
          </Link>
          <Link
            href="/#market"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            Community Market
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            Features
          </Link>
          <Link
            href="/#screenshots"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            Screenshots
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-xl hover:bg-sky-50"
          >
            FAQ
          </Link>
          <div className="pt-3 border-t-2 border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Currencies:</span>
            <div className="flex gap-2">
              <span className="game-pill bg-cyan-100 text-xs py-1 px-2.5 flex items-center gap-1">
                <Gem className="w-3 h-3 text-cyan-700" /> 962,209
              </span>
              <span className="game-pill bg-amber-100 text-xs py-1 px-2.5 flex items-center gap-1">
                <Coins className="w-3 h-3 text-amber-700" /> 1.2M
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
