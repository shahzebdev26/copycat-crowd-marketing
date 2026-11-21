"use client";

export function GameBackground() {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      
      {/* 1. Base Vibrant Sunny Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#38bdf8] via-[#7dd3fc] via-45% to-[#f0f9ff]" />

      {/* 2. Cheerful Glowing Sun in Top Right */}
      <div className="absolute -top-12 -right-12 sm:top-6 sm:right-12 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none">
        {/* Outer Warm Glow */}
        <div className="absolute inset-0 rounded-full bg-amber-300/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        {/* Sun Core */}
        <div className="absolute inset-6 sm:inset-10 rounded-full bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 border-[3.5px] border-[#1d1340] shadow-[0_6px_0_#b45309] flex items-center justify-center">
          {/* Cute Sun Smile / Center Spark */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 sm:gap-6 mb-1">
              <span className="w-2.5 h-3.5 bg-[#1d1340] rounded-full"></span>
              <span className="w-2.5 h-3.5 bg-[#1d1340] rounded-full"></span>
            </div>
            <div className="w-6 h-3 border-b-[3px] border-[#1d1340] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 3. Floating Hot Air Balloons & Party Balloons */}
      {/* Balloon 1 - Left Sky */}
      <div className="absolute top-24 left-[8%] hidden md:flex flex-col items-center animate-gentle-bounce opacity-90" style={{ animationDuration: '6s' }}>
        <div className="w-16 h-20 rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#ff5d8f] via-[#ffc93c] to-[#38bdf8] border-[2.5px] border-[#1d1340] shadow-[0_4px_0_#1d1340] relative overflow-hidden">
          <div className="absolute inset-x-2 top-0 bottom-0 border-x-2 border-white/50" />
        </div>
        <div className="w-0.5 h-3 bg-[#1d1340]" />
        <div className="w-5 h-3.5 bg-amber-800 rounded-sm border-2 border-[#1d1340] shadow-sm" />
      </div>

      {/* Balloon 2 - Center-Right Sky */}
      <div className="absolute top-44 right-[22%] hidden lg:flex flex-col items-center animate-gentle-bounce opacity-80" style={{ animationDuration: '8s', animationDelay: '2s' }}>
        <div className="w-12 h-15 rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#22c7b5] via-[#38bdf8] to-[#ff5d8f] border-2 border-[#1d1340] shadow-sm" />
        <div className="w-0.5 h-2 bg-[#1d1340]" />
        <div className="w-4 h-2.5 bg-amber-700 rounded-sm border border-[#1d1340]" />
      </div>

      {/* Party Floating Balloons */}
      <div className="absolute top-72 left-[20%] hidden xl:block animate-gentle-bounce opacity-75" style={{ animationDuration: '5s' }}>
        <div className="w-8 h-10 rounded-full bg-[#ff5d8f] border-2 border-[#1d1340] relative shadow-sm">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1 bg-[#1d1340] rounded-sm" />
          <div className="absolute -bottom-4 left-1/2 w-0.5 h-3 bg-[#1d1340]/40" />
        </div>
      </div>

      <div className="absolute top-96 right-[12%] hidden xl:block animate-gentle-bounce opacity-70" style={{ animationDuration: '7s', animationDelay: '1s' }}>
        <div className="w-7 h-9 rounded-full bg-[#ffc93c] border-2 border-[#1d1340] relative shadow-sm">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1 bg-[#1d1340] rounded-sm" />
          <div className="absolute -bottom-4 left-1/2 w-0.5 h-3 bg-[#1d1340]/40" />
        </div>
      </div>

      {/* 4. Drifting Cartoon White Clouds */}
      {/* Cloud 1 */}
      <div className="absolute top-20 left-[4%] w-60 h-20 bg-white/90 rounded-full border-2 border-[#1d1340]/20 cloud-float-1 shadow-sm">
        <div className="absolute -top-7 left-10 w-24 h-24 bg-white/90 rounded-full" />
        <div className="absolute -top-10 left-24 w-28 h-28 bg-white/90 rounded-full" />
      </div>

      {/* Cloud 2 */}
      <div className="absolute top-36 right-[6%] w-72 h-24 bg-white/85 rounded-full border-2 border-[#1d1340]/15 cloud-float-2 shadow-sm">
        <div className="absolute -top-9 left-14 w-28 h-28 bg-white/85 rounded-full" />
        <div className="absolute -top-12 left-32 w-32 h-32 bg-white/85 rounded-full" />
      </div>

      {/* Cloud 3 - Mid Height */}
      <div className="absolute top-[520px] left-[32%] w-80 h-24 bg-white/60 rounded-full cloud-float-1 shadow-sm hidden sm:block">
        <div className="absolute -top-8 left-16 w-28 h-28 bg-white/60 rounded-full" />
        <div className="absolute -top-12 left-36 w-36 h-36 bg-white/60 rounded-full" />
      </div>

      {/* 5. Rolling Cartoon Mountains Horizon (Bottom Backdrop) */}
      <div className="absolute bottom-0 inset-x-0 h-44 sm:h-56 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Mountain Peaks with Snow Caps */}
          <path
            fill="#93c5fd"
            d="M0,224L120,160L240,224L360,128L480,224L600,160L720,240L840,140L960,220L1080,130L1200,210L1320,150L1440,240L1440,320L0,320Z"
          />
          {/* Rolling Green Hills in Front */}
          <path
            fill="#86efac"
            d="M0,270 C320,220 420,290 720,250 C1020,210 1140,280 1440,240 L1440,320 L0,320 Z"
          />
          <path
            fill="#4ade80"
            d="M0,290 C360,260 520,310 880,275 C1180,245 1320,300 1440,270 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

    </div>
  );
}
