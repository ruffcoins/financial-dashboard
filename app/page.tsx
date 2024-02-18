import { routes } from "@/constants/routes";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-white rounded-xl w-screen h-screen flex flex-col items-center justify-center space-y-4 p-4">
      <p className="text-3xl text-primary-900">
        <p className="tracking-wider text-4xl">
          Smile<span className="font-medium">Pay</span>
        </p>
      </p>
      <Link
        href={routes.DASHBOARD}
        className="bg-primary-900 lg:w-96 w-52 flex items-center justify-center py-2 rounded-md space-x-2"
      >
        <HomeIcon className="w-8 h-8 text-white" />
        <span className="text-white  text-lg">Go to Dashboard</span>
      </Link>
    </div>
  );
  return <Link href={routes.DASHBOARD}>Go to dashboard</Link>;
};
export default Home;
