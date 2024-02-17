import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex overflow-x-hidden">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </main>
  );
};
export default layout;
