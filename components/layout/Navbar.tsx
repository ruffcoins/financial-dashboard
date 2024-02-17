"use client";

import { routes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Search from "../shared/Search";
import UserProfileDropDown from "../UserProfileDropDown";
import Notification from "../Notification";
import { useSidebar } from "@/context/SidebarProvider";
import Logo from "../shared/Logo";

const DesktopNavbar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      <div className="border sticky top-0 z-10 bg-white h-20 flex items-center justify-between lg:px-8 px-4 shadow-sm w-full">
        <div className="flex items-center">
          <div className="flex items-center w-6 h-6 mr-4 cursor-pointer">
            <Logo />
          </div>

          <div className={`${sidebarOpen ? "ml-56" : "lg:ml-14 ml-2"}`}>
            {pathname === routes.DASHBOARD ? (
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Dashboard
              </p>
            ) : pathname === routes.TRANSACTIONS ? (
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Transactions
              </p>
            ) : pathname === routes.PAYMENTS ? (
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Payments
              </p>
            ) : pathname === routes.PLANNING ? (
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Planning
              </p>
            ) : (
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Settings
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center lg:space-x-12 space-x-2 ">
          <div className="hidden lg:flex">
            <Search />
          </div>
          <UserProfileDropDown />
          <Notification />
        </div>
      </div>
    </>
  );
};
export default DesktopNavbar;
