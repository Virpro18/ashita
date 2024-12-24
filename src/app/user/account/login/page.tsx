"use client"; // Hanya jika Anda menggunakan Client Component

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {},
    });
    console.log(error);
    setLoading(false);
    if (!error) {
      router.push("/user/dashboard");
    }
    setMessage("Username or password is incorrect");
  };
  const handleOAuthLogin = async (provider: "github" | "discord") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });
    if (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-md">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="flex mt-5 justify-between">
          <button onClick={() => handleOAuthLogin("github")}>
            <Image
              src="/github-mark-white.png"
              alt="github"
              className="w-10 h-10 invert"
              width={20}
              height={20}
            />
          </button>
          <button onClick={() => handleOAuthLogin("discord")}>
            <Image
              src="/discord.svg"
              alt="github"
              className="w-10 h-10"
              width={20}
              height={20}
            />
          </button>
        </div>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
}
