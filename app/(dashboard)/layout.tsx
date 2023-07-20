import Navbar from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden bg-gray-900 h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 md:z-[80] ">
        <div>Side Bar</div>
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
