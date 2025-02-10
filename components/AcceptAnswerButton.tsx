"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { markAnswerAsAccepted } from "@/lib/actions";
import { useTransition } from "react";

export function AcceptAnswerButton({
  questionId,
  answerId,
  isAccepted,
  setAcceptedAnswer,
  isPending,
}: {
  questionId: string;
  answerId: string;
  isAccepted: boolean;
  setAcceptedAnswer: (answerId: string) => void;
  isPending: boolean;
}) {
  const [isButtonPending, startTransition] = useTransition();

  const handleAccept = async () => {
    startTransition(async () => {
      await markAnswerAsAccepted({ questionId, answerId });
      setAcceptedAnswer(answerId);
    });
  };

  return (
    <button
      className={`px-2 py-1 rounded hover:bg-gray-300 ${
        isAccepted ? "bg-primary text-white" : "bg-gray-200"
      }`}
      onClick={handleAccept}
      disabled={isPending || isButtonPending}
    >
      <CheckIcon className={`h-6 w-6 ${isAccepted ? "text-white" : ""}`} />
    </button>
  );
}
