import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Loader2, Send } from "lucide-react";

const industryOptions = ["Construction", "Manufacturing", "Logistics", "Other"];

const cashFlowOptions = [
  { value: "invoice-gaps", label: "Waiting on invoices or progress draws" },
  { value: "equipment-upgrade", label: "Need to buy or upgrade equipment/fleet" },
  { value: "large-orders", label: "Covering costs to fulfill a big order" },
  { value: "working-capital", label: "Covering payroll, fuel, or materials this month" }
];

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
      text: "I can help you figure out which financing fits your business. What industry are you in?"
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
        text: "I can help you figure out which financing fits your business. What industry are you in?"
      }
    ]);
  }, [resetCount, isOpen]);

  const recommendation = useMemo(() => {
    if (industry && issue) {
      return recommendProduct(industry, issue);
    }
    return null;
  }, [industry, issue]);

  const applyUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (industry) params.set("industry", industry);
    if (recommendation) params.set("product", recommendation);
    const query = params.toString();
    return query ? `https://staff.boreal.financial/?${query}` : "https://staff.boreal.financial/";
  }, [industry, recommendation]);

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
        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl w-96 max-w-[90vw] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Boreal Concierge</p>
                <p className="text-xs text-blue-100">Ask anything about financing</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-blue-100 transition-colors" aria-label="Close chatbot">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 max-h-[340px] overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                    message.from === "bot" ? "bg-white text-gray-800 border border-gray-200" : "bg-primary text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {step === "summary" && recommendation && industry && (
              <div className="space-y-2 text-sm">
                <div className="bg-white border border-blue-100 text-gray-800 p-3 rounded-xl">
                  <p className="font-semibold text-secondary">Recommendation before you apply</p>
                  <p className="mt-1 text-gray-700">
                    You mentioned {industry} and a cash-flow need around {cashFlowOptions.find((c) => c.value === issue)?.label?.toLowerCase()}.
                    We recommend <strong>{recommendation}</strong> for asset-heavy, cash-flow-driven work. We'll send this summary with you when you click Apply Now.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild>
                    <a href={applyUrl} target="_blank" rel="noopener noreferrer">Apply Now</a>
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

          <div className="border-t border-gray-200 p-4 space-y-3">
            {step === "industry" && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600">Select your industry</p>
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
                <p className="text-xs font-semibold text-gray-600">What's the cash-flow problem?</p>
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

            {step === "summary" && (
              <div className="text-xs text-gray-600 flex items-center justify-between">
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
        className={`fixed bottom-4 right-4 shadow-lg ${isOpen ? "hidden" : ""}`}
        onClick={onOpen}
      >
        Ask a Question
      </Button>
    </div>
  );
}
