"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings as SettingsIcon,
  User as UserIcon,
  X,
  Briefcase,
  LayoutGrid,
} from "lucide-react";
import { initialAuthState, UserProfile } from "@/data/auth";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Auth & UI States
  const [authState, setAuthState] = useState(initialAuthState);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoggedIn, user, notifications } = authState;
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Determine active mode dynamically based on current pathname if logged in
  const currentMode = pathname.includes("/dashboard/client")
    ? "Client"
    : pathname.includes("/dashboard/agency")
      ? "Agency"
      : user.activeMode;

  // Navigation Links
  const navLinks = isLoggedIn
    ? [
        { label: "Browse projects", href: "/explore" },
        { label: "Post a project", href: "/dashboard/client" },
        { label: "Messages", href: "/message" },
        { label: "Pricing", href: "/subscriptions" },
      ]
    : [
        { label: "Browse projects", href: "/explore" },
        { label: "Pricing", href: "/subscriptions" },
      ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleAuth = () => {
    setAuthState((prev) => ({
      ...prev,
      isLoggedIn: !prev.isLoggedIn,
    }));
    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleModeChange = (mode: "Freelancer" | "Client" | "Agency") => {
    setAuthState((prev) => ({
      ...prev,
      user: { ...prev.user, activeMode: mode },
    }));
    setIsProfileMenuOpen(false);
    if (mode === "Freelancer") router.push("/dashboard/freelancer");
    else if (mode === "Client") router.push("/dashboard/client");
    else router.push("/dashboard/client");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/20 bg-[#e3e3e3]/80 text-[#063242] shadow-sm">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 md:gap-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold leading-none shrink-0"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#063242] text-xs font-bold text-white shadow-2xs">
            S
          </span>
          <span className="tracking-tight text-neutral-900 font-extrabold">
            Sourced
          </span>
        </Link>

        {/* Primary Desktop Nav Links */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 md:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-[#063242] ${
                  isActive ? "text-[#063242] font-bold" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Search Bar */}
        {isLoggedIn && (
          <form
            onSubmit={handleSearchSubmit}
            className="ml-auto hidden items-center gap-2 rounded-xl border border-neutral-300/80 bg-neutral-100/90 px-3.5 py-1.5 text-sm text-neutral-600 focus-within:border-[#063242] focus-within:bg-white transition-all lg:flex"
          >
            <Search className="h-3.5 w-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-36 bg-transparent outline-none placeholder:text-neutral-400 text-neutral-900 text-xs font-medium"
            />
          </form>
        )}

        {/* Right Section: Auth State / Logged-in Utilities */}
        <div className="ml-auto flex items-center gap-3 shrink-0 sm:gap-4">
          {isLoggedIn ? (
            <>
              {/* Notifications Dropdown Toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileMenuOpen(false);
                  }}
                  className="relative rounded-xl p-2 text-neutral-700 hover:bg-black/5 transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-rose-600 text-[9px] font-bold text-white shadow-2xs">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown Panel */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100 px-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
                        Notifications
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {unreadCount} new
                      </span>
                    </div>

                    <div className="space-y-1 max-h-64 overflow-y-auto">
                      {notifications.map((n) => (
                        <Link
                          key={n.id}
                          href={n.link}
                          onClick={() => setIsNotificationsOpen(false)}
                          className="block rounded-xl p-2.5 text-xs hover:bg-neutral-50 transition-colors"
                        >
                          <p className="font-extrabold text-neutral-900">
                            {n.title}
                          </p>
                          <p className="text-neutral-500 mt-0.5 line-clamp-2">
                            {n.message}
                          </p>
                          <span className="text-[10px] text-neutral-400 mt-1 block">
                            {n.time}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Settings Link */}
              <Link
                href="/settings"
                className="rounded-xl p-2 text-neutral-700 hover:bg-black/5 transition-colors"
                aria-label="Settings"
              >
                <SettingsIcon className="h-4 w-4" />
              </Link>

              {/* User Avatar & Profile Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileMenuOpen(!isProfileMenuOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className="flex items-center gap-2 rounded-full p-0.5 hover:ring-2 hover:ring-[#063242]/20 transition-all"
                >
                  <div className="hidden text-right leading-tight sm:block">
                    <p className="text-xs font-bold text-neutral-900">
                      {user.name.split(" ")[0]}
                    </p>
                    <p className="text-[9px] uppercase font-semibold tracking-wider text-neutral-500">
                      {currentMode} mode
                    </p>
                  </div>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover border border-neutral-300 shadow-2xs"
                  />
                  <ChevronDown className="h-3 w-3 text-neutral-500 hidden sm:block" />
                </button>

                {/* Profile Dropdown Panel */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="p-3 border-b border-neutral-100">
                      <p className="font-extrabold text-sm text-neutral-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-neutral-500">{user.email}</p>
                    </div>

                    {/* Mode Switcher */}
                    <div className="p-2 border-b border-neutral-100">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                        SWITCH MODE
                      </p>
                      <div className="grid grid-cols-2 gap-1 bg-neutral-100 p-1 rounded-xl text-xs font-bold">
                        {(["Freelancer", "Client"] as const).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => handleModeChange(m)}
                            className={`rounded-lg py-1 transition-all ${
                              currentMode === m
                                ? "bg-[#063242] text-white shadow-2xs"
                                : "text-neutral-600 hover:text-neutral-900"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="py-1 space-y-0.5 text-xs font-semibold text-neutral-700">
                      <Link
                        href="/dashboard/freelancer"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900"
                      >
                        <LayoutGrid className="h-3.5 w-3.5" />
                        Freelancer Dashboard
                      </Link>

                      <Link
                        href="/dashboard/client"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900"
                      >
                        <Briefcase className="h-3.5 w-3.5" />
                        Client Dashboard
                      </Link>

                      <Link
                        href="/profile"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900"
                      >
                        <UserIcon className="h-3.5 w-3.5" />
                        My Profile
                      </Link>

                      <button
                        type="button"
                        onClick={toggleAuth}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-rose-600 hover:bg-rose-50"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        Sign Out (Switch Guest)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Guest Auth Buttons */
            <div className="flex items-center gap-2.5">
              <Link
                href="/login"
                className="text-xs font-extrabold text-neutral-700 hover:text-[#063242] px-3 py-2 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-9 items-center justify-center rounded-xl bg-[#063242] hover:bg-[#0a4155] px-4 text-xs font-extrabold text-white shadow-xs transition-all active:scale-95"
              >
                Sign Up
              </Link>
              <button
                type="button"
                onClick={toggleAuth}
                title="Demo: Switch to Logged In User"
                className="text-[10px] font-bold text-blue-600 hover:underline border border-blue-200 bg-blue-50 px-2 py-1 rounded-md hidden sm:inline-block"
              >
                Demo Log In
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#063242] shadow-2xs md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Panel */}
      {isMobileMenuOpen && (
        <div className="border-t border-black/5 bg-[#e3e3e3] px-4 pb-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mx-auto max-w-lg space-y-3 rounded-2xl bg-white p-4 shadow-md mt-2">
            {/* Mobile Search Input */}
            {isLoggedIn && (
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search projects, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium outline-none focus:border-neutral-900"
                />
              </form>
            )}

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-xs font-extrabold text-neutral-800 hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Logged-in Options or Auth Buttons */}
            {isLoggedIn ? (
              <div className="pt-2 border-t border-neutral-100 space-y-2">
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-extrabold text-neutral-900">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-neutral-500">
                        {currentMode} Mode
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleModeChange("Freelancer")}
                      className={`px-2 py-1 rounded text-[10px] font-bold ${
                        currentMode === "Freelancer"
                          ? "bg-[#063242] text-white"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      Freelancer
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange("Client")}
                      className={`px-2 py-1 rounded text-[10px] font-bold ${
                        currentMode === "Client"
                          ? "bg-[#063242] text-white"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      Client
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <Link
                    href="/settings"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl border border-neutral-200 p-2.5 text-center text-neutral-800"
                  >
                    Settings
                  </Link>
                  <button
                    type="button"
                    onClick={toggleAuth}
                    className="rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-center text-rose-600"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl border border-neutral-300 py-2.5 text-center text-xs font-extrabold text-neutral-800"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl bg-[#063242] py-2.5 text-center text-xs font-extrabold text-white"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
