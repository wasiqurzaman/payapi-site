import React from "react";
import ScheduleEmail from "./ScheduleEmail";

export default function Ready() {
  return (
    <section className="pt-[40px] md:pt-[60px] pb-[80px] md:pb-[100px]">
      <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-[32px] sm:gap-[40px] px-[24px] md:px-[40px] xl:px-0">
        <h1 className="h3-big sm:h2 text-center md:text-start">
          Ready to start?
        </h1>
        <ScheduleEmail />
      </div>
    </section>
  );
}
