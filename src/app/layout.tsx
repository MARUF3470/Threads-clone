import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider from "./CustomProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads App",
  description: "A platform to share your thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
