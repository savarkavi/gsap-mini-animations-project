import Image from "next/image";
import React from "react";
import Overlay from "./Overlay";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Page = () => {
  return (
    <div className={`${cormorant.className} h-screen w-full overflow-hidden`}>
      <div className="relative h-screen w-screen">
        <Image
          src="https://ngudmi35xl.ufs.sh/f/jLUSRr6cVwACohj6KfBb2qPurjtz7D9JRFbkNcIdUEKnhl3A"
          alt="img"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Overlay />
    </div>
  );
};

export default Page;
