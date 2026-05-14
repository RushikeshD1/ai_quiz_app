"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer
    };

    setAnswers(newAnswers);

    if (Object.keys(newAnswers).length === visibleQuestions.length) {
      localStorage.setItem("answers", JSON.stringify(newAnswers));
      router.push("/result");
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ProgressBar current={currentIndex} total={visibleQuestions.length} />
      <QuestionCard question={currentQuestion} onSelect={handleAnswer} />
    </div>
  );
}