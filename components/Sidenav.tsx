import Image from "next/image";
import logo from "@/assets/logo.png";
import TopicLinks from "./TopicLinks";
import NavLink from "./NavLink";
import SignOutButton from "./SignOutButton";
import NewTopicButton from "./NewTopicButton";
import Link from "next/link";
import { auth } from "@/auth";

export default async function SideNav() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Logo />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-scroll">
        <NavLink name="Topics" href="/ui" />
        <TopicLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <NewTopicButton />

        {/* Show logged-in user */}
        {user && (
          <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-200">
            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
            <span className="text-sm font-medium">
              {user.name || "Test User"}
            </span>
          </div>
        )}

        <SignOutButton />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link
      className="mb-2 flex h-20 items-end justify-center rounded-md bg-secondary p-4 md:h-40"
      href="/ui"
    >
      <Image
        src={logo}
        alt="Acme Logo"
        className="h-14 md:h-full object-contain"
      />
    </Link>
  );
}
