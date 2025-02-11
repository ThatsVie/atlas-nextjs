"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { addVote } from "@/lib/actions";
import { useTransition } from "react";

export default function VoteButton({
  id,
  setLocalVotes,
}: {
  id: string;
  setLocalVotes?: (votes: (prev: number) => number) => void;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        startTransition(async () => {
          if (setLocalVotes) {
            setLocalVotes((prev) => prev + 1);
          }
          const formData = new FormData();
          formData.append("id", id);
          await addVote(formData);
        });
      }}
      disabled={isPending}
      className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal active:bg-primary active:text-white active:outline-none active:ring-2 active:ring-primary"
    >
      <HandThumbUpIcon className={isPending ? "opacity-50" : ""} />
    </button>
  );
}
