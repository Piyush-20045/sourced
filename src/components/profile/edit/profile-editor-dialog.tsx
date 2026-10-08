"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  Camera,
  GraduationCap,
  ImagePlus,
  Plus,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type ProfileEditorSection =
  | "basic"
  | "about"
  | "skills"
  | "education";

export interface ProfileEditorEducation {
  school: string;
  qualification: string;
  period: string;
}

export interface ProfileEditorValue {
  name: string;
  headline: string;
  location: string;
  avatar?: string;
  coverImage: string;
  about?: string;
  skills?: string[];
  education?: ProfileEditorEducation[];
}

interface ProfileEditorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: ProfileEditorValue;
  onSave: (value: ProfileEditorValue) => void;
  initialSection?: ProfileEditorSection;
  enabledSections?: ProfileEditorSection[];
  identityLabel?: string;
}

const sectionLabels: Record<ProfileEditorSection, string> = {
  basic: "Basic info",
  about: "About",
  skills: "Skills",
  education: "Education",
};

const defaultSections: ProfileEditorSection[] = [
  "basic",
  "about",
  "skills",
  "education",
];

function cloneValue(value: ProfileEditorValue): ProfileEditorValue {
  return {
    ...value,
    skills: value.skills ? [...value.skills] : undefined,
    education: value.education?.map((item) => ({ ...item })),
  };
}

function readImage(
  file: File | undefined,
  onLoad: (image: string) => void,
) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result === "string") onLoad(reader.result);
  };
  reader.readAsDataURL(file);
}

export function ProfileEditorDialog({
  open,
  ...contentProps
}: ProfileEditorDialogProps) {
  if (!open) return null;

  return <ProfileEditorDialogContent {...contentProps} />;
}

function ProfileEditorDialogContent({
  onOpenChange,
  value,
  onSave,
  initialSection = "basic",
  enabledSections = defaultSections,
  identityLabel = "profile",
}: Omit<ProfileEditorDialogProps, "open">) {
  const [draft, setDraft] = useState(() => cloneValue(value));
  const [section, setSection] =
    useState<ProfileEditorSection>(() =>
      enabledSections.includes(initialSection)
        ? initialSection
        : enabledSections[0],
    );
  const [skillInput, setSkillInput] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const coverInputId = useId();
  const avatarInputId = useId();

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], label[tabindex="0"]',
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onOpenChange]);

  const addSkill = () => {
    const nextSkill = skillInput.trim();
    if (!nextSkill || draft.skills?.includes(nextSkill)) return;

    setDraft((current) => ({
      ...current,
      skills: [...(current.skills ?? []), nextSkill],
    }));
    setSkillInput("");
  };

  const updateEducation = (
    index: number,
    key: keyof ProfileEditorEducation,
    fieldValue: string,
  ) => {
    setDraft((current) => ({
      ...current,
      education: (current.education ?? []).map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: fieldValue } : item,
      ),
    }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({
      ...draft,
      name: draft.name.trim(),
      headline: draft.headline.trim(),
      location: draft.location.trim(),
      about: draft.about?.trim(),
      skills: draft.skills?.filter(Boolean),
      education: draft.education?.filter(
        (item) => item.school || item.qualification || item.period,
      ),
    });
    onOpenChange(false);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-black/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-xl border border-border bg-background shadow-2xl sm:rounded-lg"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {identityLabel}
            </p>
            <h2 id={titleId} className="mt-1 text-xl font-bold text-primary">
              Edit profile
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => onOpenChange(false)}
            className="grid size-9 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close profile editor"
          >
            <X className="size-4" />
          </button>
        </div>

        {enabledSections.length > 1 && (
          <div className="scrollbar-none overflow-x-auto border-b border-border px-5 sm:px-6">
            <div className="flex min-w-max gap-5">
              {enabledSections.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSection(item)}
                  className={`border-b-2 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    section === item
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {sectionLabels[item]}
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col">
          <div className="scrollbar-none overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            {section === "basic" && (
              <div className="space-y-6">
                <div>
                  <div className="relative aspect-4/1 overflow-hidden rounded-lg border border-border bg-muted">
                    <Image
                      src={draft.coverImage}
                      alt="Cover preview"
                      fill
                      unoptimized={draft.coverImage.startsWith("data:")}
                      sizes="640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    <label
                      htmlFor={coverInputId}
                      className="absolute bottom-3 right-3 inline-flex h-9 cursor-pointer items-center gap-2 rounded-md bg-background px-3 text-xs font-semibold text-primary shadow-sm transition-colors hover:bg-muted"
                    >
                      <ImagePlus className="size-4" /> Change cover
                    </label>
                    <input
                      id={coverInputId}
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="sr-only"
                      onChange={(event) =>
                        readImage(event.target.files?.[0], (coverImage) =>
                          setDraft((current) => ({ ...current, coverImage })),
                        )
                      }
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Recommended: 1600 × 400 px, JPG, PNG, or WebP.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    {draft.avatar ? (
                      <Image
                        src={draft.avatar}
                        alt="Profile preview"
                        width={72}
                        height={72}
                        unoptimized={draft.avatar.startsWith("data:")}
                        className="size-18 rounded-full border-2 border-background object-cover ring-1 ring-border"
                      />
                    ) : (
                      <span className="grid size-18 place-items-center rounded-full bg-muted text-muted-foreground ring-1 ring-border">
                        <UserRound className="size-7" />
                      </span>
                    )}
                    <label
                      htmlFor={avatarInputId}
                      className="absolute -bottom-1 -right-1 grid size-8 cursor-pointer place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground"
                      aria-label="Change profile photo"
                    >
                      <Camera className="size-3.5" />
                    </label>
                    <input
                      id={avatarInputId}
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="sr-only"
                      onChange={(event) =>
                        readImage(event.target.files?.[0], (avatar) =>
                          setDraft((current) => ({ ...current, avatar })),
                        )
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Profile photo or logo
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Use a square image of at least 400 × 400 px.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="profile-name">Name</Label>
                    <Input
                      id="profile-name"
                      value={draft.name}
                      onChange={(event) =>
                        setDraft((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      className="h-10 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-headline">Headline</Label>
                    <Input
                      id="profile-headline"
                      value={draft.headline}
                      onChange={(event) =>
                        setDraft((current) => ({
                          ...current,
                          headline: event.target.value,
                        }))
                      }
                      className="h-10 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-location">Location</Label>
                    <Input
                      id="profile-location"
                      value={draft.location}
                      onChange={(event) =>
                        setDraft((current) => ({
                          ...current,
                          location: event.target.value,
                        }))
                      }
                      className="h-10 rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {section === "about" && (
              <div className="space-y-2">
                <Label htmlFor="profile-about">About</Label>
                <Textarea
                  id="profile-about"
                  value={draft.about ?? ""}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      about: event.target.value,
                    }))
                  }
                  className="min-h-48 resize-y rounded-md leading-6"
                  maxLength={1200}
                  placeholder="Describe your experience, strengths, and the work you want to be known for."
                />
                <p className="text-right text-xs text-muted-foreground">
                  {(draft.about ?? "").length}/1200
                </p>
              </div>
            )}

            {section === "skills" && (
              <div>
                <Label htmlFor="profile-skill">Skills</Label>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Add the skills clients should associate with your work.
                </p>
                <div className="mt-4 flex gap-2">
                  <Input
                    id="profile-skill"
                    value={skillInput}
                    onChange={(event) => setSkillInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addSkill();
                      }
                    }}
                    className="h-10 rounded-md"
                    placeholder="e.g. Product Design"
                  />
                  <Button
                    type="button"
                    onClick={addSkill}
                    className="h-10 rounded-md px-4"
                  >
                    <Plus className="size-4" /> Add
                  </Button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(draft.skills ?? []).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/60 py-1.5 pl-3 pr-1.5 text-xs font-medium"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() =>
                          setDraft((current) => ({
                            ...current,
                            skills: current.skills?.filter(
                              (item) => item !== skill,
                            ),
                          }))
                        }
                        className="grid size-6 place-items-center rounded text-muted-foreground hover:bg-background hover:text-foreground"
                        aria-label={`Remove ${skill}`}
                      >
                        <X className="size-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {section === "education" && (
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Label>Education</Label>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Add qualifications that support your professional profile.
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        education: [
                          ...(current.education ?? []),
                          { school: "", qualification: "", period: "" },
                        ],
                      }))
                    }
                    className="h-9 rounded-md"
                  >
                    <Plus className="size-4" /> Add
                  </Button>
                </div>

                <div className="mt-5 space-y-4">
                  {(draft.education ?? []).map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <GraduationCap className="size-4" /> Education {index + 1}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setDraft((current) => ({
                              ...current,
                              education: current.education?.filter(
                                (_, itemIndex) => itemIndex !== index,
                              ),
                            }))
                          }
                          className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                          aria-label={`Remove education ${index + 1}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor={`qualification-${index}`}>
                            Qualification
                          </Label>
                          <Input
                            id={`qualification-${index}`}
                            value={item.qualification}
                            onChange={(event) =>
                              updateEducation(
                                index,
                                "qualification",
                                event.target.value,
                              )
                            }
                            className="h-10 rounded-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`school-${index}`}>School</Label>
                          <Input
                            id={`school-${index}`}
                            value={item.school}
                            onChange={(event) =>
                              updateEducation(
                                index,
                                "school",
                                event.target.value,
                              )
                            }
                            className="h-10 rounded-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`period-${index}`}>Period</Label>
                          <Input
                            id={`period-${index}`}
                            value={item.period}
                            onChange={(event) =>
                              updateEducation(
                                index,
                                "period",
                                event.target.value,
                              )
                            }
                            className="h-10 rounded-md"
                            placeholder="2022 – 2026"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {(draft.education ?? []).length === 0 && (
                    <div className="rounded-lg border border-dashed border-border px-5 py-10 text-center text-sm text-muted-foreground">
                      No education has been added yet.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-border bg-muted/20 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-10 rounded-md px-5"
            >
              Cancel
            </Button>
            <Button type="submit" className="h-10 rounded-md px-5">
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
