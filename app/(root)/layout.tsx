import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoxSync | Seamlessly Sync Your Meetings, Anytime, Anywhere",
  description:
    "Join, schedule, and sync your meetings effortlessly with VoxSync. Experience seamless collaboration with our intuitive meeting platform. Connect with ease, wherever you are.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
