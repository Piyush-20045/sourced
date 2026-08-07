"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Browse projects" },
  { href: "/projects/new", label: "Post a project" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#e3e3e3] text-[#063242] shadow-sm">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-4"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold leading-none"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-[#063242] text-xs font-bold text-white">
            S
          </span>
          <span>Sourced</span>
        </Link>

        {/* Desktop navigation. */}
        <div className="hidden items-center gap-10 text-sm font-semibold text-[#53545c] md:flex lg:mr-auto lg:ml-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#063242]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link
            href="/login"
            className="text-[#3f4047] transition-colors hover:text-[#063242]"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded bg-[#063242] px-6 text-white transition-colors hover:bg-[#0a4155]"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button. */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-md bg-white text-[#063242] shadow-sm md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile navigation panel. */}
      {isOpen ? (
        <div className="border-t border-black/5 bg-[#e3e3e3] px-5 pb-5 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-[#53545c] transition-colors hover:bg-[#063242]/10 hover:text-[#063242]"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded border border-[#063242]/20 text-sm font-semibold text-[#063242]"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded bg-[#063242] text-sm font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
