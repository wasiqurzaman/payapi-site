import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-[40px] md:gap-[64px] max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={135}
          height={38}
        />
      </Link>
      <Nav />
    </header>
  );
}
