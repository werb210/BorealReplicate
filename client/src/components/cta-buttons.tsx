import { Button } from "@/components/ui/button";
import { useChatbot } from "@/hooks/use-chatbot";
import { ReactNode } from "react";
import { trackEvent } from "@/analytics/ga";

const APPLY_URL = "/apply/step-1";

type CTAProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "cta";
  size?: "default" | "sm" | "lg";
};

export function ApplyNowButton({ children, className, variant = "cta", size = "lg" }: CTAProps) {
  return (
    <Button asChild className={className} variant={variant} size={size}>
      <a href={APPLY_URL} onClick={() => trackEvent("apply_click", { event_category: "conversion" })}>{children ?? "Apply Now"}</a>
    </Button>
  );
}

export function AskQuestionButton({ children, className, variant = "outline", size = "lg" }: CTAProps) {
  const { openChatbot, resetChatbot } = useChatbot();

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => {
        resetChatbot();
        openChatbot();
      }}
    >
      {children ?? "Talk to an expert"}
    </Button>
  );
}
