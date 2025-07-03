import React from "react";

export const SingleStep = ({ title, image, subTitle, color }) => {
  return (
    <>
      <div
        style={{ backgroundColor: `#${color}` }}
        className="w-18 h-18 text-xl rounded-2xl text-center shadow-md flex flex-col items-center justify-center my-4"
      >
        {image}
      </div>

      <h2 className="text-center font-bold text-3xl leading-8 w-36 pt-2">
        {title}
      </h2>
      <h3 className="text-[#333333] py-2 w-3/4">{subTitle}</h3>
      {color !== "9672FF" && <div className="my-4 w-2 h-2 bg-black rounded-full" style={{ backgroundColor: 'grey'}}></div>}
    </>
  );
};
