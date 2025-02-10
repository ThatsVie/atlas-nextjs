import { handlers } from "@/auth";

export const runtime = "nodejs"; // Ensure this API runs in Node.js, not Edge

export const { GET, POST } = handlers;
