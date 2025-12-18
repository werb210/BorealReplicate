import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { MessageCircle, Workflow, ClipboardCheck, Send, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Start with Ask a Question",
    description: "Open the chatbot from any page. Tell us whether you are in construction, manufacturing, or logistics.",
    icon: MessageCircle
  },
  {
    title: "Match the cash-flow gap",
    description: "Share if you need predictable funds, flexible working capital, invoice advances, PO support, or equipment financing.",
    icon: Workflow
  },
  {
    title: "Apply with details attached",
    description: "The chatbot summarizes your industry and recommendation, then sends you into the existing Apply Now flow.",
    icon: Send
  }
];

const coverage = [
  {
    title: "Supported products",
    items: ["Term Loans", "Lines of Credit", "Factoring", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    title: "Supported industries",
    items: ["Construction", "Manufacturing", "Logistics"]
  },
  {
    title: "Why two actions",
    items: ["Ask a Question opens the chatbot for guidance", "Apply Now takes you directly to the application", "No extra forms or detours"]
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary">How It Works</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Chat, confirm, and apply in one flow</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Boreal chatbot is available on every page. Ask a Question to open it, confirm the recommendation, then Apply Now to submit through the existing application path without repeating answers.
              </p>
              <div className="flex flex-wrap gap-3">
                <ApplyNowButton />
                <AskQuestionButton variant="outline" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg p-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Two actions everywhere: Ask a Question for guidance, Apply Now to start the application.</span>
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Integrated path</p>
                    <p className="text-lg font-semibold text-secondary">From chatbot to application</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>The chatbot asks your industry and cash-flow need.</li>
                  <li>It recommends Term Loans, Lines of Credit, Factoring, Purchase Order Financing, or Equipment Financing.</li>
                  <li>Apply Now carries those details into our existing application flow.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Three clear steps</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">What happens when you engage</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                No extra forms, no dead ends—just the two actions you need. The chatbot keeps your details as you move into the application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <Card key={step.title} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <step.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Coverage</p>
              <h2 className="text-3xl font-bold text-secondary">What you can explore with the chatbot</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From construction retainage to manufacturing POs and logistics fuel cycles, the chatbot maps you to the right funding approach before you click Apply Now.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coverage.map((block) => (
                <Card key={block.title} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-secondary">{block.title}</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
