"use client";

import Link from "next/link";
import {
  ArrowLeft,
  FileCode,
  FileText,
  Image as ImageIcon,
  Table,
  X,
} from "lucide-react";
import { Conversation } from "@/data/message-data";

interface ProjectDetailsSidebarProps {
  conversation: Conversation;
  onClose: () => void;
}

export function ProjectDetailsSidebar({
  conversation,
  onClose,
}: ProjectDetailsSidebarProps) {
  const { name, role, avatar, initials, contract, sharedFiles } = conversation;

  return (
    <aside className="relative flex h-full flex-col overflow-y-auto bg-white p-5 pt-16 space-y-8 scrollbar-thin md:border-l md:border-neutral-200/80 md:p-6 md:pt-16">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close contact details"
        className="absolute left-4 top-4 grid size-9 place-items-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 md:left-auto md:right-4"
      >
        <ArrowLeft className="size-5 md:hidden" />
        <X className="hidden size-5 md:block" />
      </button>
      {/* Contact Profile Overview */}
      <div className="text-center space-y-3">
        <div className="relative mx-auto h-20 w-20">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md mx-auto"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-black text-2xl shadow-md mx-auto">
              {initials || name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-neutral-900">{name}</h2>
          <p className="text-xs font-bold text-neutral-500 mt-0.5">{role}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-2 pt-1">
          <Link
            href="/dashboard/freelancer"
            className="rounded-sm border border-neutral-200 bg-neutral-50/80 hover:bg-neutral-100 px-4 py-1.5 text-xs font-bold text-neutral-800 transition-all"
          >
            View Profile
          </Link>
          <Link
            href="/dashboard/freelancer"
            className="rounded-sm border border-neutral-200 bg-neutral-50/80 hover:bg-neutral-100 px-4 py-1.5 text-xs font-bold text-neutral-800 transition-all"
          >
            Portfolio
          </Link>
        </div>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Project Details */}
      <div className="space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          PROJECT DETAILS
        </p>

        <div className="space-y-3.5 text-xs">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              CURRENT CONTRACT
            </p>
            <p className="font-extrabold text-neutral-900 text-sm mt-0.5">
              {contract.title}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              BUDGET
            </p>
            <p className="font-extrabold text-neutral-900 text-sm mt-0.5">
              {contract.budget}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              TIMELINE
            </p>
            <p className="font-bold text-neutral-800 mt-0.5">
              {contract.timeline}
            </p>
          </div>
        </div>
      </div>

      <div className="h-px bg-neutral-100" />

      {/* Shared Files */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
            SHARED FILES ({sharedFiles.length * 4})
          </p>
        </div>

        <div className="space-y-2.5">
          {sharedFiles.map((file) => {
            let Icon = FileText;
            let iconBg = "bg-emerald-50 text-emerald-600";

            if (file.type === "image") {
              Icon = ImageIcon;
              iconBg = "bg-blue-50 text-blue-600";
            } else if (file.type === "excel") {
              Icon = Table;
              iconBg = "bg-rose-50 text-rose-600";
            } else if (file.type === "zip") {
              Icon = FileCode;
              iconBg = "bg-purple-50 text-purple-600";
            }

            return (
              <div
                key={file.id}
                className="flex items-center gap-3 rounded-xl p-2 transition-all hover:bg-neutral-50"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-neutral-900">
                    {file.name}
                  </p>
                  {file.size && (
                    <p className="text-[10px] text-neutral-400">{file.size}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => alert("Opening file manager...")}
          className="w-full text-center text-xs font-extrabold uppercase tracking-wider text-neutral-900 hover:underline pt-2"
        >
          View All Files
        </button>
      </div>
    </aside>
  );
}
