import { AtSign, Globe2, Languages, Share2 } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: [
      { href: "/categories", label: "Categories" },
      { href: "/pricing", label: "Pricing" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact Us" },
      { href: "/trust-and-safety", label: "Trust & Safety" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#e3e3e3] text-[#44464d]">
      <div className="mx-auto flex w-full max-w-348 flex-col gap-10 px-6 pb-9 pt-11 sm:px-10 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(260px,1fr)_auto] lg:items-start">
          <div className="max-w-90">
            <Link href="/" className="text-base font-medium text-black">
              Sourced
            </Link>
            <p className="mt-5 text-[15px] leading-6 text-[#4e5057]">
              The world&apos;s premium marketplace for elite freelancers and
              ambitious companies.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[#4e5057]">
              <Link
                href="#"
                aria-label="Website"
                className="transition-colors hover:text-black"
              >
                <Globe2 className="size-5" strokeWidth={2.5} />
              </Link>
              <Link
                href="#"
                aria-label="Email"
                className="transition-colors hover:text-black"
              >
                <AtSign className="size-5" strokeWidth={2.5} />
              </Link>
              <Link
                href="#"
                aria-label="Share"
                className="transition-colors hover:text-black"
              >
                <Share2 className="size-5" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-14 lg:gap-20 xl:gap-24">
            {footerSections.map((section) => (
              <section
                key={section.title}
                aria-labelledby={section.title.toLowerCase()}
              >
                <h2
                  id={section.title.toLowerCase()}
                  className="text-sm font-bold uppercase tracking-[0.08em] text-black"
                >
                  {section.title}
                </h2>
                <ul className="mt-3 space-y-2 text-[15px] leading-5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-black"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#d3d3d3] px-6 py-4 text-center text-xs leading-4 text-[#3f4148]">
        <p>© 2026 Sourced. All rights reserved.</p>
        <p className="mt-0.5 inline-flex items-center justify-center gap-1">
          <Languages className="size-3.5" /> English (US)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
