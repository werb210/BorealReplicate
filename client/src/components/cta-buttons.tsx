import { Button } from "@/components/ui/button";
import { useChatbot } from "@/hooks/use-chatbot";
import { ReactNode } from "react";

const APPLY_URL = "https://client.boreal.financial";

type CTAProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
};

export function ApplyNowButton({ children, className, variant = "default", size = "lg" }: CTAProps) {
  return (
    <Button asChild className={className} variant={variant} size={size}>
      <a href={APPLY_URL}>{children ?? "Apply Now"}</a>
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
