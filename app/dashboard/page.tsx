import Chart from "@/components/dashboard/Chart";
import PlanningOverviewCard from "@/components/dashboard/PlanningOverviewCard";
import StatCard from "@/components/dashboard/StatCard";
import TransactionOverviewCard from "@/components/dashboard/TransactionOverviewCard";
import CreditCard from "@/components/shared/CreditCard";
import {
  WalletIcon,
  GiftIcon,
  CurrencyDollarIcon,
  ReceiptRefundIcon,
  ArrowDownLeftIcon,
  PlusIcon,
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
        <div className="lg:col-span-3 col-span-1">
          <Chart />
          <div className="grid lg:grid-cols-2 lg:gap-x-4 gap-y-4">
            <TransactionOverviewCard />
            <PlanningOverviewCard />
          </div>
        </div>

        <div className="lg:col-span-2 col-span-1 bg-white rounded-md xl:px-8 px-4 mt-20">
          <div className="px-4 -mt-14 w-full">
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
