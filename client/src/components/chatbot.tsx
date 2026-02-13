import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Loader2, Send } from "lucide-react";
import { APPLY_URL } from "@/config/site";

const industryOptions = ["Construction", "Manufacturing", "Logistics", "Other"];

const cashFlowOptions = [
  { value: "invoice-gaps", label: "Waiting on invoices or progress draws" },
  { value: "equipment-upgrade", label: "Need to buy or upgrade equipment/fleet" },
  { value: "large-orders", label: "Covering costs to fulfill a big order" },
  { value: "working-capital", label: "Covering payroll, fuel, or materials this month" }
];

const faqOptions = [
  {
    question: "How fast can funding happen?",
    answer: "Most applications move quickly once documents are in. Timing depends on the product and lender match, but we prioritize speed from intake to term sheet."
  },
  {
    question: "What documents do you need?",
    answer: "Typically 3-6 months of bank statements, recent financials, and aging reports for receivables. Product-specific items like invoices or POs may be required."
  },
  {
    question: "Do you work with complex cash cycles?",
    answer: "Yes. Boreal specializes in construction, manufacturing, and logistics where retainage, inventory, and delayed payments are the norm."
  }
];

const HUMAN_CONTACT = "mailto:info@boreal.financial";

function recommendProduct(industry: string, issue: string) {
  if (issue === "invoice-gaps") return "Factoring";
  if (issue === "equipment-upgrade") return "Equipment Financing";
  if (issue === "large-orders") return "Purchase Order Financing";
  if (issue === "working-capital") return industry === "Construction" ? "Term Loan" : "Line of Credit";
  return "Line of Credit";
}

type ChatbotProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
  resetCount: number;
};

type ChatStep = "industry" | "cashflow" | "summary";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function Chatbot({ isOpen, onOpen, onClose, onReset, resetCount }: ChatbotProps) {
  const [step, setStep] = useState<ChatStep>("industry");
  const [industry, setIndustry] = useState<string | null>(null);
  const [issue, setIssue] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "I can answer FAQs, guide you to the right product, or connect you to a human. What industry are you in?"
    }
  ]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setStep("industry");
    setIndustry(null);
    setIssue(null);
    setSending(false);
    setMessages([
      {
        from: "bot",
        text: "I can answer FAQs, guide you to the right product, or connect you to a human. What industry are you in?"
      }
    ]);
  }, [resetCount, isOpen]);

  const recommendation = useMemo(() => {
    if (industry && issue) {
      return recommendProduct(industry, issue);
    }
    return null;
  }, [industry, issue]);

  const applyUrl = useMemo(() => APPLY_URL, []);

  const handleIndustrySelect = (choice: string) => {
    setIndustry(choice);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: choice },
      { from: "bot", text: "What's the cash-flow challenge you're solving?" }
    ]);
    setStep("cashflow");
  };

  const handleIssueSelect = (choice: string, label: string) => {
    setIssue(choice);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: label },
      { from: "bot", text: "Here is what fits best for you before you head to Apply." }
    ]);
    setStep("summary");
  };

  const handleFaqSelect = (question: string, answer: string) => {
    setMessages((prev) => [...prev, { from: "user", text: question }, { from: "bot", text: answer }]);
  };

  const handleConfirm = () => {
    if (!recommendation || !industry) return;
    setSending(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `I'll pass your ${industry} focus and ${recommendation} request into the application.`
        }
      ]);
      setSending(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="bg-background shadow-xl border border-border rounded-2xl w-96 max-w-[90vw] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-secondary text-secondary-foreground">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Boreal Concierge</p>
                <p className="text-xs text-secondary-foreground/70">FAQs, product guidance, and human support</p>
              </div>
            </div>
            <button onClick={onClose} className="text-secondary-foreground hover:text-secondary-foreground/70 transition-colors" aria-label="Close chatbot">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 max-h-[340px] overflow-y-auto bg-muted/40">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                    message.from === "bot" ? "bg-background text-foreground border border-border" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {step === "summary" && recommendation && industry && (
              <div className="space-y-2 text-sm">
                <div className="bg-background border border-border text-foreground p-3 rounded-xl">
                  <p className="font-semibold text-secondary">Recommendation before you apply</p>
                  <p className="mt-1 text-muted-foreground">
                    You mentioned {industry} and a cash-flow need around {cashFlowOptions.find((c) => c.value === issue)?.label?.toLowerCase()}.
                    We recommend <strong>{recommendation}</strong> for asset-heavy, cash-flow-driven work. We'll send this summary with you when you click Apply Now.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild>
                    <a href={applyUrl}>Apply Now</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={HUMAN_CONTACT}>Talk to a human</a>
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleConfirm} disabled={sending}>
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Preparing application
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Push details
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border p-4 space-y-3">
            {step === "industry" && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">Select your industry</p>
                <div className="flex flex-wrap gap-2">
                  {industryOptions.map((option) => (
                    <Button key={option} size="sm" variant={industry === option ? "default" : "outline"} onClick={() => handleIndustrySelect(option)}>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === "cashflow" && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">What's the cash-flow problem?</p>
                <div className="flex flex-col gap-2">
                  {cashFlowOptions.map((option) => (
                    <Button
                      key={option.value}
                      size="sm"
                      variant="outline"
                      onClick={() => handleIssueSelect(option.value, option.label)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Common questions</p>
              <div className="flex flex-col gap-2">
                {faqOptions.map((option) => (
                  <Button
                    key={option.question}
                    size="sm"
                    variant="ghost"
                    className="justify-start text-left"
                    onClick={() => handleFaqSelect(option.question, option.answer)}
                  >
                    {option.question}
                  </Button>
                ))}
              </div>
            </div>

            {step === "summary" && (
              <div className="text-xs text-muted-foreground flex items-center justify-between">
                <span>Need to start over?</span>
                <Button size="sm" variant="ghost" onClick={onReset}>
                  Reset conversation
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Button
        className={`fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg ring-2 ring-orange-200 hover:bg-orange-600 ${isOpen ? "hidden" : ""}`}
        onClick={onOpen}
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-5 h-5" />
        Talk to an expert
      </Button>
    </div>
  );
}
