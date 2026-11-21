import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-24">
      <div className="game-card bg-white p-8 sm:p-12 max-w-md w-full text-center">
        <span className="text-6xl mb-4 block">👀</span>
        <h1 className="text-3xl font-black text-[#1d1340] mb-2">
          Page Not Found
        </h1>
        <p className="text-sm font-semibold text-[#4a3f7a] mb-6">
          Looks like this move sequence led to an empty stage!
        </p>
        <Link
          href="/"
          className="game-btn game-btn-yellow py-2.5 px-6 rounded-2xl text-sm"
        >
          Return to Home Stage
        </Link>
      </div>
    </div>
  );
}
