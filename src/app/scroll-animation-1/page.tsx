"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React from "react";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomWiggle, CustomEase);

const Page = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    const cardFronts = gsap.utils.toArray(".card-front");
    const cardBacks = gsap.utils.toArray(".card-back");

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=2000px",
        pin: true,
        scrub: 1,
      },
    });

    const bounceTween = gsap.to(cards, {
      y: 30,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: CustomWiggle.create("myWiggle", {
        wiggles: 1,
        type: "uniform",
      }),
      paused: true,
      duration: 2.5,
    });

    mainTl
      .to(cards, {
        rotate: (i) => (i - 1.5) * 6,
        onComplete: () => {
          bounceTween.play();
        },
      })
      .to(cards, {
        rotateY: (i) => (i + 1) * 5,
        onReverseComplete: () => {
          bounceTween.restart().pause();
        },
      })
      .to(
        cards,
        {
          left: (i) => `${(i + 1) * 20}%`,
        },
        "<",
      )
      .to(cardFronts, { rotateY: 180 })
      .to(cardBacks, { rotateY: 360 }, "<")
      .to(cards, { rotateZ: 0 }, "<");
  });

  return (
    <div className="main-container min-h-screen bg-[#1a2ffb]">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className={`card absolute top-1/2 left-1/2 h-[500px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-2xl`}
        >
          <div
            className="card-inner relative h-full w-full"
            style={{ perspective: "1000px" }}
          >
            {/* Card Front */}
            <div
              className="card-front absolute top-0 left-0 z-10 h-full w-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src="https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACYF1Evg3pkrv2a3NoznHcQbLKxJ1Ms0u6F9lD"
                alt="image"
                fill
                className="rounded-2xl border border-black object-cover"
              />
            </div>

            {/* Card Back */}
            <div className="card-back absolute top-0 left-0 flex h-full w-full rotate-y-180 items-center justify-center rounded-2xl border border-black bg-white">
              <p className="text-2xl font-bold text-black">Card Details</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
