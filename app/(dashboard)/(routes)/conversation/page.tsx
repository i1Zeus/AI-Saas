import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

const Conversation = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        sub="Our most advanced chat system yet."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default Conversation;
