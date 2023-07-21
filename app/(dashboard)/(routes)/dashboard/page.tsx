"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";

const tools = [
  {
    label: "Conversion",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversion",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

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
