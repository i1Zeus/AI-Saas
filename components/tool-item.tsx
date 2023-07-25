import { tools as useTools } from "@/constants";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const ToolItem = () => {
  const router = useRouter();
  const tools = useTools;
  return (
    <>
      {tools.map((tool) => (
        <Card
          onClick={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/54 flex items-center justify-between hover:drop-shadow-[-3px_3px_1px_rgb(168_178_188/_0.3)] transition cursor-pointer group"
        >
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-6 h-6", tool.color)} />
            </div>
            <div className="font-semibold">
              {tool.label.charAt(0).toUpperCase() + tool.label.slice(1)}
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-black/54 mr-2 group-hover:mr-0" />
        </Card>
      ))}
    </>
  );
};
