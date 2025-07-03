import React from "react";
import { Button } from "@mui/material";

export const Hero = () => {
  return (
    <main className="relative bg-[#030647] min-h-[75vh] p-4" dir="rtl">
      <div className="absolute top-12 bg-[#030a91] blur-2xl w-42 h-42 z-0 rounded-full"></div>
      
      <div className="text-white text-center flex-row items-center justify-center z-10 relative">
        <h1 className="text-4xl font-bold py-12">
          המתקפה דיגיטלית - הפתרון אנושי
        </h1>
        <h2 className="text-xl ">
          מומחי סייבר מוסמכים עומדים לרשותך לפתרון בעיות  אבטחה והגנה מלאה על
          הנוכחות הדיגיטלית שלך
        </h2>
        <div className="py-12">
          <Button variant="contained" style={{width: "220px"}}>נסה עכשיו</Button>
        </div>
      </div>
    </main>
  );
};
