import React from "react";
import { CardItemType } from "../lib/types";

export const CardButton: React.FC<CardItemType> = ({ title, count }) => {
  return (
    <div className="bg-gradient-to-b from-grey-50 rounded-md w-full flex flex-col justify-between h-[6rem] px-4 py-2 border-collapse shadow-md">
      <p className="font-semibold text-xl">{title}</p>
      <p className="self-end font-semibold text-lg">{count}</p>
    </div>
  );
};
