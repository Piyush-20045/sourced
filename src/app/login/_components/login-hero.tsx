import Image from "next/image";
import Link from "next/link";

export default function LoginHero() {
  return (
    <div className="relative hidden min-h-160 flex-col justify-between p-10 lg:flex overflow-hidden">
      {/* Background Image using Next.js Image for optimal loading */}
      <Image
        src="/login/login-image.png"
        alt="Sourced Workspace"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Brand Color Overlay matching #022b3a */}
      <div className="absolute inset-0 bg-linear-to-b from-[#022b3a]/75 via-[#022b3a]/70 to-[#022b3a]/85" />

      {/* Top Brand Logo */}
      <div className="relative z-10">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          Sourced
        </Link>
      </div>

      {/* Center Hero Headline & Tagline */}
      <div className="relative z-10 max-w-md my-auto">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white">
          Empowering the world&apos;s most talented professionals.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/80">
          Join an ecosystem designed for high-performance delivery and seamless
          collaboration.
        </p>
      </div>

      {/* Bottom Metrics / Stats */}
      <div className="relative z-10 flex gap-12 pt-6 border-t border-white/15 max-w-md">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">
            120k+
          </p>
          <p className="mt-0.5 text-xs font-medium text-white/75 uppercase tracking-wider">
            Active Projects
          </p>
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">
            98%
          </p>
          <p className="mt-0.5 text-xs font-medium text-white/75 uppercase tracking-wider">
            Success Rate
          </p>
        </div>
      </div>
    </div>
  );
}
