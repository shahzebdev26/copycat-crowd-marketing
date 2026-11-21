"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Check, Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Real-Time 7-Player Party Battle · Android & Web</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              The High-Energy <span className="text-gradient">Memory Party Game.</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Dance, copy, and outsmart players worldwide in lightning-fast multiplayer rhythm battles. Watch the leader&apos;s dance sequence, memorize every move, and execute without slipping up!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.hasan.copycatcrowd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-[#111424] border border-white/15 hover:border-sky-400 text-white shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <svg className="w-6 h-6 fill-current text-sky-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.038 2.038 0 0 1-.61-.926V2.74c0-.348.21-.664.61-.926zm11.396 11.397L17.5 14.62l-12.756 7.37a1.94 1.94 0 0 1-1.135.197l11.396-11.396zM18.87 13.23l2.846-1.644c.85-.49.85-1.282 0-1.772L18.87 8.17l-2.484 2.485 2.484 2.575zm-3.865-4.043L3.609 1.814a1.94 1.94 0 0 1 1.135.197L17.5 9.38l-2.495 2.407-1.396-1.396z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] tracking-wider uppercase text-slate-400 font-semibold leading-tight">GET IT ON</span>
                  <span className="block text-base font-bold leading-tight">Google Play</span>
                </div>
              </a>

              <Link
                href="/#testers"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white/8 hover:bg-white/12 border border-white/10 text-white text-sm font-bold transition-all hover:-translate-y-0.5"
              >
                Join Closed Beta (14-Day)
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> Free to Play</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> Peer-to-Peer Trading</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> 100% Fair Play</span>
            </div>
          </div>

          {/* Right Column: Auto-Playable Device Video Showcase */}
          <div className="relative max-w-lg mx-auto lg:max-w-none w-full">
            <div className="floating-chip -top-4 -left-3">
              <span className="text-amber-400">⚡</span>
              <span>0.8s Reaction Window</span>
            </div>
            <div className="floating-chip -bottom-4 left-6" style={{ animationDelay: "1.5s" }}>
              <span className="text-sky-400">💎</span>
              <span>Community Trading Live</span>
            </div>

            <div className="device-frame aspect-video relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#1c223a] rounded-full z-20"></div>
              
              <video
                ref={videoRef}
                src="/videos/trailer.mp4"
                poster="/images/feature-graphic.png"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-sky-400 hover:text-black hover:border-transparent transition-all backdrop-blur-md cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleSound}
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-sky-400 hover:text-black hover:border-transparent transition-all backdrop-blur-md cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
