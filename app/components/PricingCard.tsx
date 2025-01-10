import Image from "next/image";
import Button from "./Button";

interface Props {
  pricing: {
    plan: string;
    desc: string;
    price: string;
    icon: string;
    features: {
      name: string;
      included: boolean;
    }[];
  };
}

export default function PricingCard({ pricing }: Props) {
  return (
    <div className="flex flex-col gap-[24px] items-center lg:items-start">
      <div className="flex flex-col justify-between items-center lg:items-start text-center lg:text-start ">
        <h2 className="h4 lg:h3-big text-primary lg:text-primary mb-[12px]  lg:mb-[16px]">
          {pricing.plan}
        </h2>
        <p className="text-sanJuanBlueLight mb-2 max-w-[90%] sm:max-w-[70%] tab:max-w-full">
          {pricing.desc}
        </p>
        <h3 className="h1-sm tab:h2 lg:h1-sm leading-[72px] mt-auto">
          ${pricing.price}
        </h3>
      </div>
      <hr className="h-px w-full sm:w-[75%] tab:w-full bg-[#979797] border border-slate-300" />
      <ul className="flex flex-col gap-2">
        {pricing.features.map(item => (
          <li key={item.name} className="flex items-center gap-4">
            <div className="w-4">
              {item.included && (
                <Image
                  src={pricing.icon}
                  alt="icon tick"
                  width={12}
                  height={8}
                />
              )}
            </div>
            <p
              className={`${
                item.included ? "text-sanJuanBlue" : "text-sanJuanBlue/60"
              } text-base leading-[28px]`}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
      <hr className="h-px w-full sm:w-[75%] tab:w-full bg-[#979797] border border-slate-300" />
      <Button variant="outline">Request Access</Button>
    </div>
  );
}
