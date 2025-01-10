"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "pricing", url: "/pricing" },
  { label: "about", url: "/about" },
  { label: "contant", url: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden tab:flex items-center flex-1">
        <ul className="flex items-center gap-[40px]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-sanJualBlueLight font-bold capitalize hover:text-sanJuanBlue transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Link
          href=""
          className="bg-primary text-linkWaterWhite font-secondary font-bold py-[14px] px-[20px] md:py-[14px] md:px-[26px] rounded-full ml-auto text-nowrap cursor-pointer hover:bg-charmPink transition-colors duration-300"
        >
          Schedule a Demo
        </Link>
      </nav>

      {/* mobile nav */}
      <nav
        className={`flex flex-col px-[27px] py-[48px] tab:hidden h-screen w-[300px] fixed top-0 right-0 bg-mirageBlue ease-in-out duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end pb-[24px] mb-[42px] border-b-2 border-slate-500">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/assets/shared/mobile/close.svg"
              alt="alt"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-[40px] w-full h-full ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-linkWaterWhite font-bold text-[20px] capitalize hover:text-sanJuanBlue transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href=""
            className="bg-primary text-linkWaterWhite font-secondary font-bold py-[14px] px-[20px] md:py-[14px] md:px-[26px] rounded-full text-nowrap cursor-pointer hover:bg-charmPink transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Schedule a Demo
          </Link>
        </ul>
      </nav>

      <div className="tab:hidden flex items-center">
        <button onClick={() => setIsOpen(true)}>
          <Image
            src="/assets/shared/mobile/menu.svg"
            alt="mobile nav icon"
            width={30}
            height={20}
          />
        </button>
      </div>
    </>
  );
}
