import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ReportBug = () => {
  return (
    <div className="bg-primary-100 py-4 px-8 rounded-md w-full text-center space-y-4">
      <div>
        <p className="text-primary-900 font-medium">Found a bug?</p>
        <p className="text-xs text-gray-500">
          Report now to us if you find any bugs
        </p>
      </div>

      <button className="bg-[#2C5C5C] w-full flex items-center justify-center py-2 rounded-md space-x-2">
        <ExclamationTriangleIcon className="w-4 h-4 text-white" />
        <span className="text-white">Report</span>
      </button>
    </div>
  );
};
export default ReportBug;
