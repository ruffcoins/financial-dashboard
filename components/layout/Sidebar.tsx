"use client";

import Link from "next/link";
import ReportBug from "../dashboard/ReportBug";
import {
  sidebarPrimaryMenu,
  sidebarSecondaryMenu,
} from "@/constants/sidebarMenu";
import { SidebarMenuItem } from "@/types/sidebarMenuItem";
import { usePathname } from "next/navigation";
import {
  Squares2X2Icon,
  WalletIcon,
  NewspaperIcon,
  CogIcon,
  ClipboardIcon,
  ArrowRightStartOnRectangleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { routes } from "@/constants/routes";
import { useSidebar } from "@/context/SidebarProvider";

const Sidebar = () => {
  const { sidebarOpen } = useSidebar();

  const pathname = usePathname();

  return (
    <aside
      className={`${
        sidebarOpen ? "block" : "hidden lg:w-24"
      } border fixed top-0 left-0 bottom-0 lg:block  bg-white h-screen overflow-hidden py-8 space-y-8 shadow-sm flex flex-col justify-between`}
    >
      <div className="pt-2">
        <div className="capitalize flex flex-col mt-10">
          {sidebarPrimaryMenu.map((item: SidebarMenuItem, index) => (
            <Link
              title={item.name}
              href={item.href}
              key={index}
              className={`${
                pathname === item.href
                  ? "bg-primary-100 text-primary-900 border-r-4 border-r-primary-900"
                  : "text-gray-500"
              } ${
                sidebarOpen ? "px-8" : "justify-center"
              } py-4 flex items-center hover:bg-primary-100`}
            >
              {item.href === routes.DASHBOARD ? (
                <Squares2X2Icon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              ) : item.href === routes.TRANSACTIONS ? (
                <NewspaperIcon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              ) : item.href === routes.PAYMENTS ? (
                <WalletIcon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              ) : item.href === routes.PLANNING ? (
                <ClipboardIcon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              ) : (
                <CogIcon className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`} />
              )}

              {sidebarOpen && <span className="text-xl">{item.name}</span>}
            </Link>
          ))}
        </div>

        <hr className="w-[80%] mx-auto border-[1px]" />

        <div className="capitalize flex flex-col">
          {sidebarSecondaryMenu.map((item: SidebarMenuItem, index) => (
            <Link
              title={item.name}
              href={item.href}
              key={index}
              className={`${
                pathname === item.href
                  ? "bg-primary-100 text-primary-900 border-r-4 border-r-primary-900"
                  : "text-gray-500"
              } ${
                sidebarOpen ? "px-8" : "justify-center"
              } py-4 flex items-center hover:bg-primary-100`}
            >
              {item.href === routes.HELP ? (
                <ChatBubbleLeftRightIcon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              ) : (
                <ArrowRightStartOnRectangleIcon
                  className={`${sidebarOpen ? "mr-8" : ""} w-6 h-6`}
                />
              )}

              {sidebarOpen && <span className="text-xl">{item.name}</span>}
            </Link>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <div className="px-8 xl:block hidden">
          <ReportBug />
        </div>
      )}
    </aside>
  );
};
export default Sidebar;
