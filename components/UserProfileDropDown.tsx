"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const UserProfileDropDown = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative cursor-pointer">
      <div
        className="flex items-center space-x-4 text-primary-900"
        onClick={toggle}
      >
        <Image
          src="https://i.pravatar.cc/300"
          alt={"user avatar"}
          className="w-12 h-12 rounded-full"
          width="100"
          height="100"
        />
        <div className="flex items-center space-x-2">
          <p className="font-medium">Anthony Nzube </p>
          {open ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </div>
      </div>

      {open && (
        <div className="absolute top-10 right-0 rounded-md p-4 w-72 shadow-sm bg-white list-none">
          <li className="flex items-center space-x-2 p-2 text-base text-gray-500 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-primary-900" />
            <div>Logout</div>
          </li>
        </div>
      )}
    </div>
  );
};
export default UserProfileDropDown;
