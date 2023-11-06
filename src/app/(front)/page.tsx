import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";
import LeftSideBar from "@/components/base/LeftSideBar";
import BaseComponent from "@/components/base/BaseComponent";
const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    // <div>
    //   {/* <ThemeToggleBtn /> */}
    //   {/* {session && JSON.stringify(session)} */}
    //   <LeftSideBar />
    // </div>
    <BaseComponent />
  );
};
export default Home;
