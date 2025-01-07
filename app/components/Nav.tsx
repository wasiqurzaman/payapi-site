import Link from "next/link";

const links = [
  { label: "pricing", url: "/pricing" },
  { label: "about", url: "/about" },
  { label: "contant", url: "/contact" },
];

export default function Nav() {
  return (
    <div className="flex items-center flex-1">
      <ul className="flex items-center gap-[40px]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-secondary-sanJuanBlue font-bold capitalize"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Link
        href="/schedule"
        className="bg-primary text-linkWaterWhite font-secondary font-bold py-[14px] px-[26px] rounded-full ml-auto"
      >
        Schedule a Demo
      </Link>
    </div>
  );
}
