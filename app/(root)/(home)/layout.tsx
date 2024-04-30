import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoxSync | Seamlessly Sync Your Meetings, Anytime, Anywhere",
  description:
    "Join, schedule, and sync your meetings effortlessly with VoxSync. Experience seamless collaboration with our intuitive meeting platform. Connect with ease, wherever you are.",
  icons: {
    icon: "/icons/voxsync-logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
