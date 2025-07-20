"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const images = [
    {
      id: 1,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwAC1JDBR5GaCWzrQ4PyFj2tinb6hsKl8qY0vmeo",
    },
    {
      id: 2,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACIN7CxowdO1UsnpfNFwZ09cWjD4R2Bge8I7mH",
    },
    {
      id: 3,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACR3OBvwEkOomJpMaYF4lDcfAZtn0Xge9q8Sb5",
    },
    {
      id: 4,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACL6tjFuCu6a5vSqZeMiXlBYRIx2EmKTjWfFsP",
    },
    {
      id: 5,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACM4pSB2TvGA3RCgSxJhl9rqWyOjdo2ZkN8MPm",
    },
    {
      id: 6,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACTceJbU5aDzGiJjhE6Un4BvRLrSsg5kfTAMQ0",
    },
    {
      id: 7,
      src: "https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACbP0UcznPsJnm1Z0TcfVXCDLwyrl7FdgOx8YR",
    },
  ];

  useGSAP(() => {
    gsap
      .timeline()
      .from(".main-letter", {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        ease: "back(2)",
      })
      .to(".main-text", {
        bottom: "35%",
      })
      .to(
        ".main-img",
        {
          clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",
        },
        "<",
      )
      .to(".main-text", {
        bottom: 0,
        translateY: 0,
        fontSize: "12rem",
      })
      .to(
        ".main-img",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          translateY: "-100px",
        },
        "<",
      )
      .to(
        ".side-img",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.1,
        },
        "<",
      );
  });

  return (
    <>
      <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2">
        {images.map((item) => (
          <div
            key={item.id}
            className={`relative bg-black ${item.id === 4 ? "main-img h-[450px] flex-[1.4]" : "side-img h-[350px] flex-1 -translate-y-[100px]"}`}
            style={{
              clipPath:
                item.id === 4
                  ? "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                  : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            }}
          >
            <Image
              src={item.src}
              alt="img"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        ))}
      </div>

      <h1 className="main-text absolute bottom-1/2 left-1/2 flex w-full -translate-x-1/2 translate-y-1/2 items-center justify-center text-4xl leading-40 text-black uppercase">
        {"NorkWood".split("").map((item, i) => (
          <span key={i} className="main-letter invisible inline-block">
            {item}
          </span>
        ))}
      </h1>
    </>
  );
};

export default Hero;
