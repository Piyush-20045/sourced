import Link from "next/link";

const footerLinks = [
  { href: "/categories", label: "Categories" },
  { href: "/support", label: "Support" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
];

export default function LoginFooter() {
  return (
    <footer className="w-full border-t border-[#c6c6cd] bg-[#e6e8ea] px-6 py-6 text-[#45464d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[#022b3a] hover:opacity-90 transition-opacity"
          >
            Sourced
          </Link>
          <span className="text-xs text-[#45464d]/90">
            © 2024 Sourced. All rights reserved.
          </span>
        </div>

        <nav
          aria-label="Login Footer navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#45464d]"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#022b3a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
