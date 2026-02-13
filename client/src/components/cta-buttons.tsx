import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { APPLY_URL } from "@/config/site";
import { trackEvent } from "@/utils/analytics";

type CTAProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "cta";
  size?: "default" | "sm" | "lg";
};

export function ApplyNowButton({ children, className, variant = "cta", size = "lg" }: CTAProps) {
  return (
    <Button asChild className={className} variant={variant} size={size}>
      <a href={APPLY_URL} onClick={() => trackEvent("apply_clicked", { source: "homepage" })}>{children ?? "Apply Now"}</a>
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
