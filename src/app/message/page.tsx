"use client";

import { useState } from "react";
import { DashboardNav } from "../dashboard/_components/dashboard-nav";
import { conversations as initialConversations } from "@/data/message-data";
import { ConversationList } from "./_components/conversation-list";
import { ChatArea } from "./_components/chat-area";
import { ProjectDetailsSidebar } from "./_components/project-details-sidebar";

export default function MessagePage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState("conv-1");
  const [mobileView, setMobileView] = useState<
    "list" | "chat" | "details"
  >("list");
  const [showDetails, setShowDetails] = useState(false);

  const activeConversation =
    conversations.find((c) => c.id === selectedId) || conversations[0]!;

  const handleSelectConversation = (id: string) => {
    setSelectedId(id);
    setShowDetails(false);
    setMobileView("chat");
  };

  const handleToggleDetails = () => {
    if (showDetails) {
      setShowDetails(false);
      setMobileView("chat");
      return;
    }

    setShowDetails(true);
    setMobileView("details");
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
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
      }),
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f8f9fa] font-sans text-foreground flex flex-col justify-between">
      {/* Sticky top navbar */}
      <DashboardNav />

      {/* Full-Height Messaging Application Area (Fixes height space issue) */}
      <div className="flex-1 w-full overflow-hidden">
        <div
          className={`relative grid h-[calc(100vh-65px)] w-full grid-cols-1 overflow-hidden bg-white md:grid-cols-[300px_minmax(0,1fr)] ${
            showDetails
              ? "lg:grid-cols-[320px_minmax(0,1fr)_320px]"
              : "lg:grid-cols-[320px_minmax(0,1fr)]"
          }`}
        >
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
              onToggleDetails={handleToggleDetails}
              detailsOpen={showDetails}
            />
          </div>

          {/* Contact details: mobile pane, tablet drawer, desktop column */}
          {showDetails && (
            <div
              className={`min-h-0 h-full bg-white ${
                mobileView === "details" ? "block" : "hidden"
              } md:absolute md:inset-y-0 md:right-0 md:z-30 md:block md:w-80 md:shadow-2xl lg:relative lg:inset-auto lg:z-auto lg:w-auto lg:shadow-none`}
            >
              <ProjectDetailsSidebar
                conversation={activeConversation}
                onClose={handleCloseDetails}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
