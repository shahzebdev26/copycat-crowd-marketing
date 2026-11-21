import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-24">
      <div className="game-card bg-white p-8 sm:p-12 max-w-md w-full text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 border-2 border-[#1d1340] text-sm font-black text-rose-800 mb-4">
          404 ERROR
        </div>
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
