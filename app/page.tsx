"use client";

import Image from "next/image";
import puggy from "@/assets/puggyastro.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main className="w-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex lg:flex-row flex-col gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-gray-100">
              Unlock the Power of the Web
            </h1>

            <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
              Discover our suite of tools and services to build, deploy, and
              scale your web applications with ease.
            </p>

            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <button
                onClick={() => router.push("/auth/signin")}
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light disabled:pointer-events-none disabled:opacity-50"
              >
                Sign In
              </button>

              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={puggy}
              alt="Pug astronaut and elephant plush toy"
              width={550}
              height={550}
              priority
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover w-full max-w-[550px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
