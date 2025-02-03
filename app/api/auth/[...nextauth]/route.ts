import { handlers } from "@/auth";

// Force NextAuth to use the Node.js runtime instead of Edge
export const runtime = "nodejs";

export const { GET, POST } = handlers;
