"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
  Building2,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { initialAuthState } from "@/data/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Auth & UI States
  const [authState, setAuthState] = useState(initialAuthState);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Refs for click outside
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const { isLoggedIn, user, notifications } = authState;
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Determine active mode dynamically based on current pathname if logged in
  const currentMode = pathname.includes("/dashboard/client")
    ? "Client"
    : pathname.includes("/dashboard/agency")
      ? "Agency"
      : user.activeMode;
  const publicProfileHref = `/profile/${user.profileSlugs[currentMode]}`;

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

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    else router.push("/dashboard/agency");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border/70 bg-background/95 text-foreground shadow-2xs">
      {/* Full width container with clean x-axis padding */}
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        {/* Left Section: Brand Logo & Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 shrink-0"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-base font-bold text-primary-foreground shadow-2xs italic">
              S
            </span>
            <span className="font-bold text-foreground tracking-wide">
              Sourced
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-muted/60 text-primary font-medium"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/60",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          {/* Middle Section: Desktop Search Bar using Shadcn Input */}
          {isLoggedIn && (
            <form
              onSubmit={handleSearchSubmit}
              className="relative hidden items-center md:flex w-56 lg:w-72"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search projects, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-full pl-9 pr-9 text-xs bg-muted/40 focus:bg-background border-border/80 rounded-lg transition-all placeholder:text-muted-foreground/70"
              />
            </form>
          )}
        </div>

        {/* Right Section: Utilities & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {isLoggedIn ? (
            <>
              {/* Notification Bell with Shadcn Button & Clean Red Indicator */}
              <div className="relative" ref={notificationsRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileMenuOpen(false);
                  }}
                  className="relative size-9 rounded-lg hover:bg-muted text-foreground"
                  aria-label="Notifications"
                >
                  <Bell className="size-4" />
                  {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-rose-600 ring-2 ring-background" />
                    </span>
                  )}
                </Button>

                {/* Notifications Dropdown Panel */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 rounded-xl border border-border bg-popover text-popover-foreground p-2 shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="flex items-center justify-between p-2 pb-2 mb-1 border-b border-border/60">
                      <div className="flex items-center gap-1.5">
                        <Bell className="size-3.5 text-muted-foreground" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Notifications
                        </h4>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200/50">
                        {unreadCount} new
                      </span>
                    </div>

                    <div className="space-y-1 max-h-64 overflow-y-auto pr-0.5">
                      {notifications.map((n) => (
                        <Link
                          key={n.id}
                          href={n.link}
                          onClick={() => setIsNotificationsOpen(false)}
                          className="block rounded-lg p-2 text-xs transition-colors hover:bg-muted/80"
                        >
                          <p className="font-semibold text-foreground">
                            {n.title}
                          </p>
                          <p className="text-muted-foreground mt-0.5 text-[11px] line-clamp-2 leading-relaxed">
                            {n.message}
                          </p>
                          <span className="text-[10px] text-muted-foreground/70 mt-1 block">
                            {n.time}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Settings Icon Link */}
              <Link
                href="/settings"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className: "size-9 rounded-lg hover:bg-muted text-foreground",
                })}
                aria-label="Settings"
              >
                <SettingsIcon className="size-4" />
              </Link>

              {/* Profile Trigger Button & Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileMenuOpen(!isProfileMenuOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-2 py-1 transition-all hover:bg-muted/80 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isProfileMenuOpen && "bg-muted border-border",
                  )}
                >
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="size-7 rounded-md object-cover border border-border/80 shadow-2xs shrink-0"
                  />
                  <div className="hidden text-left leading-tight sm:block min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate max-w-25">
                      {user.name.split(" ")[0]}
                    </p>
                    <p className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">
                      {currentMode}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-3.5 text-muted-foreground transition-transform duration-200 hidden sm:block",
                      isProfileMenuOpen && "rotate-180",
                    )}
                  />
                </button>

                {/* Profile Dropdown Panel */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-popover text-popover-foreground p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    {/* Profile Header Info Card */}
                    <div className="flex items-center gap-3 p-2.5 mb-1.5 bg-muted/40 rounded-lg border border-border/40">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={36}
                        height={36}
                        className="size-9 rounded-lg object-cover border border-border shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-xs text-foreground truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">
                          {user.email}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-1 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                          <Sparkles className="size-2.5" />
                          {currentMode} Mode
                        </span>
                      </div>
                    </div>

                    {/* Mode Switcher Segment */}
                    <div className="p-1.5 mb-1 bg-muted/30 rounded-lg border border-border/30">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-1 px-1">
                        Active Mode
                      </p>
                      <div className="grid grid-cols-3 gap-1 bg-muted p-1 rounded-md">
                        {(["Freelancer", "Client", "Agency"] as const).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => handleModeChange(m)}
                            className={cn(
                              "rounded-sm py-1 text-xs font-semibold transition-all",
                              currentMode === m
                                ? "bg-background text-foreground shadow-2xs font-bold"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Menu Navigation Links */}
                    <div className="space-y-0.5 text-xs font-medium">
                      <Link
                        href="/dashboard/freelancer"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted hover:text-accent-foreground transition-colors"
                      >
                        <LayoutGrid className="size-3.5 text-muted-foreground" />
                        Freelancer Dashboard
                      </Link>

                      <Link
                        href="/dashboard/client"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted hover:text-accent-foreground transition-colors"
                      >
                        <Briefcase className="size-3.5 text-muted-foreground" />
                        Client Dashboard
                      </Link>

                      <Link
                        href="/dashboard/agency"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted hover:text-accent-foreground transition-colors"
                      >
                        <Building2 className="size-3.5 text-muted-foreground" />
                        Agency Dashboard
                      </Link>

                      <Link
                        href={publicProfileHref}
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted hover:text-accent-foreground transition-colors"
                      >
                        <UserIcon className="size-3.5 text-muted-foreground" />
                        My Profile
                      </Link>

                      <div className="pt-1 my-1 border-t border-border/60">
                        <button
                          type="button"
                          onClick={toggleAuth}
                          className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-destructive hover:bg-destructive/10 transition-colors font-semibold"
                        >
                          <LogOut className="size-3.5" />
                          Sign Out (Switch Guest)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Guest Auth Buttons using Shadcn Button */
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs font-semibold",
                })}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                  className: "text-xs font-bold shadow-2xs",
                })}
              >
                Sign Up
              </Link>
              <Button
                variant="outline"
                size="xs"
                onClick={toggleAuth}
                className="text-[10px] hidden sm:inline-flex"
                title="Demo: Switch to Logged In User"
              >
                Demo Auth
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="size-9 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-3 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-4">
            {/* Mobile Search Input */}
            {isLoggedIn && (
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="search"
                  placeholder="Search projects, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 text-xs h-9"
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
                  className="block rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Logged-in Info & Actions */}
            {isLoggedIn ? (
              <div className="pt-3 border-t border-border space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="size-8 rounded-md object-cover border border-border"
                    />
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase">
                        {currentMode} Mode
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    {(["Freelancer", "Client", "Agency"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => handleModeChange(mode)}
                        className={cn(
                          "rounded px-2 py-1 text-[10px] font-bold transition-colors",
                          currentMode === mode
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <Link
                    href="/settings"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Settings
                  </Link>
                  <Button variant="destructive" size="sm" onClick={toggleAuth}>
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "default", size: "sm" })}
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
