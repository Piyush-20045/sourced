"use client";
import { useState } from "react";
import Link from "next/link";
import AccountTypeToggle, {
  AccountType,
} from "@/app/login/_components/account-type-toggle";
import SocialAuthButtons from "@/app/login/_components/social-auth-buttons";

export default function SignupForm() {
  const [tab, setTab] = useState<AccountType>("hire");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for registering user can be added here
  };

  return (
    <div className="flex items-center justify-center px-6 py-12 lg:py-16">
      <div className="w-full max-w-105">
        {/* Header */}
        <h2 className="text-3xl font-bold tracking-tight text-[#022b3a]">
          Create your account
        </h2>
        <p className="mt-2 text-sm leading-normal text-[#45464d]">
          Enter your details to get started with your professional dashboard.
        </p>

        {/* Hire / Work selection */}
        <div className="mt-7">
          <AccountTypeToggle activeTab={tab} onTabChange={setTab} />
        </div>

        {/* Social Authentication */}
        <div className="mt-5">
          <SocialAuthButtons />
        </div>

        {/* Or Email Divider */}
        <div className="my-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#c6c6cd]/60" />
          <span className="text-sm font-medium tracking-widest text-[#45464d]/80 uppercase">
            Or Email
          </span>
          <span className="h-px flex-1 bg-[#c6c6cd]/60" />
        </div>

        {/* Name, Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="mt-1.5 w-full rounded-lg border border-[#c6c6cd] bg-white px-3.5 py-2.5 text-sm text-[#022b3a] placeholder:text-[#8d8e96] transition-colors focus:border-[#022b3a] focus:outline-none focus:ring-1 focus:ring-[#022b3a]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="mt-1.5 w-full rounded-lg border border-[#c6c6cd] bg-white px-3.5 py-2.5 text-sm text-[#022b3a] placeholder:text-[#8d8e96] transition-colors focus:border-[#022b3a] focus:outline-none focus:ring-1 focus:ring-[#022b3a]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#022b3a]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-lg border border-[#c6c6cd] bg-white px-3.5 py-2.5 text-sm text-[#022b3a] placeholder:text-[#8d8e96] transition-colors focus:border-[#022b3a] focus:outline-none focus:ring-1 focus:ring-[#022b3a]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[#022b3a] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#064259] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/40 tracking-wide"
          >
            Create Account
          </button>
        </form>

        {/* Already have an account link */}
        <p className="mt-6 text-center text-sm text-[#45464d]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-[#022b3a] hover:underline"
          >
            Log In
          </Link>
        </p>

        {/* Terms and Privacy Policy Disclaimer */}
        <div className="mt-8 border-t border-[#c6c6cd]/50 pt-5 text-center text-xs leading-relaxed text-[#45464d]">
          By continuing, you agree to Sourced&apos;s{" "}
          <Link href="#" className="underline hover:text-[#022b3a]">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline hover:text-[#022b3a]">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
