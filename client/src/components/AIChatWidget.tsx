import { ChatWidget } from "@/components/ChatWidget";

type Props = {
  context: "website" | "client";
};

export default function AIChatWidget(_: Props) {
  return <ChatWidget />;
}
