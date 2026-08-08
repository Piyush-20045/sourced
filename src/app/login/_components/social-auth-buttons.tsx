import Image from "next/image";

export default function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-3.5">
      <button
        type="button"
        className="flex items-center justify-center gap-2.5 rounded-lg border border-[#c6c6cd] bg-white py-2.5 text-sm font-medium text-[#022b3a] transition-all hover:bg-[#f4f5f6] hover:border-[#b0b0b8] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/20"
      >
        <Image
          src="/login/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="size-5"
        />
        <span>Google</span>
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2.5 rounded-lg border border-[#c6c6cd] bg-white py-2.5 text-sm font-medium text-[#022b3a] transition-all hover:bg-[#f4f5f6] hover:border-[#b0b0b8] focus:outline-none focus:ring-2 focus:ring-[#022b3a]/20"
      >
        <Image
          src="/login/linkedin.svg"
          alt="LinkedIn"
          width={20}
          height={20}
          className="size-5"
        />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}
