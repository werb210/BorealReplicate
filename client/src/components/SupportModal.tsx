import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { APPLY_URL } from "@/config/site";

type SupportModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const quickActions = [
  { label: "Start Application", href: APPLY_URL },
  { label: "Upload Documents", href: APPLY_URL },
  { label: "Book Meeting", href: "/how-it-works" },
  { label: "Contact Us", href: "/contact" },
];

export function SupportModal({ open, onOpenChange }: SupportModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" aria-describedby="support-modal-description">
        <DialogHeader>
          <DialogTitle className="text-3xl">Get personalized help</DialogTitle>
          <DialogDescription id="support-modal-description">
            Choose an action and our team will guide you to the right next step.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map((action) => (
            <Button key={action.label} asChild variant="outline" className="h-auto justify-start py-4 text-left">
              <a href={action.href} aria-label={action.label}>
                {action.label}
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
