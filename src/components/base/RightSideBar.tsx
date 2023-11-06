import CartListUser from "../common/CartListUser";

const RightSideBar = () => {
  return (
    <div className="h-screen border-l-2 lg:w-1/4 lg:pt-5 lg:px-2 xl:p-5 hidden lg:block">
      <h1 className="text-2xl font-bold mb-5">Suggesions for you</h1>
      <CartListUser />
    </div>
  );
};

export default RightSideBar;
