"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Press_Start_2P } from "next/font/google";
import { useRef } from "react";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(useGSAP);

const Sponsors = () => {
  const sponsors = [
    {
      name: "Pyth",
      color: "#a855f7",
      gridSpan: "col-span-3",
    },
    {
      name: "Uni",
      color: "#facc15",
      gridSpan: "col-span-3",
    },
    {
      name: "Wormhole",
      color: "#6ee7b7",
      gridSpan: "col-span-3",
    },
    {
      name: "Exponential Win",
      color: "#f97316",
      gridSpan: "col-span-3",
    },
    {
      name: "Navi",
      color: "#0ea5e9",
      gridSpan: "col-span-2",
    },
    {
      name: "Scallop",
      color: "#14b8a6",
      gridSpan: "col-span-2",
    },
    {
      name: "Bucket",
      color: "#22c55e",
      gridSpan: "col-span-2",
    },
    {
      name: "Alibaba Cloud",
      color: "#f59e0b",
      gridSpan: "col-span-2",
    },
    {
      name: "Hippo",
      color: "#60a5fa",
      gridSpan: "col-span-2",
    },
    {
      name: "Dubhe",
      color: "#818cf8",
      gridSpan: "col-span-2",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    gsap.set(highlighterRef.current, { width: 0, height: 0 });
  });

  const handleMouseEnter = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const targetEl = e.currentTarget;
      const container = containerRef.current;

      if (!container) return null;

      const targetRect = targetEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const targetTop = targetRect.y - containerRect.y;
      const targetLeft = targetRect.x - containerRect.x;
      const targetWidth = targetRect.width;
      const targetHeight = targetRect.height;
      const color = targetEl.dataset.color;

      gsap.to(highlighterRef.current, {
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: targetHeight,
        backgroundColor: color,
        duration: 0.2,
      });
    },
  );

  return (
    <div ref={containerRef} className="relative grid grid-cols-12">
      <div ref={highlighterRef} className="absolute top-0 left-0 z-10" />

      {sponsors.map((item) => (
        <div
          key={item.name}
          className={`flex h-[300px] items-center justify-center border border-gray-500 p-8 ${item.gridSpan} ${pressStart.className} cursor-default`}
          data-color={item.color}
          onMouseEnter={handleMouseEnter}
        >
          <p className="z-[20]">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
