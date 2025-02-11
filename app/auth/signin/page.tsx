"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { FaGithub } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Atlas School Logo"
            width={120}
            height={40}
            priority
            className="animate-fade-in"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await signIn("credentials", {
              redirect: false,
              email,
              password,
              callbackUrl: "/ui",
            });

            if (res?.error) {
              alert("Invalid credentials. Please try again.");
            } else {
              window.location.href = "/ui";
            }
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:outline-none"
              required
              aria-label="Enter your email"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-3 pr-12 w-full border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:outline-none"
                required
                aria-label="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-primary text-white px-6 py-3 rounded-md text-lg font-medium transition-transform hover:scale-105 duration-300 
            ${!email || !password ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"}`}
            disabled={!email || !password}
          >
            Sign in with Credentials
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="mx-3 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        <button
          onClick={() =>
            signIn("github", { prompt: "consent", callbackUrl: "/ui" })
          }
          className="w-full flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium transition-transform hover:scale-105 duration-300"
        >
          <FaGithub className="mr-2" size={24} />
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}
