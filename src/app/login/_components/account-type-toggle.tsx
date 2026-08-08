"use client";

export type AccountType = "hire" | "work";

interface AccountTypeToggleProps {
  activeTab: AccountType;
  onTabChange: (tab: AccountType) => void;
}

export default function AccountTypeToggle({
  activeTab,
  onTabChange,
}: AccountTypeToggleProps) {
  return (
    <div className="flex rounded-md bg-[#e6e8ea]/80 p-1 border border-[#c6c6cd]/40">
      <button
        type="button"
        onClick={() => onTabChange("hire")}
        className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
          activeTab === "hire"
            ? "bg-white text-[#022b3a] shadow-sm"
            : "text-[#45464d] hover:text-[#022b3a]"
        }`}
      >
        I want to Hire
      </button>
      <button
        type="button"
        onClick={() => onTabChange("work")}
        className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
          activeTab === "work"
            ? "bg-white text-[#022b3a] shadow-sm"
            : "text-[#45464d] hover:text-[#022b3a]"
        }`}
      >
        I want to Work
      </button>
    </div>
  );
}
