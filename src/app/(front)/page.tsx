import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";
const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-center text-5xl">Hello world</h1>
      <ThemeToggleBtn />
      {session && JSON.stringify(session)}
    </div>
  );
};
export default Home;
