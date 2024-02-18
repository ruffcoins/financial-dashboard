"use client";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import SidebarProvider, { useSidebar } from "@/context/SidebarProvider";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Dashboard | SmilePay",
  description:
    "Provides a comprehensive view of the user's financial overview including balance, income, savings, expenses, account charts, transaction summaries, and more, on the SmilePay platform.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <main className="relative">
      <SidebarProvider>
        <div className="lg:flex">
          {sidebarOpen && (
            <div
              className="fixed right-0 top-0 h-full w-full bg-black bg-opacity-10 backdrop-blur-md backdrop-filter lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <div className="lg:p-8 p-4 lg:ml-24">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};
export default Layout;
