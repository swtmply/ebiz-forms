import Image from "next/image";
import React from "react";
import { UserIcon } from "@heroicons/react/solid";

export const Nav = () => {
  return (
    <nav className="flex justify-between px-8 py-4 bg-grey-50 shadow-md mb-10">
      <section>
        <Image src="/ebizolution_logo.svg" height={50} width={150} />
      </section>
      <section className="flex gap-2">
        <div className="text-right">
          <p className="font-bold text-lg">👋 Hello, John Alden Delos Reyes</p>
          <span className="text-grey-300 text-sm">Position</span>
        </div>
        <div className="w-14 h-14 rounded-full bg-avocado-200 flex justify-center items-center">
          <UserIcon className="w-8 h-8 text-white" />
        </div>
      </section>
    </nav>
  );
};
