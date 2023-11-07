import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Threads Home",
  description: "A platform to share your thoughts",
};
import { Toaster } from "@/components/ui/toaster";
import BaseComponent from "@/components/base/BaseComponent";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <BaseComponent>{children}</BaseComponent>
      </ThemeProvider>
      <Toaster />
    </div>
  );
}
