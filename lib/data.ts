import { sql } from "@vercel/postgres";
import { Question, Topic, User, Answer } from "./definitions";

export async function fetchUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchTopics() {
  try {
    const data = await sql<Topic>`SELECT * FROM topics`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch topics.");
  }
}

export async function fetchTopic(id: string) {
  try {
    const data = await sql<Topic>`SELECT * FROM topics WHERE id = ${id}`;
    return data.rows && data.rows.length > 0 ? data.rows[0] : null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch topics.");
  }
}

export async function fetchQuestions(topic_id: string) {
  try {
    const data =
      await sql<Question>`SELECT * FROM questions WHERE topic_id = ${topic_id} ORDER BY votes DESC`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch questions.");
  }
}

export async function insertQuestion(
  question: Pick<Question, "title" | "topic_id" | "votes">,
) {
  try {
    const data =
      await sql<Question>`INSERT INTO questions (title, topic_id, votes) VALUES (${question.title}, ${question.topic_id}, ${question.votes})`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add question.");
  }
}

export async function insertTopic(topic: Pick<Topic, "title">) {
  try {
    const data =
      await sql<Topic>`INSERT INTO topics (title) VALUES (${topic.title}) RETURNING id;`;
    console.log(data.rows[0]);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  }
}

export async function incrementVotes(id: string) {
  try {
    const data =
      await sql<Question>`UPDATE questions SET votes = votes + 1 WHERE id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to increment votes.");
  }
}

export async function fetchQuestionById(id: string): Promise<Question | null> {
  try {
    const data = await sql<Question>`
      SELECT id, title, topic_id, votes, answer_id 
      FROM questions 
      WHERE id = ${id}
    `;
    return data.rows.length > 0 ? data.rows[0] : null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch question.");
  }
}

export async function fetchAnswers(question_id: string): Promise<Answer[]> {
  try {
    const data = await sql<Answer>`
      SELECT * FROM answers 
      WHERE question_id = ${question_id}
      ORDER BY CASE WHEN id = (SELECT answer_id FROM questions WHERE id = ${question_id}) THEN 0 ELSE 1 END, id;
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch answers.");
  }
}

export async function insertAnswer(
  answer: Pick<Answer, "answer" | "question_id">,
) {
  try {
    await sql`
      INSERT INTO answers (answer, question_id)
      VALUES (${answer.answer}, ${answer.question_id});
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to insert answer.");
  }
}

export async function updateAcceptedAnswer(
  questionId: string,
  answerId: string,
) {
  try {
    console.log("Updating accepted answer in DB:", { questionId, answerId });

    await sql`
      UPDATE questions
      SET answer_id = NULL
      WHERE id = ${questionId} AND answer_id IS NOT NULL;
    `;

    await sql`
      UPDATE questions 
      SET answer_id = ${answerId} 
      WHERE id = ${questionId};
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to mark answer as accepted.");
  }
}
