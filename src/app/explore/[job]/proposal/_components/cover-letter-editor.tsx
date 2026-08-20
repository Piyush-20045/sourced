"use client";

import { Bold, Italic, Link as LinkIcon, List } from "lucide-react";

interface CoverLetterEditorProps {
  coverLetter: string;
  setCoverLetter: (letter: string) => void;
}

/** Rich formatting toolbar & Cover Letter textarea component */
export function CoverLetterEditor({
  coverLetter,
  setCoverLetter,
}: CoverLetterEditorProps) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-xs font-semibold text-[#022b3a]">
        Cover Letter
      </label>
      <div className="overflow-hidden rounded-2xl border border-[#c6c6cd]">
        {/* Toolbar */}
        <div className="flex items-center gap-4 border-b border-[#c6c6cd] bg-[#f0f5f8]/80 px-4 py-2 text-sm text-[#022b3a]">
          <button
            type="button"
            className="rounded p-1 hover:bg-[#d5e2e9]"
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded p-1 hover:bg-[#d5e2e9]"
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded p-1 hover:bg-[#d5e2e9]"
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded p-1 hover:bg-[#d5e2e9]"
            title="Insert Link"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
        </div>
        {/* Textarea */}
        <textarea
          rows={6}
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Describe why you are the best fit for this project..."
          className="min-h-40 w-full resize-y bg-white p-4 text-sm text-[#022b3a] outline-none placeholder:text-[#8d8e96]"
        />
      </div>
    </div>
  );
}
