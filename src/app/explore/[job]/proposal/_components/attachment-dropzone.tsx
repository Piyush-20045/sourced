"use client";

import { Upload } from "lucide-react";

interface AttachmentDropzoneProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

/** File upload drag & drop dropzone for proposal attachments */
export function AttachmentDropzone({
  file,
  setFile,
}: AttachmentDropzoneProps) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-xs font-semibold text-[#022b3a]">
        Attachments (Optional)
      </label>
      <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#c6c6cd] bg-[#fafafa] p-8 text-center transition-colors hover:bg-[#f3f4f6]">
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f5f8] text-[#022b3a]">
          <Upload className="h-5 w-5" />
        </div>
        <p className="text-sm font-bold text-[#022b3a]">
          {file ? file.name : "Click to upload or drag and drop"}
        </p>
        <p className="mt-1 text-xs text-[#525866]">
          PDF, JPG, or PNG (Max 10MB)
        </p>
      </label>
    </div>
  );
}
