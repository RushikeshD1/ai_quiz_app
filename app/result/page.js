"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers"));

    fetch("/api/analysis", {
      method: "POST",
      body: JSON.stringify({ answers }),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.result) return;

        setResult(data.result);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!result) return <Loader />;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#05070f] my-10">
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          w-full max-w-xl
          rounded-2xl
          p-6 sm:p-8
          text-white
          border border-white/10
  
          shadow-[0_0_40px_rgba(59,130,246,0.18)]
        "
      >

        {/* Persona */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Your Persona
        </h1>

        <p className="text-blue-400 text-base sm:text-lg mb-6">
          {result.persona}
        </p>

        {/* Recommendations */}
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Recommended for You
        </h2>

        <div className="flex flex-col gap-3 mb-6">
          {result.recommendations.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="
                p-4
                rounded-lg
                border border-blue-900
                bg-[#05070f]
                hover:bg-[#0a1020]
                transition
              "
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Reason */}
        <div className="
          p-4
          rounded-lg
          border border-white/10
          bg-[#070b18]
        ">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {result.reason}
          </p>
        </div>

      </motion.div>
    </div>
  );
}