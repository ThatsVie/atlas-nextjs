"use client";

import { useEffect, useState, useTransition } from "react";
import { fetchQuestionById, fetchAnswers } from "@/lib/data";
import { addAnswer } from "@/lib/actions";
import { AcceptAnswerButton } from "@/components/AcceptAnswerButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null,
  );
  const [question, setQuestion] = useState<{
    id: string;
    title: string;
    answer_id: string | null;
  } | null>(null);
  const [answers, setAnswers] = useState<{ id: string; answer: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    params.then((result) => {
      if (result?.id) {
        setResolvedParams(result);
      }
    });
  }, [params]);

  useEffect(() => {
    async function fetchData() {
      if (!resolvedParams?.id) return;

      setIsLoading(true);
      try {
        const fetchedQuestion = await fetchQuestionById(resolvedParams.id);
        const fetchedAnswers = await fetchAnswers(resolvedParams.id);

        setQuestion(fetchedQuestion);
        setAnswers(fetchedAnswers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [resolvedParams?.id]);

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-primary rounded-full"></div>
      </div>
    );
  }

  if (!question) {
    return <div className="p-6 text-red-500">Question not found</div>;
  }

  const setAcceptedAnswer = (answerId: string) => {
    startTransition(() => {
      setQuestion((prev) => (prev ? { ...prev, answer_id: answerId } : prev));
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{question.title}</h1>

      <form className="mb-4 flex items-center gap-2" action={addAnswer}>
        <input type="hidden" name="question_id" value={resolvedParams?.id} />
        <textarea
          name="answer"
          className="w-full p-2 border rounded resize-none"
          placeholder="Answer question"
          required
        />
        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Answer
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6 mb-2">Answers</h2>
      <ul className="space-y-2">
        {answers
          .sort((a, b) =>
            a.id === question.answer_id
              ? -1
              : b.id === question.answer_id
                ? 1
                : 0,
          )
          .map((answer) => (
            <li
              key={answer.id}
              className={`p-2 border rounded flex justify-between items-center ${
                question.answer_id === answer.id
                  ? "border-primary bg-primary-light"
                  : "border-gray-300"
              }`}
            >
              <span>{answer.answer}</span>
              <AcceptAnswerButton
                questionId={question.id}
                answerId={answer.id}
                isAccepted={question.answer_id === answer.id}
                setAcceptedAnswer={setAcceptedAnswer}
                isPending={isPending}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
