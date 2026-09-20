import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  portfolioBackgroundOptions,
  portfolioIconOptions,
  portfolioWizardSteps,
  type PortfolioCategory,
} from "@/data/dashboard/freelancer-dashboard";

const categories: PortfolioCategory[] = [
  "UI/UX Design",
  "Branding",
  "UX Research",
  "Design Systems",
];

interface MetricDraft {
  value: string;
  label: string;
}

/** Multi-step Add Portfolio Project wizard (mock — no persistence yet). */
export function AddPortfolio({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);

  // step 1 — project info
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [role, setRole] = useState("");
  const [category, setCategory] = useState<PortfolioCategory | "">("");
  const [year, setYear] = useState("2026");
  const [duration, setDuration] = useState("");
  const [icon, setIcon] = useState(portfolioIconOptions[6]);
  const [background, setBackground] = useState(
    portfolioBackgroundOptions[1].visualClass,
  );

  // step 2 — details & outcomes
  const [summary, setSummary] = useState("");
  const [overview, setOverview] = useState("");
  const [problem, setProblem] = useState("");
  const [outcome, setOutcome] = useState("");
  const [metrics, setMetrics] = useState<MetricDraft[]>([
    { value: "", label: "" },
  ]);

  // step 3 — tools & links
  const [tools, setTools] = useState<string[]>([]);
  const [toolDraft, setToolDraft] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagDraft, setTagDraft] = useState("");
  const [liveLink, setLiveLink] = useState("");

  const isLast = step === portfolioWizardSteps.length - 1;

  function next() {
    if (isLast) return;
    setStep((s) => s + 1);
  }

  function finish(kind: "published" | "draft") {
    toast.success(
      kind === "published"
        ? `"${title || "Untitled project"}" published to your portfolio.`
        : `"${title || "Untitled project"}" saved as a draft.`,
    );
    onClose();
  }

  function addChip(
    value: string,
    list: string[],
    setList: (v: string[]) => void,
    clear: () => void,
  ) {
    const v = value.trim();
    if (!v || list.includes(v)) return;
    setList([...list, v]);
    clear();
  }

  return (
    <section>
      {/* heading */}
      <div className="flex items-start gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onClose}
          aria-label="Back to portfolio"
        >
          <ArrowLeft />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Add Portfolio Project</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Showcase your best work to attract the right clients.
          </p>
        </div>
      </div>

      {/* stepper */}
      <ol className="mt-6 flex flex-wrap items-center gap-y-3">
        {portfolioWizardSteps.map((label, i) => (
          <li key={label} className="flex items-center">
            <button
              type="button"
              onClick={() => setStep(i)}
              className="flex items-center gap-2"
              aria-current={step === i ? "step" : undefined}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${
                  i <= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-xs font-medium sm:text-sm ${
                  i === step ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </button>
            {i < portfolioWizardSteps.length - 1 && (
              <span
                className="mx-3 h-px w-6 bg-border sm:w-10"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>

      {/* step panels */}
      <div className="mt-6 rounded-lg border border-border bg-card p-5 sm:p-7">
        {step === 0 && (
          <div>
            <h3 className="font-bold">Tell us about the project</h3>

            <div className="mt-5 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="ap-title">
                  Project title{" "}
                  <span className="text-muted-foreground">required</span>
                </Label>
                <Input
                  id="ap-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Mobile App Redesign for WealthBase"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ap-client">
                    Client / Company{" "}
                    <span className="text-muted-foreground">required</span>
                  </Label>
                  <Input
                    id="ap-client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="e.g. WealthBase"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-role">Your role</Label>
                  <Input
                    id="ap-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Lead Product Designer"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>
                    Category{" "}
                    <span className="text-muted-foreground">required</span>
                  </Label>
                  <Select
                    value={category}
                    onValueChange={(v) => setCategory(v as PortfolioCategory)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-year">Year</Label>
                  <Input
                    id="ap-year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2026"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-duration">Duration</Label>
                  <Input
                    id="ap-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="4 weeks"
                  />
                </div>
              </div>

              {/* cover thumbnail */}
              <div>
                <Label>Cover thumbnail</Label>
                <div className="mt-3 grid gap-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-xs text-muted-foreground">Icon</p>
                    <div className="mt-2 grid w-fit grid-cols-4 gap-2 sm:grid-cols-6">
                      {portfolioIconOptions.map((symbol) => (
                        <button
                          key={symbol}
                          type="button"
                          onClick={() => setIcon(symbol)}
                          aria-label={`Choose icon ${symbol}`}
                          aria-pressed={icon === symbol}
                          className={`grid h-10 w-10 place-items-center rounded-lg border text-lg ${
                            icon === symbol
                              ? "border-primary bg-primary/10"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          {symbol}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Background</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {portfolioBackgroundOptions.map((option) => (
                        <button
                          key={option.visualClass}
                          type="button"
                          onClick={() => setBackground(option.visualClass)}
                          aria-label="Choose background color"
                          aria-pressed={background === option.visualClass}
                          className={`h-8 w-8 rounded-md border ${option.swatchClass} ${
                            background === option.visualClass
                              ? "ring-2 ring-primary ring-offset-2"
                              : "border-border"
                          }`}
                        />
                      ))}
                    </div>
                    {/* live preview */}
                    <div
                      className={`mt-4 grid h-24 w-36 place-items-center rounded-lg border border-border text-4xl ${background}`}
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="font-bold">Details &amp; outcomes</h3>

            <div className="mt-5 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="ap-summary">Short summary</Label>
                <Textarea
                  id="ap-summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="One or two sentences shown on the portfolio card."
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ap-overview">Overview</Label>
                <Textarea
                  id="ap-overview"
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  placeholder="What was the project about?"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ap-problem">The problem</Label>
                <Textarea
                  id="ap-problem"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="What challenge did the client face?"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ap-outcome">Outcome</Label>
                <Textarea
                  id="ap-outcome"
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                  placeholder="What measurable result did you deliver?"
                  rows={3}
                />
              </div>

              {/* impact metrics */}
              <div>
                <Label>Impact metrics</Label>
                <div className="mt-2 space-y-2">
                  {metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input
                        value={metric.value}
                        onChange={(e) =>
                          setMetrics(
                            metrics.map((m, j) =>
                              j === i ? { ...m, value: e.target.value } : m,
                            ),
                          )
                        }
                        placeholder="e.g. −40%"
                        className="w-28"
                        aria-label={`Metric ${i + 1} value`}
                      />
                      <Input
                        value={metric.label}
                        onChange={(e) =>
                          setMetrics(
                            metrics.map((m, j) =>
                              j === i ? { ...m, label: e.target.value } : m,
                            ),
                          )
                        }
                        placeholder="e.g. Drop-off reduction"
                        className="min-w-0 flex-1"
                        aria-label={`Metric ${i + 1} label`}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setMetrics(metrics.filter((_, j) => j !== i))
                        }
                        disabled={metrics.length === 1}
                        aria-label={`Remove metric ${i + 1}`}
                      >
                        <X />
                      </Button>
                    </div>
                  ))}
                </div>
                {metrics.length < 4 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() =>
                      setMetrics([...metrics, { value: "", label: "" }])
                    }
                  >
                    <Plus />
                    Add metric
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-bold">Tools &amp; links</h3>

            <div className="mt-5 space-y-5">
              <ChipInput
                label="Tools used"
                placeholder="e.g. Figma — press Enter to add"
                items={tools}
                draft={toolDraft}
                onDraft={setToolDraft}
                onAdd={() =>
                  addChip(toolDraft, tools, setTools, () => setToolDraft(""))
                }
                onRemove={(t) => setTools(tools.filter((x) => x !== t))}
              />
              <ChipInput
                label="Tags"
                placeholder="e.g. Prototyping — press Enter to add"
                items={tags}
                draft={tagDraft}
                onDraft={setTagDraft}
                onAdd={() =>
                  addChip(tagDraft, tags, setTags, () => setTagDraft(""))
                }
                onRemove={(t) => setTags(tags.filter((x) => x !== t))}
              />
              <div className="space-y-2">
                <Label htmlFor="ap-link">Live project link</Label>
                <Input
                  id="ap-link"
                  type="url"
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  placeholder="https://"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-bold">Review &amp; publish</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Check everything looks right before adding it to your portfolio.
            </p>

            {/* preview card */}
            <div className="mt-5 overflow-hidden rounded-lg border border-border">
              <div
                className={`grid h-32 place-items-center text-4xl ${background}`}
                aria-hidden="true"
              >
                {icon}
              </div>
              <div className="p-4">
                <h4 className="font-bold">{title || "Untitled project"}</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {[client || "Client", category || "Category"].join(" · ")}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {summary || "No summary added yet."}
                </p>
                {(role || year || duration) && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    {[role, duration, year].filter(Boolean).join(" · ")}
                  </p>
                )}
                {metrics.some((m) => m.value && m.label) && (
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {metrics
                      .filter((m) => m.value && m.label)
                      .map((m) => (
                        <div
                          key={m.label}
                          className="rounded-md border border-border p-2 text-center"
                        >
                          <p className="text-sm font-bold text-primary">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {m.label}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
                {tools.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                {tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-muted/50 px-2 py-1 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {liveLink && (
                  <p className="mt-3 break-all text-xs text-primary">
                    {liveLink}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <div className="flex gap-2">
          {step > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              <ArrowLeft />
              Back
            </Button>
          )}
          {isLast ? (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => finish("draft")}
              >
                Save as Draft
              </Button>
              <Button type="button" onClick={() => finish("published")}>
                Publish Project
              </Button>
            </>
          ) : (
            <Button type="button" onClick={next}>
              Continue
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

/** Label + input that turns entries into removable chips. */
function ChipInput({
  label,
  placeholder,
  items,
  draft,
  onDraft,
  onAdd,
  onRemove,
}: {
  label: string;
  placeholder: string;
  items: string[];
  draft: string;
  onDraft: (v: string) => void;
  onAdd: () => void;
  onRemove: (item: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input
          value={draft}
          onChange={(e) => onDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd();
            }
          }}
          placeholder={placeholder}
          className="min-w-0 flex-1"
        />
        <Button type="button" variant="outline" onClick={onAdd}>
          <Plus />
          Add
        </Button>
      </div>
      {items.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs"
            >
              {item}
              <button
                type="button"
                onClick={() => onRemove(item)}
                aria-label={`Remove ${item}`}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
