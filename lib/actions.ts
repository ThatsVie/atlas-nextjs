"use server";

import { revalidatePath } from "next/cache";
import {
  insertTopic,
  insertQuestion,
  incrementVotes,
  insertAnswer,
  updateAcceptedAnswer,
} from "./data";
import { redirect } from "next/navigation";

export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Error adding topic to database:", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}

export async function addQuestion(question: FormData) {
  try {
    insertQuestion({
      title: question.get("title") as string,
      topic_id: question.get("topic_id") as string,
      votes: 0,
    });
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Error inserting question into database:", error);
    throw new Error("Failed to add question.");
  }
}

export async function addVote(data: FormData) {
  try {
    incrementVotes(data.get("id") as string);
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Error incrementing vote in database:", error);
    throw new Error("Failed to add vote.");
  }
}

export async function addAnswer(formData: FormData) {
  try {
    const answerText = formData.get("answer") as string;
    const questionId = formData.get("question_id") as string;

    if (!answerText || !questionId) {
      throw new Error("Invalid input");
    }

    await insertAnswer({
      answer: answerText,
      question_id: questionId,
    });

    revalidatePath(`/ui/questions/${questionId}`);
  } catch (error) {
    console.error("Error adding answer to database:", error);
    throw new Error("Failed to add answer.");
  }
}

export async function markAnswerAsAccepted({
  questionId,
  answerId,
}: {
  questionId: string;
  answerId: string;
}) {
  try {
    if (!questionId || !answerId) {
      throw new Error("Invalid input: Question ID or Answer ID missing.");
    }

    console.log("Updating accepted answer in DB:", { questionId, answerId });

    await updateAcceptedAnswer(questionId, answerId);

    revalidatePath(`/ui/questions/${questionId}`);
  } catch (error) {
    console.error("Error marking answer as accepted:", error);
    throw new Error("Failed to mark answer as accepted.");
  }
}
