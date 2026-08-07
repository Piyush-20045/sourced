import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left content with the subtle Figma background behind it. */}
        <div className="relative flex max-w-2xl flex-col items-start gap-6">
          <Image
            src="/home/hero/hero-background.png"
            alt=""
            width={603}
            height={449}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-24 z-0 hidden w-96 opacity-70 sm:block lg:-bottom-40 lg:-left-28 lg:w-120"
          />

          <div className="relative z-10">
            <h1 className="max-w-2xl text-5xl font-bold leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[60px]">
              Find the Perfect <br />
              Talent for Your Next <br />
              <span className="relative inline-block text-[#022b3a]">
                Big Idea
                <Image
                  src="/home/hero/hero-underline.png"
                  alt=""
                  width={376}
                  height={12}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-full mt-1 h-3 w-full object-fill"
                />
              </span>
            </h1>

            <Image
              src="/home/hero/hero-scribble.svg"
              alt=""
              width={92}
              height={85}
              aria-hidden="true"
              className="absolute right-[-8%] top-[5%] hidden h-auto w-20 rotate-28 lg:block lg:right-[-14%] lg:top-[-6%] lg:w-24"
            />
          </div>

          <p className="relative z-10 max-w-lg text-base leading-6 text-[#45464d] sm:text-lg sm:leading-7">
            Connect with thousands of vetted freelancers and agencies across the
            globe. From design to development, we help you build faster and
            smarter.
          </p>

          {/* Hero call-to-action buttons stay above decorative artwork. */}
          <div className="relative z-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded bg-[#022b3a] px-8 text-center text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#06384b] sm:min-w-44"
            >
              Get Started Today
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded border border-[#76777d] bg-white px-8 text-center text-sm font-semibold tracking-wide text-[#191c1e] transition-colors hover:border-[#022b3a] hover:text-[#022b3a] sm:min-w-40"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Right image card and small badge. */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
          <div className="overflow-hidden rounded-xl border-4 border-white bg-white p-1 shadow-sm">
            <div className="relative aspect-603/449 overflow-hidden rounded-lg">
              <Image
                src="/home/hero/hero-image.webp"
                alt="Two professionals collaborating in a bright studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 603px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 flex size-10 items-center justify-center rounded-lg bg-white shadow-sm sm:-left-6">
            <Image
              src="/home/hero/hero-badge.svg"
              alt=""
              width={22}
              height={21}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
