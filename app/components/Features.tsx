import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/assets/home/desktop/icon-personal-finances.svg",
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
  },
  {
    icon: "/assets/home/desktop/icon-banking-and-coverage.svg",
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    icon: "/assets/home/desktop/icon-consumer-payments.svg",
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

export default function Features() {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1110px] mx-auto flex flex-col tab:flex-row gap-[48px] tab:gap-4 items-center tab:items-start  justify-between px-[24px] md:px-[40px] xl:px-0">
        {features.map(feature => (
          <div
            key={feature.title}
            className="flex flex-col items-center max-w-[350px] gap-8 text-center"
          >
            <Image
              src={feature.icon}
              alt=""
              width={106}
              height={106}
              className="w-[106px]"
            />
            <div className="flex flex-col items-center gap-4">
              <h4 className="h3-sm">{feature.title}</h4>
              <p className="text-sanJualBlueLight text-center">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
