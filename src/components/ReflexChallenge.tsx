"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Play, RotateCcw, Trophy, Zap, ArrowUp, RotateCw, ArrowDown, Hand, Swords, Footprints, ShieldCheck } from "lucide-react";

const AVAILABLE_MOVES = [
  { id: "jump", label: "Jump", icon: <ArrowUp className="w-5 h-5 stroke-[3]" />, color: "bg-sky-400 text-white" },
  { id: "spin", label: "Spin", icon: <RotateCw className="w-5 h-5 stroke-[3]" />, color: "bg-purple-400 text-white" },
  { id: "crouch", label: "Crouch", icon: <ArrowDown className="w-5 h-5 stroke-[3]" />, color: "bg-amber-400 text-[#1d1340]" },
  { id: "wave", label: "Wave", icon: <Hand className="w-5 h-5 stroke-[3]" />, color: "bg-emerald-400 text-white" },
  { id: "punch", label: "Punch", icon: <Swords className="w-5 h-5 stroke-[3]" />, color: "bg-rose-400 text-white" },
  { id: "kick", label: "Kick", icon: <Footprints className="w-5 h-5 stroke-[3]" />, color: "bg-teal-400 text-white" },
];

export function ReflexChallenge() {
  const [gameState, setGameState] = useState<"idle" | "watching" | "playing" | "won" | "failed">("idle");
  const [sequence, setSequence] = useState<string[]>([]);
  const [activeWatchIdx, setActiveWatchIdx] = useState<number>(-1);
  const [playerInput, setPlayerInput] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);

  // Generate sequence and play demonstration
  const startChallenge = (targetLength = 3) => {
    const seqLength = Math.max(3, Math.min(7, targetLength));
    const newSeq = Array.from({ length: seqLength }, () => {
      const randomMove = AVAILABLE_MOVES[Math.floor(Math.random() * AVAILABLE_MOVES.length)];
      return randomMove.id;
    });

    setSequence(newSeq);
    setPlayerInput([]);
    setGameState("watching");
    setActiveWatchIdx(-1);

    // Sequence playback timing
    newSeq.forEach((moveId, index) => {
      setTimeout(() => {
        setActiveWatchIdx(index);
      }, (index + 1) * 750);
    });

    // Switch to playing phase
    setTimeout(() => {
      setActiveWatchIdx(-1);
      setGameState("playing");
    }, (newSeq.length + 1) * 750 + 200);
  };

  const handlePlayerMove = (moveId: string) => {
    if (gameState !== "playing") return;

    const nextIndex = playerInput.length;
    const expectedMove = sequence[nextIndex];

    if (moveId === expectedMove) {
      const updatedInput = [...playerInput, moveId];
      setPlayerInput(updatedInput);

      // Check if sequence completed
      if (updatedInput.length === sequence.length) {
        setGameState("won");
        setStreak((prev) => prev + 1);
        setScore((prev) => prev + 250);

        // Fire celebratory confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.65 },
          });
        } catch {
          // ignore if canvas not supported
        }
      }
    } else {
      setGameState("failed");
      setStreak(0);
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#e0f2fe] via-white to-[#f0f9ff] border-y-[3px] border-[#1d1340]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc93c] border-2 border-[#1d1340] text-xs sm:text-sm font-black text-[#1d1340] shadow-[0_2px_0_#1d1340] mb-4">
            <Zap className="w-4 h-4 text-amber-900 fill-amber-500" />
            <span>INTERACTIVE MINI-GAME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1d1340] tracking-tight mb-4">
            Test Your Move Reflexes
          </h2>
          <p className="text-[#4a3f7a] text-base sm:text-lg font-medium">
            Think your memory is fast enough? Watch the sequence light up, then tap the exact moves in order!
          </p>
        </div>

        {/* The Mini-Game Interactive Card */}
        <div className="game-card p-6 sm:p-10 bg-white relative max-w-3xl mx-auto shadow-2xl">
          
          {/* Top Game Bar: Streaks & Coins */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-[#1d1340]/10 mb-6">
            <div className="flex items-center gap-2 font-black text-sm text-[#1d1340]">
              <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Combo Streak: {streak}x</span>
            </div>
            <div className="game-pill bg-amber-100 text-xs font-black text-[#1d1340]">
              <span>Score: {score} Coins</span>
            </div>
          </div>

          {/* Center Arena Status Display */}
          <div className="mb-8 text-center min-h-[160px] flex flex-col items-center justify-center rounded-2xl bg-slate-50 border-2 border-[#1d1340]/20 p-6 relative overflow-hidden">
            
            {gameState === "idle" && (
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-slate-500 mb-4">
                  Ready to test your memory? Hit Start below.
                </span>
                <button
                  onClick={() => startChallenge(3)}
                  className="game-btn game-btn-yellow py-3 px-8 text-base rounded-2xl shadow-[0_4px_0_#1d1340] flex items-center gap-2"
                >
                  <Play size={18} className="fill-[#1d1340]" />
                  <span>Start Challenge</span>
                </button>
              </div>
            )}

            {gameState === "watching" && (
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black text-amber-800 uppercase tracking-wider mb-4 animate-pulse">
                  Watch Closely!
                </span>
                <div className="flex items-center justify-center gap-3">
                  {sequence.map((moveId, idx) => {
                    const move = AVAILABLE_MOVES.find((m) => m.id === moveId)!;
                    const isActive = activeWatchIdx === idx;
                    return (
                      <div
                        key={idx}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                          isActive
                            ? `${move.color} border-[#1d1340] scale-110 shadow-[0_4px_0_#1d1340] animate-bounce`
                            : "bg-white border-slate-200 text-slate-300"
                        }`}
                      >
                        <span className="mb-1">{move.icon}</span>
                        <span className="font-black text-[10px] uppercase">{move.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {gameState === "playing" && (
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-black text-emerald-800 uppercase tracking-wider mb-3 animate-pulse">
                  Your Turn: Repeat The Sequence!
                </span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {sequence.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-black transition-all ${
                        idx < playerInput.length
                          ? "bg-emerald-400 border-[#1d1340] text-white"
                          : "bg-slate-200 border-slate-300 text-slate-400"
                      }`}
                    >
                      {idx < playerInput.length ? "✓" : idx + 1}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-500">
                  {playerInput.length} of {sequence.length} moves entered
                </div>
              </div>
            )}

            {gameState === "won" && (
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-emerald-600 mb-1">
                  Perfect Copy! Round Complete!
                </span>
                <span className="text-xs font-bold text-[#4a3f7a] mb-4">
                  Combo streak increased to {streak}x (+250 Coins)
                </span>
                <button
                  onClick={() => startChallenge(Math.min(7, sequence.length + 1))}
                  className="game-btn game-btn-teal py-2.5 px-6 text-sm rounded-xl"
                >
                  Next Round ({Math.min(7, sequence.length + 1)} Moves)
                </button>
              </div>
            )}

            {gameState === "failed" && (
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-rose-600 mb-1">
                  Missed The Move!
                </span>
                <span className="text-xs font-bold text-slate-500 mb-4">
                  The sequence required exact order and timing.
                </span>
                <button
                  onClick={() => startChallenge(3)}
                  className="game-btn game-btn-white py-2 px-5 text-sm rounded-xl flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  <span>Try Again</span>
                </button>
              </div>
            )}

          </div>

          {/* Interactive Move Buttons (Tap to Play) */}
          <div>
            <div className="text-xs font-black text-[#1d1340] uppercase tracking-wider mb-3 text-center sm:text-left">
              Action Moves:
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {AVAILABLE_MOVES.map((move) => (
                <button
                  key={move.id}
                  onClick={() => handlePlayerMove(move.id)}
                  disabled={gameState !== "playing"}
                  className={`game-btn ${move.color} p-3 rounded-2xl flex flex-col items-center justify-center border-2 border-[#1d1340] shadow-[0_3px_0_#1d1340] active:translate-y-1 transition-all ${
                    gameState !== "playing" ? "opacity-50 cursor-not-allowed shadow-none" : "hover:-translate-y-0.5"
                  }`}
                >
                  <span className="mb-1">{move.icon}</span>
                  <span className="font-black text-xs">{move.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
