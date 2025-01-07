import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center gap-[64px] max-w-[1110px] mx-auto">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={135}
          height={38}
        />
      </div>
      <Nav />
    </header>
  );
}
