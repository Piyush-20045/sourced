import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Browse projects" },
  { href: "/projects/new", label: "Post a project" },
];

export function Navbar() {
  return (
    <header className="w-full bg-[#e3e3e3] text-[#063242] z-100 sticky top-0 ">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 w-full flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8 lg:max-w-7xl lg:flex-nowrap lg:px-4"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-xl font-bold leading-none text-[#063242]"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-[#063242] text-xs font-bold text-white">
            S
          </span>
          <span>Sourced</span>
        </Link>

        <div className="order-3 flex w-full items-center gap-8 text-[15px] font-semibold text-[#53545c] sm:w-auto lg:order-0 lg:ml-7 lg:mr-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#063242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063242]/35"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-7 text-[15px] font-semibold">
          <Link
            href="/login"
            className="text-[#3f4047] transition-colors hover:text-[#063242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063242]/35"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-[3px] bg-[#063242] px-6 text-white transition-colors hover:bg-[#0a4155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#063242]/35"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
