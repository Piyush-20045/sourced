"use client";

import { useState } from "react";
import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import { conversations as initialConversations } from "@/data/message-data";
import { ConversationList } from "./_components/conversation-list";
import { ChatArea } from "./_components/chat-area";

export default function MessagePage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState("conv-1");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  const activeConversation =
    conversations.find((c) => c.id === selectedId) || conversations[0]!;

  const handleSelectConversation = (id: string) => {
    setSelectedId(id);
    setMobileView("chat");
  };

  const handleSendMessage = (conversationId: string, text: string) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      id: `m-${Date.now()}`,
      senderId: "user",
      text,
      timestamp: timeString,
      status: "read" as const,
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            lastMessage: text,
            timeAgo: "Just now",
            messages: [...conv.messages, newMessage],
          };
        }
        return conv;
      })
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      {/* Sticky top navbar */}
      <DashboardNav />

      {/* Full-Height Messaging Application Area (Fixes height space issue) */}
      <div className="flex-1 w-full overflow-hidden">
        <div className="h-[calc(100vh-65px)] w-full grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr_320px] overflow-hidden bg-white">
          {/* Column 1: Conversations List */}
          <div
            className={`min-h-0 h-full ${
              mobileView === "list" ? "block" : "hidden md:block"
            }`}
          >
            <ConversationList
              conversations={conversations}
              selectedId={selectedId}
              onSelectConversation={handleSelectConversation}
            />
          </div>

          {/* Column 2: Active Chat Feed Area */}
          <div
            className={`min-h-0 h-full ${
              mobileView === "chat" ? "block" : "hidden md:block"
            }`}
          >
            <ChatArea
              conversation={activeConversation}
              onSendMessage={handleSendMessage}
              onMobileBack={() => setMobileView("list")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
