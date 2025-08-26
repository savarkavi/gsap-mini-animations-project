import React from "react";
import CardsContainer from "./CardsContainer";
import { ReactLenis } from "lenis/react";

const Page = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#f9f4eb] text-black">
        <div className="relative flex h-screen flex-col items-center justify-center">
          <h1 className="font-serif text-7xl font-bold uppercase">
            Artists of the world Unite!
          </h1>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2 text-xl">
            <p>Scroll</p>
            <p>↓</p>
          </div>
        </div>
        <CardsContainer />
      </div>
    </ReactLenis>
  );
};

export default Page;
