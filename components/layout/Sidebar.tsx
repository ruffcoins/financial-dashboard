"use client";

import Link from "next/link";
import Logo from "../shared/Logo";
import ReportBug from "../shared/ReportBug";
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

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="lg:w-72 bg-white h-screen py-8 space-y-8 shadow-sm">
      <Logo />

      <div className="capitalize flex flex-col">
        {sidebarPrimaryMenu.map((item: SidebarMenuItem, index) => (
          <Link
            href={item.href}
            key={index}
            className={`${
              pathname === item.href
                ? "bg-primary-100 text-primary-900 border-r-4 border-r-primary-900"
                : "text-gray-500"
            } py-4 px-8 flex items-center`}
          >
            {item.href === routes.DASHBOARD ? (
              <Squares2X2Icon className="w-6 h-6 mr-8" />
            ) : item.href === routes.TRANSACTIONS ? (
              <NewspaperIcon className="w-6 h-6 mr-8" />
            ) : item.href === routes.PAYMENTS ? (
              <WalletIcon className="w-6 h-6 mr-8" />
            ) : item.href === routes.PLANNING ? (
              <ClipboardIcon className="w-6 h-6 mr-8" />
            ) : (
              <CogIcon className="w-6 h-6 mr-8" />
            )}

            <span className="text-xl">{item.name}</span>
          </Link>
        ))}
      </div>

      <hr className="w-[80%] mx-auto border-[1px]" />

      <div className="capitalize flex flex-col">
        {sidebarSecondaryMenu.map((item: SidebarMenuItem, index) => (
          <Link
            href={item.href}
            key={index}
            className={`${
              pathname === item.href
                ? "bg-primary-100 text-primary-900 border-r-4 border-r-primary-900"
                : "text-gray-500"
            } py-4 px-8 flex items-center`}
          >
            {item.href === routes.HELP ? (
              <ChatBubbleLeftRightIcon className="w-6 h-6 mr-8" />
            ) : (
              <ArrowRightStartOnRectangleIcon className="w-6 h-6 mr-8" />
            )}

            <span className="text-xl">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="px-8">
        <ReportBug />
      </div>
    </aside>
  );
};
export default Sidebar;
