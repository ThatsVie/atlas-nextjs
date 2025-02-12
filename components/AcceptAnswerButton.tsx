"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
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
      className={`flex items-center justify-center rounded-full border-2 ${
        isAccepted ? "bg-primary text-white border-primary" : "bg-transparent border-gray-300"
      } transition duration-200 ease-in-out hover:border-gray-500 focus:outline-none`}
      onClick={handleAccept}
      disabled={isPending || isButtonPending}
    >
      <CheckCircleIcon className={`h-6 w-6 ${isAccepted ? "text-white" : "text-gray-500"}`} />
    </button>
  );
}
