import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <main className="relative bg-[#030647] min-h-[75vh] p-4" dir="rtl">
      <div className="absolute top-12 bg-[#030a91] blur-2xl w-42 h-42 z-0 rounded-full"></div>

      <div className="text-white text-center flex justify-between w-full z-10 relative md:text-right md:pr-12">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:block">
          <h1 className="text-4xl font-bold py-12 w-full max-w-[700px] lg:text-7xl md:w-[700px]">
            המתקפה דיגיטלית - הפתרון אנושי
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold w-full max-w-[700px] lg:w-1/2 md:w-[700px]">
            מומחי סייבר מוסמכים עומדים לרשותך לפתרון בעיות  אבטחה והגנה מלאה על
            הנוכחות הדיגיטלית שלך
          </h2>
          <div className="py-12 flex justify-center md:justify-start w-full md:w-auto">
            <Button variant="contained" style={{ width: "220px" }}>
              נסה עכשיו
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/rescme.png"
            alt="Rescue Me"
            width={400}
            height={400}
            className="hidden lg:block left-[-20px] mr-12 absolute"
          />
        </div>
      </div>
    </main>
  );
};
