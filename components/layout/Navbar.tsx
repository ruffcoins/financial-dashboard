"use client";

import { routes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Search from "../shared/Search";
import UserProfileDropDown from "../UserProfileDropDown";
import Notification from "../Notification";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white h-20 flex items-center justify-between px-8 shadow-sm">
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

      <div className="flex items-center space-x-12">
        <Search />
        <UserProfileDropDown />
        <Notification />
      </div>
    </div>
  );
};
export default Navbar;
