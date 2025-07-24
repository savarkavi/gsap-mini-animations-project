"use client";

import { Alfa_Slab_One } from "next/font/google";
import Cards from "./Cards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page = () => {
  useGSAP(() => {
    const cardstl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });

    cardstl.to(`.card-${0}`, { top: "-50%", rotate: "-12deg" });
    cardstl.to(`.card-${1}`, { top: "-50%", rotate: "12deg" });
    cardstl.to(`.card-${2}`, { top: "-50%", rotate: "-6deg" });
    cardstl.to(`.card-${3}`, { top: "-50%", rotate: "6deg" });
  });

  return (
    <div
      className={`${alfaSlabOne.className} main-container relative min-h-screen bg-black`}
    >
      <div className="relative h-screen">
        <div className="relative flex items-center justify-between p-8 uppercase">
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4">
            <p className="border px-4 py-1 font-serif">Seletti</p>
            <p className="text-xl text-blue-700">Absolut.</p>
          </div>
          <p className="absolute top-1/2 right-4 -translate-y-1/2 text-blue-700">
            Connect wallet
          </p>
        </div>
        <h1 className="text-stroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] uppercase">
          Roadmap.
        </h1>
      </div>
      <Cards />
    </div>
  );
};

export default Page;
