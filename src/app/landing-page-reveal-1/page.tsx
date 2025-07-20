import React from "react";
import Header from "./Header";
import { Cormorant_Garamond } from "next/font/google";
import Hero from "./Hero";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Page = () => {
  return (
    <div
      className={`${cormorant.className} relative h-screen overflow-y-hidden bg-[#c4c4b0]`}
    >
      <Header />
      <Hero />
    </div>
  );
};

export default Page;
