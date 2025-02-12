"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function LoggedInUser() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) return null;

  return (
    <div className="flex items-center space-x-3 p-2 rounded-md bg-gray-100">
      {user.image ? (
        <Image
          src={user.image}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="h-8 w-8 rounded-full bg-gray-400"></div>
      )}
      <span className="text-sm font-medium">{user.name || "User"}</span>
    </div>
  );
}
