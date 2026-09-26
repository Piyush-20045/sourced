"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Conversation } from "@/data/message-data";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelectConversation: (id: string) => void;
}

export function ConversationList({
  conversations,
  selectedId,
  onSelectConversation,
}: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<"all" | "unread" | "archived">("all");

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterCategory === "unread") {
      return matchesSearch && conv.unread;
    }
    if (filterCategory === "archived") {
      return matchesSearch && conv.category === "archived";
    }
    return matchesSearch && conv.category !== "archived";
  });

  return (
    <div className="flex h-full flex-col border-r border-neutral-200/80 bg-white">
      {/* Search Bar Header */}
      <div className="p-4 border-b border-neutral-100">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-neutral-200/80 bg-neutral-100/70 py-2.5 pl-10 pr-4 text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
          {(["all", "unread", "archived"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`rounded-full px-3.5 py-1 capitalize transition-all ${
                filterCategory === cat
                  ? "bg-[#042430] text-white shadow-2xs font-bold"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {cat === "all" ? "All" : cat === "unread" ? "Unread" : "Archived"}
            </button>
          ))}
        </div>
      </div>

      {/* Conversations Scrollable List */}
      <div className="flex-1 overflow-y-auto divide-y divide-neutral-100">
        {filteredConversations.map((conv) => {
          const isSelected = conv.id === selectedId;
          return (
            <button
              key={conv.id}
              type="button"
              onClick={() => onSelectConversation(conv.id)}
              className={`flex w-full items-start gap-3.5 p-4 text-left transition-all ${
                isSelected
                  ? "bg-neutral-100/90 border-l-4 border-[#042430]"
                  : "hover:bg-neutral-50/80"
              }`}
            >
              {/* Avatar & Status Indicator */}
              <div className="relative shrink-0">
                {conv.avatar ? (
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="h-11 w-11 rounded-full object-cover border border-neutral-200 shadow-2xs"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold text-sm shadow-2xs">
                    {conv.initials || conv.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                {conv.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>

              {/* Details & Preview */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="truncate font-extrabold text-neutral-900 text-sm">
                    {conv.name}
                  </h3>
                  <span className="shrink-0 text-[10px] font-semibold text-neutral-400">
                    {conv.timeAgo}
                  </span>
                </div>

                <p className="truncate text-xs font-bold text-neutral-700 mt-0.5">
                  {conv.role}
                </p>

                <p className="truncate text-xs text-neutral-500 mt-1 leading-relaxed">
                  {conv.lastMessage}
                </p>
              </div>
            </button>
          );
        })}

        {filteredConversations.length === 0 && (
          <div className="p-8 text-center text-xs text-neutral-400">
            No conversations found.
          </div>
        )}
      </div>
    </div>
  );
}
