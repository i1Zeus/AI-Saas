import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button size="icon" variant="ghost" className="md:hidden">
        <MenuIcon className="w-6 h-6" />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
