"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 pt-2.5 sm:pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border-[3px] border-[#1d1340] rounded-2xl sm:rounded-full px-2.5 sm:px-6 py-2 sm:py-2.5 shadow-[0_4px_0_#1d1340] flex items-center justify-between gap-2">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group shrink-0 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 border-[#1d1340] shadow-[0_2px_0_#1d1340] group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/images/app-icon.png"
              alt="Copycat Crowd"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-black text-sm sm:text-xl tracking-wide leading-none text-[#1d1340] whitespace-nowrap">
              COPYCAT <span className="text-[#ff5d8f]">CROWD</span>
            </span>
            <span className="hidden sm:block text-[10px] font-bold text-[#4a3f7a] tracking-wider uppercase truncate">
              Memory Party Battle
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 font-bold text-sm text-[#1d1340]">
          <Link href="/#how-to-play" className="hover:text-[#ff5d8f] transition-colors">How to Play</Link>
          <Link href="/#moves" className="hover:text-[#ff5d8f] transition-colors">Moves & Packs</Link>
          <Link href="/#market" className="hover:text-[#ff5d8f] transition-colors">Community Market</Link>
          <Link href="/#features" className="hover:text-[#ff5d8f] transition-colors">Features</Link>
          <Link href="/#screenshots" className="hover:text-[#ff5d8f] transition-colors">Screenshots</Link>
          <Link href="/#faq" className="hover:text-[#ff5d8f] transition-colors">FAQ</Link>
        </nav>

        {/* Google Play CTA & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Google Play Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn game-btn-yellow whitespace-nowrap shrink-0 py-1.5 px-2.5 sm:py-2 sm:px-5 text-xs sm:text-sm rounded-full flex items-center gap-1 sm:gap-2 shadow-[0_2px_0_#1d1340] sm:shadow-[0_3px_0_#1d1340]"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#1d1340] shrink-0" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/>
            </svg>
            <span className="whitespace-nowrap font-black text-[11px] sm:text-sm">Play Store</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl border-2 border-[#1d1340] bg-[#fffaf0] shadow-[0_2px_0_#1d1340] active:translate-y-0.5 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
        </div>
      )}
    </header>
  );
}
