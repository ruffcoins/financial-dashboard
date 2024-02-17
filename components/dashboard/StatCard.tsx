import { StatCardProps } from "@/types/statCard";

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  amount,
  percentageChange,
}) => {
  return (
    <div className="lg:p-4 p-2 rounded-md bg-white">
      <div className="flex item-end justify-between">
        <div className="bg-primary-100 p-2 rounded-xl">{icon}</div>
        <p className="text-zinc-500 text-lg">...</p>
      </div>

      <p className="text-primary-700 my-2">{title}</p>

      <div className=" flex items-center justify-between">
        <p className="font-medium lg:text-3xl text-xl text-primary-900">
          ${amount}
        </p>
        <p
          className={`${
            percentageChange < 0
              ? " bg-red-100 text-red-500"
              : "text-green-500 bg-green-100"
          } text-xs px-2 py-0.5 rounded`}
        >
          {percentageChange}%
        </p>
      </div>
    </div>
  );
};
export default StatCard;
