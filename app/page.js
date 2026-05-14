"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-transparent font-sans md:p-10 p-6 border-blue-600 md:mt-0 mt-10 gap-10">
      <div className="flex flex-col items-center justify-center md:-gap-4 ">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Discover Your Perfect{" "}
          <span className="text-blue-400">Google Tools</span>
        </h1>
        <p className="text-gray-600 text-sm">
          Answer a few questions and get AI-powered recommendations tailored to
          you.
        </p>
      </div>

      <motion.button
        animate={{
          boxShadow: [
            "0 0 0px rgba(59,130,246,0.4)",
            "0 0 20px rgba(59,130,246,0.8)",
            "0 0 0px rgba(59,130,246,0.4)",
          ],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="px-8 py-4 rounded-2xl text-white font-medium hover:cursor-pointer mt-10"
        onClick={() => router.push("/quiz")}
      >
        Start Quiz →
      </motion.button>
    </div>
  );
}
