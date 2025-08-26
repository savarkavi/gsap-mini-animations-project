"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React from "react";

const cards = [
  {
    src: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKLgLPxS46cQ2Kop80yFxRPevSzhGqlrTDCaEA",
  },
  {
    src: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKAMrYDsCUsPqw3fk4FKtBahg1L7Srxo0j9VYC",
  },
  {
    src: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKsIAWhUJUSNKX3PD5Qk8ebw4aqTmIH96LBEhg",
  },
  {
    src: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKOXA9r9LMENcxTYPeBsbjgSLVRuwW7ld9G08t",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CardsContainer = () => {
  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement[]>(".card-image");
    const cardContainers =
      gsap.utils.toArray<HTMLDivElement[]>(".card-container");

    images.forEach((item, i) => {
      if (i === 0) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            scrub: 1,
            pin: cardContainers[i - 1],
          },
        })
        .to(images[i - 1], { z: -200, rotateX: 45, y: "-20%", opacity: 0 });
    });
  });

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {cards.map((item, i) => (
        <div
          key={i}
          className="card-container relative h-screen w-full bg-black"
          style={{ perspective: "1000px" }}
        >
          <Image
            src={item.src}
            alt="img"
            fill
            className="card-image object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
