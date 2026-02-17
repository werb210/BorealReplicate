import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/config/site";
import { trackEvent } from "@/utils/analytics";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

type CTAProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "cta";
  size?: "default" | "sm" | "lg";
};

export function ApplyNowButton({ children, className, variant = "cta", size = "lg" }: CTAProps) {
  const token = getReadinessSessionToken();
  const href = buildApplyUrl(APPLY_URL, token);

  return (
    <Button asChild className={className} variant={variant} size={size}>
      <a href={href} onClick={() => trackEvent("apply_clicked", { source: "homepage", readinessSession: token ? "present" : "none" })}>
        {children ?? (token ? "Continue Application" : "Start Capital Review")}
      </a>
    </Button>
  );
}

export function AskQuestionButton({ children, className, variant = "outline", size = "lg" }: CTAProps) {
  return (
    <Button asChild className={className} variant={variant} size={size}>
      <a href="/contact">{children ?? "Speak With Advisor"}</a>
    </Button>
  );
}
