import { useSidebar } from "@/context/SidebarProvider";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div
      onClick={toggleSidebar}
      className={` ${
        sidebarOpen ? "" : "justify-center"
      } text-primary-900 flex items-center space-x-2 cursor-pointer`}
    >
      <FaceSmileIcon className="w-8 h-8" />
      {sidebarOpen && (
        <p className="tracking-wider text-4xl">
          Smile<span className="font-medium">Pay</span>
        </p>
      )}
    </div>
  );
};
export default Logo;
