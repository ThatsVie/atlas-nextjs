"use client";

import { useState, useTransition } from "react";
import VoteButton from "./VoteButton";

type QuestionProps = {
  id: string;
  text: string;
  votes: number;
};

export function Question({ id, text, votes }: QuestionProps) {
  const [localVotes, setLocalVotes] = useState<number>(votes);
  const [isPending] = useTransition();

  return (
    <div
      onClick={() => {
        if (!isPending) {
          window.location.href = `/ui/questions/${id}`;
        }
      }}
      className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b cursor-pointer hover:bg-gray-100"
    >
      <div className="mr-2 rounded-xl bg-secondary px-2 text-sm text-white">
        {localVotes}
      </div>
      <p className="text w-full text-left font-semibold">{text}</p>

      <div onClick={(e) => e.stopPropagation()}>
        <VoteButton id={id} setLocalVotes={setLocalVotes} />
      </div>
    </div>
  );
}
