"use client";

import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md border-b border-white/10 cursor-pointer"
    >
      <h1 className="font-extrabold text-2xl sm:text-4xl tracking-tight hover:opacity-80 transition">
        Quiz Funnel
      </h1>
    </div>
  );
}