import { motion } from "framer-motion";

export default function QuestionCard({ question, onSelect }) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-900 p-6 rounded-2xl w-100 shadow-xl"
    >
      <h2 className="text-xl mb-4">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt)}
            className="w-full p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </motion.div>
  );
}