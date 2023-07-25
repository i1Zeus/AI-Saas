"use client";

import { useRouter } from "next/navigation";

import { ToolItem } from "@/components/tool-items";

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
        <ToolItem modal={false} />
      </div>
    </div>
  );
};
export default DashboardPage;
