import PlanningOverviewCard from "@/components/dashboard/PlanningOverviewCard";
import StatCard from "@/components/dashboard/StatCard";
import TransactionOverviewCard from "@/components/dashboard/TransactionOverviewCard";
import CreditCard from "@/components/shared/CreditCard";
import LineChart from "@/components/shared/LineChart";
import {
  WalletIcon,
  GiftIcon,
  CurrencyDollarIcon,
  ReceiptRefundIcon,
  ArrowDownLeftIcon,
  PlusIcon,
  RectangleStackIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Dashboard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-x-4 gap-2">
        <StatCard
          icon={<WalletIcon className="w-6 h-6 text-primary-900" />}
          title="Balance"
          amount={101.47}
          percentageChange={20}
        />
        <StatCard
          icon={<CurrencyDollarIcon className="w-6 h-6 text-primary-900" />}
          title="Income"
          amount={205.11}
          percentageChange={15.5}
        />
        <StatCard
          icon={<GiftIcon className="w-6 h-6 text-primary-900" />}
          title="Savings"
          amount={834.76}
          percentageChange={-5}
        />
        <StatCard
          icon={<ReceiptRefundIcon className="w-6 h-6 text-primary-900" />}
          title="Expenses"
          amount={456.99}
          percentageChange={-10}
        />
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 mt-4 gap-x-4">
        <div className="lg:col-span-3 col-span-1 gap-y-4">
          <div className="grid grid-cols-1 lg:gap-x-4 gap-y-4 mb-4 bg-white rounded-md xl:p-8 p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium lg:text-2xl text-xl text-primary-900">
                Account Balance
              </p>

              <div className="flex lg:flex-row flex-col lg:space-x-2 lg:space-y-0 space-y-2">
                <p className="bg-primary-100 text-primary-900 text-xs px-2 flex space-x-2 items-center cursor-pointer">
                  <CalendarDaysIcon className="w-3 h-3" />
                  <span>Expenses</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </p>
                <p className="bg-primary-100 text-primary-900 text-xs px-2 flex space-x-2 items-center cursor-pointer">
                  <RectangleStackIcon className="w-3 h-3" />
                  <span>Monthly</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </p>
              </div>
            </div>

            <LineChart />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-x-4 gap-y-4">
            <TransactionOverviewCard />
            <PlanningOverviewCard />
          </div>
        </div>

        <div className="lg:col-span-2 col-span-1 bg-white rounded-md xl:px-8 px-4 mt-4">
          <div className="px-4 -mt-4 w-full">
            <CreditCard
              cardNumber="1234567890123456"
              cardHolder="John Doe"
              expirationDate="12/24"
              cvv="123"
            />
          </div>

          <div className="bg-zinc-100 p-4 m-4 rounded-md flex justify-between">
            <div className="">
              <p className="text-primary-900 text-sm">Your Balance</p>
              <p className="font-medium lg:text-3xl text-xl text-primary-900">
                ${835.23}
              </p>
            </div>

            <div>
              <p className="text-xs text-end text-primary-900 my-1">
                Change/Week
              </p>
              <p
                className={`flex items-center justify-between bg-red-100 text-red-500
                    text-xs px-2 py-0.5 rounded`}
              >
                <ArrowDownLeftIcon className="w-3 h-3" />
                <span>{-0.89}%</span>
              </p>
            </div>
          </div>

          <div className="bg-zinc-100 p-4 m-4 rounded-md flex justify-between">
            <div className="">
              <p className="text-primary-900 text-sm">Currency</p>
              <p className="font-medium text-lg text-primary-900">
                USD/US Dollar
              </p>
            </div>

            <div className="">
              <p className="text-primary-900 text-sm">Status</p>
              <p className="font-medium text-lg text-primary-900">Active</p>
            </div>

            <div className="">
              <p className="text-primary-900 text-sm">Expiry</p>
              <p className="font-medium text-lg text-primary-900">12/24</p>
            </div>
          </div>

          <div className="bg-primary-100 p-4 m-4 rounded-md flex items-center justify-center space-x-2">
            <p className="text-primary-900">
              <PlusIcon className="w-4 h-4" />
            </p>
            <p className="font-medium text-lg text-primary-900">Add Card</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
