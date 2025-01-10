import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outline";
  children: ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  const className =
    variant === "primary"
      ? "bg-primary text-linkWaterWhite py-[14px] px-[25px] rounded-full font-bold text-nowrap w-full sm:w-auto hover:bg-charmPink transition-colors duration-300"
      : "text-sanJuanBlue border-2 border-sanJuanBlue px-[32px] py-[14px] rounded-full font-bold text-nowrap hover:bg-sanJuanBlue hover:text-linkWaterWhite transition-all duration-300";
  return <button className={className}>{children}</button>;
}
