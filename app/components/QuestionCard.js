import { motion } from "framer-motion";

export default function QuestionCard({ question, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 40px rgba(59,130,246,0.25)",
      }}
      className="
        w-full max-w-xl
        p-4 sm:p-6
        rounded-xl
        text-white
        border border-white/10
        bg-[#0b1220]
        transition-all duration-300

        shadow-[0_0_30px_rgba(59,130,246,0.25)]
        sm:shadow-none
      "
    >
      {/* Question */}
      <h2 className="text-lg sm:text-xl font-semibold mb-5 text-center">
        {question.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => (
          <motion.button
            key={i}
            onClick={() => onSelect(opt)}
            whileTap={{
              scale: 0.94,
            }}
            transition={{ duration: 0.15 }}
            className="
              w-full
              p-3 sm:p-4
              rounded-lg
              border border-blue-900
              text-white
              bg-[#05070f]

              transition-all duration-150

              active:bg-[#0a1020]
              active:shadow-[0_0_25px_rgba(59,130,246,0.7)]
              active:border-blue-500

              sm:hover:scale-105
              sm:hover:shadow-[0_0_22px_rgba(59,130,246,0.5)]
            "
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
