"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const MobileSidebar = () => {
  return (
    <Button size="icon" variant="ghost" className="md:hidden">
      <Menu className="w-6 h-6" />
    </Button>
  );
};

export default MobileSidebar;
