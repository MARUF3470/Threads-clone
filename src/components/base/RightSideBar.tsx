import { getUser } from "@/lib/serverMethods";
import CartListUser from "../common/CartListUser";
import { User } from "@/type";
import { ScrollArea } from "@/components/ui/scroll-area";

const RightSideBar = async () => {
  const users: Array<User> | [] = await getUser();
  return (
    <ScrollArea className="h-screen border-l-2 lg:w-1/4 lg:pt-5 lg:px-2 xl:p-5 hidden lg:block">
      <h1 className="text-2xl font-bold mb-5">Suggesions for you</h1>
      {users.length ? (
        users.map((user) => <CartListUser key={user.id} user={user} />)
      ) : (
        <p>No user found</p>
      )}
    </ScrollArea>
  );
};

export default RightSideBar;
