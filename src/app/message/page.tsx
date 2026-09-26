"use client";
import { useState } from "react";
import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import { conversations as initialConversations } from "@/data/message-data";
import { ConversationList } from "./_components/conversation-list";

export default function MessagePage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState("conv-1");

  const activeConversation =
    conversations.find((c) => c.id === selectedId) || conversations[0]!;

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
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      <div className="flex flex-col flex-1">
        {/* Sticky top navbar */}
        <DashboardNav />

        {/* 3-Column Message Application Container */}
        <div className="mx-auto w-full flex-1 px-0">
          <div className="grid h-[calc(100vh-100px)] min-h-160 w-full grid-cols-1 overflow-hidden bg-white shadow-xl md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr_320px]">
            {/* Column 1: Conversations Sidebar */}
            <div className="min-h-0">
              <ConversationList
                conversations={conversations}
                selectedId={selectedId}
                onSelectConversation={setSelectedId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
