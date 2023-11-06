import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Authentication",
  description: "A platform to share your thoughts",
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
export default AuthLayout;
