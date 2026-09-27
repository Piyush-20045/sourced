"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCheck,
  Download,
  FileText,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Smile,
  Video,
} from "lucide-react";
import { Conversation } from "@/data/message-data";
import { ChatEmojiPicker } from "./chat-emoji-picker";

interface ChatAreaProps {
  conversation: Conversation;
  onSendMessage: (conversationId: string, text: string) => void;
  onMobileBack?: () => void;
}

export function ChatArea({
  conversation,
  onSendMessage,
  onMobileBack,
}: ChatAreaProps) {
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const { name, avatar, initials, statusText, messages } = conversation;

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close emoji picker on outside click / Escape
  useEffect(() => {
    if (!showEmojiPicker) return;

    const handlePointerDown = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowEmojiPicker(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowEmojiPicker(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showEmojiPicker]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(conversation.id, inputText.trim());
    setInputText("");
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const addEmoji = (emoji: string) => {
    const input = inputRef.current;
    if (!input) {
      setInputText((prev) => prev + emoji);
      return;
    }
    const start = input.selectionStart ?? inputText.length;
    const end = input.selectionEnd ?? inputText.length;
    const next = inputText.slice(0, start) + emoji + inputText.slice(end);
    setInputText(next);
    // Restore caret after the inserted emoji and keep focus for multi-select
    requestAnimationFrame(() => {
      input.focus();
      const caret = start + emoji.length;
      input.setSelectionRange(caret, caret);
    });
  };

  return (
    <div className="flex h-full flex-col bg-[#f4f6f8] relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-white px-4 sm:px-6 py-3 shadow-2xs z-10">
        <div className="flex items-center gap-3">
          {/* Mobile Back Arrow Button */}
          {onMobileBack && (
            <button
              type="button"
              onClick={onMobileBack}
              aria-label="Back to conversations"
              className="md:hidden rounded-xl p-2 hover:bg-neutral-100 text-neutral-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}

          <div className="relative shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-10 w-10 rounded-full object-cover border border-neutral-200 shadow-2xs"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold text-sm shadow-2xs">
                {initials || name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-extrabold text-neutral-900 text-base">
                {name}
              </h2>
              <BadgeCheck className="h-4 w-4 text-emerald-600 fill-emerald-100" />
            </div>
            <p className="text-xs text-neutral-500 font-medium">{statusText}</p>
          </div>
        </div>

        {/* Call & Action Icons */}
        <div className="flex items-center gap-1 sm:gap-2 text-neutral-600">
          <button
            type="button"
            onClick={() => alert(`Calling ${name}...`)}
            aria-label="Start Voice Call"
            className="rounded-xl p-2 hover:bg-neutral-100 text-neutral-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => alert(`Starting Video Call with ${name}...`)}
            aria-label="Start Video Call"
            className="rounded-xl p-2 hover:bg-neutral-100 text-neutral-600 transition-colors"
          >
            <Video className="h-4 w-4" />
          </button>
          <div className="h-4 w-px bg-neutral-200 mx-1" />
          <button
            type="button"
            aria-label="More Options"
            className="rounded-xl p-2 hover:bg-neutral-100 text-neutral-600 transition-colors"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Message Feed Area with Image Background */}
      <div
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative bg-cover bg-center bg-no-repeat scrollbar-none"
        style={{ backgroundImage: "url('/message/message-bg.jpeg')" }}
      >
        {/* Semi-transparent overlay to ensure contrast */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Date Divider */}
          <div className="flex justify-center">
            <span className="rounded-full bg-white/90 backdrop-blur-xs px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-neutral-600 shadow-2xs border border-neutral-200/60">
              TODAY
            </span>
          </div>

          {/* Message Items */}
          {messages.map((msg) => {
            const isUser = msg.senderId === "user";

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {/* Incoming Avatar */}
                {!isUser && (
                  <div className="shrink-0 mt-1">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt={name}
                        className="h-7 w-7 rounded-full object-cover border border-neutral-200 shadow-2xs"
                      />
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold text-xs">
                        {initials || name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                )}

                {/* Message Bubble Content */}
                <div
                  className={`flex flex-col space-y-1.5 max-w-md ${
                    isUser ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                      isUser
                        ? "bg-[#042430] text-white rounded-br-xs"
                        : "bg-white border border-neutral-200/90 text-neutral-800 rounded-bl-xs"
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Attachment Card if present */}
                    {msg.attachment && (
                      <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 flex items-center justify-between gap-4 text-neutral-900 shadow-2xs">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-extrabold text-xs">
                              {msg.attachment.name}
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              {msg.attachment.size} • {msg.attachment.type}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            alert(`Downloading ${msg.attachment?.name}...`)
                          }
                          aria-label="Download attachment"
                          className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-200/80 transition-colors shrink-0"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Timestamp & Status */}
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-neutral-500 bg-white/70 px-2 py-0.5 rounded-full shadow-2xs">
                    <span>{msg.timestamp}</span>
                    {isUser && (
                      <CheckCheck className="h-3.5 w-3.5 text-emerald-500" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Bar (Bottom) */}
      <div className="p-3 sm:p-4 bg-white border-t border-neutral-200/80 z-10">
        <form
          onSubmit={handleSend}
          className="relative rounded-xl border border-neutral-200/90 bg-white p-3 shadow-xs space-y-2 focus-within:border-neutral-900 transition-all"
        >
          {/* Full Emoji Picker Popup */}
          {showEmojiPicker && (
            <div ref={pickerRef}>
              <ChatEmojiPicker onSelect={addEmoji} />
            </div>
          )}

          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Type a message to ${name.split(" ")[0]}...`}
            className="w-full bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1 text-neutral-500">
              <button
                type="button"
                onClick={() => alert("Attachment dialog opened.")}
                aria-label="Attach File"
                className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                <Paperclip className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                aria-label="Add Emoji"
                className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                <Smile className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => alert("Voice recording initiated.")}
                aria-label="Voice Note"
                className="rounded-lg p-1.5 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="rounded-full bg-[#042430] hover:bg-black px-5 py-2 text-xs font-extrabold text-white shadow-xs transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <span>Send</span>
              <Send className="h-3.5 w-3.5 fill-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
