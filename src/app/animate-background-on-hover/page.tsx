import React from "react";
import Sponsors from "./Sponsors";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div
      className={`${pressStart.className} flex h-screen flex-col justify-between bg-[#000f1d]`}
    >
      <div className="flex h-[100px] w-full items-center justify-between border-b border-gray-500">
        <p className={`p-4 text-2xl`}>Sushant'25</p>
        <div className="flex h-full items-center gap-2 bg-white px-4 text-black">
          <span className="text-blue-400">{"<date>"}</span>
          <span>July-August 2025</span>
          <span className="text-blue-400">{"<date>"}</span>
        </div>
      </div>
      <Sponsors />
      <button className="w-full bg-white p-6 text-black">
        Become a Sponsor
      </button>
    </div>
  );
};

export default Page;
