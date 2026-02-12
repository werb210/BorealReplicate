import { Button } from "@/components/ui/button";
import { useChatbot } from "@/hooks/use-chatbot";
import { ReactNode } from "react";
import { trackEvent } from "@/utils/analytics";

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
      <a href={APPLY_URL} onClick={() => trackEvent("apply_clicked", { source: "homepage" })}>{children ?? "Apply Now"}</a>
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
        trackEvent("chat_opened", { source: "cta_button" });
      }}
    >
      {children ?? "Talk to an expert"}
    </Button>
  );
}
