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
      if (!data?.result) {
        console.error("No result:", data);
        return;
      }

      setResult(data.result); // ✅ NO JSON.parse
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);

  if (!result) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white"
      >

        {/* Persona */}
        <h1 className="text-3xl font-bold mb-2">Your Persona</h1>
        <p className="text-blue-400 text-lg mb-6">
          {result.persona}
        </p>

        {/* Recommendations */}
        <h2 className="text-xl font-semibold mb-4">
          Recommended for You
        </h2>

        <div className="grid gap-4 mb-6">
          {result.recommendations.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md transition-all"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Reason */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {result.reason}
          </p>
        </div>

      </motion.div>
    </div>
  );
}
