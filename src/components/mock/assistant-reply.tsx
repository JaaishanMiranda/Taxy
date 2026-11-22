import { TypingAnimation } from "@/components/ui/typing-animation";

/** Screen 7: the assistant's answer types itself out. */
export function AssistantReply() {
  return (
    <div className="mock-chat">
      <TypingAnimation
        paragraphs={[
          "Freelancers may need to organise records relating to income, invoices, business expenses and supporting documentation.",
          "The exact requirements depend on your circumstances and applicable tax rules.",
        ]}
      />
    </div>
  );
}
