import { routes } from "@/constants/routes";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={routes.DASHBOARD}
      className="text-primary-900 flex items-center space-x-2 mx-8"
    >
      <FaceSmileIcon className="w-8 h-8" />
      <p className="tracking-wider text-4xl">
        Smile<span className="font-medium">Pay</span>
      </p>
    </Link>
  );
};
export default Logo;
