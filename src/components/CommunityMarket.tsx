"use client";

import { useState } from "react";
import { Search, ShoppingBag, Tag, History, Check, X, Gem, Coins, User, Flame, Sparkles, Glasses, Crown, Sun, Star, Feather, Swords, Zap } from "lucide-react";

interface ListingItem {
  id: string;
  name: string;
  category: "Toppers" | "Auras" | "Charms" | "Move Packs" | "Characters";
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Arcane";
  perk: string;
  seller: string;
  price: number;
  icon: React.ReactNode;
}

const MARKET_ITEMS: ListingItem[] = [
  {
    id: "item-1",
    name: "Demon Horns",
    category: "Toppers",
    rarity: "Epic",
    perk: "+10% Coins",
    seller: "Player2663",
    price: 100,
    icon: <Flame className="w-12 h-12 text-rose-500" />,
  },
  {
    id: "item-2",
    name: "Void Aura",
    category: "Auras",
    rarity: "Arcane",
    perk: "+25% Match Coins · Dark Matter",
    seller: "ShadowMaster",
    price: 350,
    icon: <Sparkles className="w-12 h-12 text-purple-600" />,
  },
  {
    id: "item-3",
    name: "Cyber Visor",
    category: "Toppers",
    rarity: "Rare",
    perk: "+5% Match Coins · Neon HUD",
    seller: "NeonRider",
    price: 45,
    icon: <Glasses className="w-12 h-12 text-cyan-500" />,
  },
  {
    id: "item-4",
    name: "Royal Crown",
    category: "Toppers",
    rarity: "Legendary",
    perk: "2x Match Coins · Royal Prestige",
    seller: "KingCopy",
    price: 500,
    icon: <Crown className="w-12 h-12 text-amber-500 fill-amber-400" />,
  },
  {
    id: "item-5",
    name: "Solar Flare",
    category: "Auras",
    rarity: "Legendary",
    perk: "+15% Match Coins · Solar Flare",
    seller: "SunGod",
    price: 220,
    icon: <Sun className="w-12 h-12 text-amber-500" />,
  },
  {
    id: "item-6",
    name: "Cosmic Starburst",
    category: "Auras",
    rarity: "Arcane",
    perk: "+25% Match Coins · Stellar Pulse",
    seller: "AstroKid",
    price: 380,
    icon: <Star className="w-12 h-12 text-cyan-500 fill-cyan-400" />,
  },
  {
    id: "item-7",
    name: "Golden Angel Wings",
    category: "Charms",
    rarity: "Legendary",
    perk: "+20% Match Coins · Divine Grace",
    seller: "SkyWalker",
    price: 450,
    icon: <Feather className="w-12 h-12 text-amber-500" />,
  },
  {
    id: "item-8",
    name: "Martial Arts Move Pack",
    category: "Move Packs",
    rarity: "Rare",
    perk: "3 Moves: High Kick, Heavy Punch, Shield",
    seller: "DojoMaster",
    price: 180,
    icon: <Swords className="w-12 h-12 text-rose-500" />,
  },
  {
    id: "item-9",
    name: "Champion Lightning",
    category: "Auras",
    rarity: "Legendary",
    perk: "+15% Match Coins · Electric Surge",
    seller: "VoltRunner",
    price: 260,
    icon: <Zap className="w-12 h-12 text-amber-500 fill-amber-400" />,
  },
];

const RARITY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Common: { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-300" },
  Rare: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-400" },
  Epic: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-400" },
  Legendary: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-400" },
  Arcane: { bg: "bg-rose-100", text: "text-rose-800", border: "border-rose-500" },
};

export function CommunityMarket() {
  const [activeTab, setActiveTab] = useState<"Browse" | "Sell" | "My Listings" | "History">("Browse");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [balance, setBalance] = useState(962209);
  const [modalItem, setModalItem] = useState<ListingItem | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  // Filter listings
  const filteredItems = MARKET_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesRarity = selectedRarity === "All" || item.rarity === selectedRarity;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesRarity && matchesSearch;
  });

  const handleBuy = (item: ListingItem) => {
    setModalItem(item);
    setPurchaseSuccess(false);
  };

  const confirmPurchase = () => {
    if (!modalItem) return;
    setBalance((prev) => Math.max(0, prev - modalItem.price));
    setPurchaseSuccess(true);
    setTimeout(() => {
      setModalItem(null);
      setPurchaseSuccess(false);
    }, 1500);
  };

  return (
    <section id="market" className="py-20 relative bg-gradient-to-b from-white via-sky-50 to-white border-y-[3px] border-[#1d1340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-200 border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <Gem className="w-4 h-4 text-cyan-800" />
            <span>IN-GAME COMMUNITY MARKET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Community Market
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Collect and customize with awesome toppers, particle auras, charms, and move packs! Browse community items or list your extra cosmetics to earn Crystals.
          </p>
        </div>

        {/* In-Game Styled Market Container */}
        <div className="game-card p-4 sm:p-6 lg:p-8 bg-white max-w-6xl mx-auto">
          
          {/* Market Window Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#1d1340]/15 mb-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#1d1340]" />
              <span className="text-xl sm:text-2xl font-black text-[#1d1340]">
                Marketplace Browse
              </span>
            </div>

            {/* Live Balances Indicator */}
            <div className="flex items-center gap-3">
              <div className="game-pill bg-cyan-100 text-xs sm:text-sm flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5 text-cyan-700" />
                <span>{balance.toLocaleString()} Crystals</span>
              </div>
              <div className="hidden sm:inline-flex game-pill bg-amber-100 text-xs sm:text-sm flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-amber-700" />
                <span>1,222,511 Coins</span>
              </div>
            </div>
          </div>

          {/* Mode Tabs (Browse / Sell / My Listings / History) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {[
              { id: "Browse", icon: <ShoppingBag size={16} /> },
              { id: "Sell", icon: <Tag size={16} /> },
              { id: "My Listings", icon: <Tag size={16} /> },
              { id: "History", icon: <History size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border-2 border-[#1d1340] text-xs sm:text-sm font-black transition-all ${
                  activeTab === tab.id
                    ? "bg-[#ffc93c] text-[#1d1340] shadow-[0_3px_0_#1d1340]"
                    : "bg-slate-50 hover:bg-slate-100 text-[#4a3f7a]"
                }`}
              >
                {tab.icon}
                <span>{tab.id}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items by name (e.g. Demon Horns, Void Aura, Crown)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#1d1340] bg-slate-50 font-bold text-sm text-[#1d1340] placeholder:text-slate-400 focus:outline-none focus:bg-white shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-black text-[#1d1340] mr-2">Category:</span>
            {["All", "Toppers", "Auras", "Charms", "Move Packs"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full border-2 border-[#1d1340] text-xs font-black transition-all ${
                  selectedCategory === cat
                    ? "bg-[#ff5d8f] text-white shadow-[0_2px_0_#1d1340]"
                    : "bg-white hover:bg-slate-100 text-[#1d1340]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Rarity Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-black text-[#1d1340] mr-2">Rarity:</span>
            {["All", "Common", "Rare", "Epic", "Legendary", "Arcane"].map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-3 py-1 rounded-full border-2 border-[#1d1340] text-xs font-black transition-all ${
                  selectedRarity === rarity
                    ? "bg-[#22c7b5] text-white shadow-[0_2px_0_#1d1340]"
                    : "bg-white hover:bg-slate-100 text-[#1d1340]"
                }`}
              >
                {rarity}
              </button>
            ))}
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const rarityStyle = RARITY_COLORS[item.rarity];
              return (
                <div
                  key={item.id}
                  className="game-card-flat p-4 flex flex-col justify-between hover:border-[#ff5d8f] transition-all group"
                >
                  <div>
                    {/* Item Icon Preview Box */}
                    <div className="w-full h-28 rounded-xl bg-gradient-to-b from-sky-50 to-slate-100 border border-[#1d1340]/15 flex items-center justify-center mb-3 shadow-inner group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>

                    {/* Name & Rarity */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-black text-base text-[#1d1340] leading-snug">
                        {item.name}
                      </h4>
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-black uppercase ${rarityStyle.bg} ${rarityStyle.text} ${rarityStyle.border}`}>
                        {item.rarity}
                      </span>
                    </div>

                    {/* Perk Stat */}
                    <div className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-[11px] font-bold text-emerald-800 mb-3">
                      Bonus: {item.perk}
                    </div>

                    {/* Seller Tag */}
                    <div className="text-xs font-semibold text-slate-500 mb-4 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.seller}</span>
                    </div>
                  </div>

                  {/* Price & Buy Button */}
                  <div className="pt-3 border-t border-[#1d1340]/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-black text-base text-[#1d1340]">
                      <Gem className="w-4 h-4 text-cyan-600 fill-cyan-400" />
                      <span>{item.price}</span>
                    </div>

                    <button
                      onClick={() => handleBuy(item)}
                      className="game-btn game-btn-teal py-1.5 px-4 text-xs rounded-xl shadow-[0_3px_0_#1d1340] flex items-center gap-1.5"
                    >
                      <Gem className="w-3.5 h-3.5" />
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-400 font-bold">
              No market listings matched your filter. Try clearing filters or searching for another term!
            </div>
          )}

        </div>

        {/* Purchase Confirmation Modal (In-Game Style) */}
        {modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="game-card bg-white p-6 sm:p-8 max-w-sm w-full text-center relative">
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 p-1 rounded-full border-2 border-[#1d1340] hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-sky-50 border-2 border-[#1d1340] flex items-center justify-center mx-auto mb-3">
                {modalItem.icon}
              </div>
              <h3 className="text-2xl font-black text-[#1d1340] mb-1">
                {modalItem.name}
              </h3>
              <p className="text-xs font-bold text-slate-500 mb-6">
                Sold by {modalItem.seller}
              </p>

              {purchaseSuccess ? (
                <div className="py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <div className="font-black text-lg text-emerald-700">
                    Purchase Complete!
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Added to your inventory.
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-slate-50 rounded-xl border-2 border-[#1d1340]/20 p-4 mb-6 text-sm font-bold text-[#1d1340] space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Price:</span>
                      <span className="text-cyan-700 flex items-center gap-1 font-black">
                        <Gem className="w-3.5 h-3.5 fill-cyan-400" /> {modalItem.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Your Balance:</span>
                      <span className="flex items-center gap-1 font-black">
                        <Gem className="w-3.5 h-3.5 fill-cyan-400 text-cyan-700" /> {balance.toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-emerald-700">
                      <span>After Purchase:</span>
                      <span className="flex items-center gap-1 font-black">
                        <Gem className="w-3.5 h-3.5 fill-emerald-400" /> {(balance - modalItem.price).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setModalItem(null)}
                      className="game-btn game-btn-white py-2 text-sm rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmPurchase}
                      className="game-btn game-btn-yellow py-2 text-sm rounded-xl shadow-[0_4px_0_#1d1340]"
                    >
                      Confirm Buy
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
