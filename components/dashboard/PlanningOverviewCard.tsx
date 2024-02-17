import { ChevronRightIcon } from "@heroicons/react/24/solid";
import ProgressMeter from "../shared/ProgressMeter";

const PlanningOverviewCard = () => {
  return (
    <div className="p-4 rounded-md bg-white">
      <div className="flex item-end justify-between">
        <p className="font-medium lg:text-2xl text-xl text-primary-900">
          Planning
        </p>

        <div className="flex items-center cursor-pointer">
          <p className="text-zinc-500 text-xs">Add New</p>
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-primary-100 p-4 my-4 rounded-md w-full">
        <p className="text-primary-900 font-medium lg:text-xl text-lg">
          Buy a House
        </p>
        <p className="text-xs text-end text-primary-900 my-1">
          $800 / <span className="font-semibold">$5700</span>
        </p>
        <ProgressMeter percent={(800 / 5700) * 100} />
      </div>

      <div className="bg-primary-100 p-4 my-4 rounded-md w-full">
        <p className="text-primary-900 font-medium lg:text-xl text-lg">
          Visit to Japan
        </p>
        <p className="text-xs text-end text-primary-900 my-1">
          $1250 / <span className="font-semibold">$1500</span>
        </p>
        <ProgressMeter percent={(1250 / 1500) * 100} />
      </div>
    </div>
  );
};
export default PlanningOverviewCard;
