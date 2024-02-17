import { routes } from "@/constants/routes";
import Link from "next/link";

const Home = () => {
  return <Link href={routes.DASHBOARD}>Go to dashboard</Link>;
};
export default Home;
