import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import LeftSidebar from "@/components/LeftSidebar";
import Bottombar from "@/components/Bottombar";


export const metadata: Metadata = {
  title: "CineGroove",
  description:
    "A music and movie recommender web application",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="w-full md:flex">
        <Topbar />
        <LeftSidebar />
        <main className="flex flex-1 h-screen">{children}</main>
        <Bottombar />
      </div>
    </html>
  );
}
