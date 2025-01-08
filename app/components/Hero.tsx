import Image from "next/image";
import ScheduleEmail from "./ScheduleEmail";

export default function HeroSection() {
  return (
    <section className="max-w-[1110px] mx-auto flex-col lg:flex-row flex items-center gap-[40px] py-[48px]  lg:py-[75px] px-[24px] md:px-[40px] xl:px-0">
      <div className="flex flex-col items-center lg:items-start lg:flex-1 max-w-[90%] md:max-w-[80%]">
        <h1 className="h3-big sm:h1-sm lg:h1-large mb-[40px] text-center lg:text-start">
          Start building with our APIs for absolutely free.
        </h1>
        <ScheduleEmail />
        <div className="text-sanJualBlueLight flex gap-2 pl-[27px] mt-4">
          <p>Have any questions?</p>
          <span className="font-bold">Contact Us</span>
        </div>
      </div>
      <div className="lg:flex-1 flex items-center justify-center order-first lg:order-none">
        <Image
          src="/assets/home/desktop/phone.svg"
          alt="phone"
          width={263}
          height={500}
          className="w-[130px] sm:w-[160px] lg:w-[263px]"
        />
      </div>
    </section>
  );
}
