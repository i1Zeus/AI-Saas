"use client";

import { useRouter } from "next/navigation";
import { tools } from "@/constants";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-center pb-10 text-muted-foreground text-sm md:text-lg">
          QuantaGen is a platform that allows you to generate images, videos,
          music, and code using the power of AI.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
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
      </div>
    </div>
  );
};
export default DashboardPage;
