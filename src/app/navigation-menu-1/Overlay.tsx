"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Work" },
  { id: 4, label: "Studio" },
  { id: 5, label: "Contact" },
];

gsap.registerPlugin(useGSAP);

const Overlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlayTl = useRef<gsap.core.Timeline | null>(null);
  const hoverTls = useRef<Map<number, gsap.core.Timeline>>(new Map());

  const { contextSafe } = useGSAP(() => {
    toggleOverlayTl.current = gsap
      .timeline({ paused: true })
      .to(".overlay-container", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      })
      .to(".menu-item", { top: 0, stagger: 0.1 }, "-=0.5");
  });

  const handleOverlayOpen = () => {
    toggleOverlayTl.current?.play();
  };

  const handleOverlayClose = () => {
    toggleOverlayTl.current?.reverse();
  };

  const handleItemHover = contextSafe((i: number) => {
    if (!hoverTls.current.has(i)) {
      hoverTls.current.set(
        i,
        gsap
          .timeline()
          .to(`.menu-item-top-${i}`, { y: -150 })
          .to(`.menu-item-bottom-${i}`, { y: 0 }, "<"),
      );
    } else {
      hoverTls.current.get(i)?.play();
    }
  });

  const handleItemLeave = contextSafe((i: number) => {
    hoverTls.current.get(i)?.reverse();
  });

  return (
    <>
      <div
        className="overlay-container fixed top-0 left-0 z-[99] flex h-screen w-screen flex-col justify-between bg-[#c5fb45] px-16 py-8 text-black"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <button
          className="absolute top-6 right-6 cursor-pointer text-2xl font-semibold uppercase"
          onClick={handleOverlayClose}
        >
          Close
        </button>

        <div className="mt-8 flex flex-col gap-4 text-9xl uppercase">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative h-32 w-full items-start overflow-hidden"
            >
              <div
                className="menu-item absolute top-[100%] cursor-pointer"
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={() => handleItemLeave(item.id)}
              >
                <p className={`menu-item-top menu-item-top-${item.id}`}>
                  {item.label}
                </p>
                <p
                  className={`menu-item-bottom menu-item-bottom-${item.id} absolute top-0 translate-y-[150px]`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between text-xl font-semibold uppercase">
          <p>Sushant production</p>
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer">Instagram ↗</p>
            <p className="cursor-pointer">Youtube ↗</p>
            <p className="cursor-pointer">Twitter ↗</p>
          </div>
        </div>
      </div>
      <button
        className="fixed top-6 right-6 cursor-pointer text-2xl font-semibold text-white uppercase"
        onClick={handleOverlayOpen}
      >
        Menu
      </button>
    </>
  );
};

export default Overlay;
