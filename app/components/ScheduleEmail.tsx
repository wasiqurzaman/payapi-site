import React from "react";

export default function ScheduleEmail() {
  return (
    <div className="p-0 w-[90%] rounded-full sm:bg-linkWaterWhite flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between max-w-[445px]">
      <input
        type="email"
        placeholder="Enter email address"
        className="px-[27px] py-[14px] outline-none rounded-full placeholder:font-bold placeholder:text-sanJuanBlue/60 text-sanJuanBlue font-bold w-full sm:w-auto shrink"
      />
      <button className="bg-primary text-linkWaterWhite py-[14px] px-[25px] rounded-full font-bold text-nowrap w-full sm:w-auto hover:bg-charmPink transition-colors duration-300">
        Schedule a Demo
      </button>
    </div>
  );
}
