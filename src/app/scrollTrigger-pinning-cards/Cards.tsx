import React from "react";

const Cards = () => {
  const cards = [
    {
      label: "Teasing phase",
      rotation: "rotate-12",
      background: "bg-linear-to-br from-yellow-600 to-black",
      shadow: "shadow-yellow",
    },
    {
      label: "First minting",
      rotation: "-rotate-12",
      background: "bg-linear-to-br from-blue-600 to-black",
      shadow: "shadow-blue",
    },
    {
      label: "Reveal phase",
      rotation: "rotate-6",
      background: "bg-linear-to-br from-green-600 to-black",
      shadow: "shadow-green",
    },
    {
      label: "Redeem phase",
      rotation: "-rotate-6",
      background: "bg-linear-to-br from-red-600 to-black",
      shadow: "shadow-red",
    },
  ];

  return (
    <div className="relative h-screen">
      {cards.map((item, i) => (
        <div
          key={item.label}
          className={`card-${i} absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 from-10% to-80% ${item.rotation} ${item.background} ${item.shadow} flex items-center justify-center rounded-lg border`}
        >
          <p className="text-6xl uppercase">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
