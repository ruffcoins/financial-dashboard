import { routes } from "@/constants/routes";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="bg-white rounded-xl w-full h-[600px] flex flex-col items-center justify-center space-y-4">
      <p className="text-3xl text-primary-900">Coming Soon</p>
      <Link
        href={routes.DASHBOARD}
        className="bg-primary-900 lg:w-96 w-44 flex items-center justify-center py-2 rounded-md space-x-2"
      >
        <HomeIcon className="w-8 h-8 text-white" />
        <span className="text-white  text-lg">Go Home</span>
      </Link>
    </div>
  );
};
export default ComingSoon;
