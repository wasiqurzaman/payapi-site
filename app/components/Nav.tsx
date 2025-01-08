import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "pricing", url: "/pricing" },
  { label: "about", url: "/about" },
  { label: "contant", url: "/contact" },
];

export default function Nav() {
  return (
    <>
      <div className="hidden tab:flex items-center flex-1">
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
          href="/schedule"
          className="bg-primary text-linkWaterWhite font-secondary font-bold py-[14px] px-[20px] md:py-[14px] md:px-[26px] rounded-full ml-auto text-nowrap cursor-pointer hover:bg-charmPink transition-colors duration-300"
        >
          Schedule a Demo
        </Link>
      </div>
      <div className="tab:hidden flex items-center">
        <button>
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
