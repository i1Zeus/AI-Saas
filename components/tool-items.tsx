"use client";

import { tools as useTools } from "@/constants";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ToolItemsProps {
  modal: boolean;
}

export const ToolItems = ({ modal }: ToolItemsProps) => {
  const router = useRouter();
  const tools = useTools;
  const redirect = (href: string) => {
    if (modal) return;
    router.push(href);
  };
  return (
    <>
      {tools.map((tool) => (
        <Card
          onClick={() => redirect(tool.href)}
          key={tool.href}
          className={cn(
            "p-4 border-black/54 flex items-center justify-between group",
            modal
              ? "cursor-auto"
              : "hover:drop-shadow-[-5px_5px_3px_rgba(0,0,0,0.05)] transition cursor-pointer"
          )}
        >
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-6 h-6", tool.color)} />
            </div>
            <div className="font-semibold">
              {tool.label.charAt(0).toUpperCase() + tool.label.slice(1)}
            </div>
          </div>
          {modal ? (
            <Check className="w-6 h-6 text-primary mr-2" />
          ) : (
            <ArrowRight className="w-6 h-6 text-black/54 mr-2 group-hover:mr-0" />
          )}
        </Card>
      ))}
    </>
  );
};
