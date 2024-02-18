import { transactionsNotification } from "@/constants/notificationList";
import { transactionType } from "@/types/notification";
import {
  BellIcon,
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Notification = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    // TODO: BUGFIX: Dropdown doesn't work and it's the same for the user dropdown

    <div className="relative cursor-pointer">
      <div className="p-2 bg-zinc-100 rounded-full relative" onClick={toggle}>
        <div className="w-2 h-2 rounded-full bg-red-500 absolute right-2 top-0"></div>
        <BellIcon className="w-6 h-6 text-primary-900" />
      </div>

      {open && (
        <div className="absolute top-10 right-0 rounded-md p-4 lg:w-72 w-64 shadow-sm bg-white list-none">
          <p className="text-xl text-primary-900 mb-4">Notifications</p>
          {transactionsNotification.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center p-2 text-sm text-gray-500 hover:rounded-md hover:bg-primary-100 hover:text-primary-900 border-b"
            >
              {transaction.type === transactionType.INCOME ? (
                <ArrowUpRightIcon className="w-4 h-4 text-primary-900" />
              ) : (
                <ArrowDownRightIcon className="w-4 h-4 text-red-500" />
              )}
              <span className="ml-4">{transaction.narration}</span>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
export default Notification;
