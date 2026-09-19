import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  portfolioWizardSteps,
  type PortfolioCategory,
} from "@/data/dashboard/freelancer-dashboard";

const categories: PortfolioCategory[] = [
  "UI/UX Design",
  "Branding",
  "UX Research",
  "Design Systems",
];
/** Multi-step Add Portfolio Project wizard (mock — no persistence yet). */
export function AddPortfolio({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);

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

    </section>
  );
}
