import { Metadata } from "next";
import React from "react";
import Search from "./Search";

export const metadata: Metadata = {
  title: "Todos",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col">
      <div>
        <h1>Search Layout</h1>
        <Search />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};
export default RootLayout;
