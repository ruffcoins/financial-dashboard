import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Battery100Icon,
  ChartPieIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/solid";

const TransactionOverviewCard = () => {
  return (
    <div className="p-4 rounded-md bg-white">
      <div className="flex item-end justify-between">
        <p className="font-medium lg:text-2xl text-xl text-primary-900">
          Transactions
        </p>

        <div className="flex items-center cursor-pointer">
          <p className="text-zinc-500 text-xs">View All</p>
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      </div>

      <div className="flex item-end justify-between my-4">
        <div className="flex space-x-2">
          <div className="flex justify-center items-center bg-primary-100 p-2 rounded-xl">
            <Battery100Icon className="w-6 h-6 text-primary-900" />
          </div>

          <div className="flex flex-col">
            <p className="text-lg">Power Bill</p>
            <p className="text-xs">Jan 10, 2024 at 08:45</p>
          </div>
        </div>

        <p className="text-lg text-red-500">-$52</p>
      </div>

      <div className="flex item-end justify-between my-4">
        <div className="flex space-x-2">
          <div className="flex justify-center items-center bg-primary-100 p-2 rounded-xl">
            <ChartPieIcon className="w-6 h-6 text-primary-900" />
          </div>

          <div className="flex flex-col">
            <p className="text-lg">Data Bill</p>
            <p className="text-xs">Jan 12, 2024 at 09:45</p>
          </div>
        </div>

        <p className="text-lg text-red-500">-$70</p>
      </div>

      <div className="flex item-end justify-between my-4">
        <div className="flex space-x-2">
          <div className="flex justify-center items-center bg-primary-100 p-2 rounded-xl">
            <ReceiptPercentIcon className="w-6 h-6 text-primary-900" />
          </div>

          <div className="flex flex-col">
            <p className="text-lg">James Corden</p>
            <p className="text-xs">Jan 20, 2024 at 10:45</p>
          </div>
        </div>

        <p className="text-lg text-green-500">+$200</p>
      </div>
    </div>
  );
};
export default TransactionOverviewCard;
