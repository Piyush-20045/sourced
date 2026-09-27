"use client";

import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

interface ChatEmojiPickerProps {
  onSelect: (emoji: string) => void;
}

export function ChatEmojiPicker({ onSelect }: ChatEmojiPickerProps) {
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onSelect(emojiData.emoji);
  };

  return (
    <div className="absolute bottom-16 left-3 z-20 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl">
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        autoFocusSearch={false}
        theme={Theme.LIGHT}
        width={320}
        height={400}
        previewConfig={{ showPreview: false }}
      />
    </div>
  );
}
