"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../lib/questions";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const visibleQuestions = questions.filter(
    (q) => !q.showIf || q.showIf(answers)
  );

  const currentIndex = Object.keys(answers).length;
  const currentQuestion = visibleQuestions[currentIndex];

  const handleAnswer = (answer) => {
    if (!currentQuestion) return;

    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer,
    };

    setAnswers(newAnswers);

    setTimeout(() => {
      if (Object.keys(newAnswers).length === visibleQuestions.length) {
        localStorage.setItem("answers", JSON.stringify(newAnswers));
        router.push("/result");
      }
    }, 250);
  };

  if (!currentQuestion) return null;

  return (
  <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-16">

    <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-6">

      {/* Progress */}
      <motion.div className="w-full">
        <ProgressBar
          current={currentIndex}
          total={visibleQuestions.length}
        />
      </motion.div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          className="w-full flex justify-center"
        >
          <QuestionCard
            question={currentQuestion}
            onSelect={handleAnswer}
          />
        </motion.div>
      </AnimatePresence>

    </div>
  </div>
);
}