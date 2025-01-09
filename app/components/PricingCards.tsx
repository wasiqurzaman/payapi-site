import PricingCard from "./PricingCard";

const pricings = [
  {
    plan: "Free Plan",
    desc: "Build and test using our core set of products with up to 100 API requests",
    price: "0.00",
    icon: "/assets/shared/desktop/icon-check.svg",
    features: [
      {
        name: "Transactions",
        included: true,
      },
      {
        name: "Auth",
        included: true,
      },
      {
        name: "Identity",
        included: true,
      },
      {
        name: "Investments",
        included: false,
      },
      {
        name: "Assets",
        included: false,
      },
      {
        name: "Liabilities",
        included: false,
      },
      {
        name: "Income",
        included: false,
      },
    ],
  },
  {
    plan: "Basic Plan",
    desc: "Launch your project with unlimited requests and no contractual minimums ",
    price: "249.00",
    icon: "/assets/shared/desktop/icon-check.svg",
    features: [
      {
        name: "Transactions",
        included: true,
      },
      {
        name: "Auth",
        included: true,
      },
      {
        name: "Identity",
        included: true,
      },
      {
        name: "Investments",
        included: true,
      },
      {
        name: "Assets",
        included: true,
      },
      {
        name: "Liabilities",
        included: false,
      },
      {
        name: "Income",
        included: false,
      },
    ],
  },
  {
    plan: "Premium Plan",
    desc: "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "499.00",
    icon: "/assets/shared/desktop/icon-check.svg",
    features: [
      {
        name: "Transactions",
        included: true,
      },
      {
        name: "Auth",
        included: true,
      },
      {
        name: "Identity",
        included: true,
      },
      {
        name: "Investments",
        included: true,
      },
      {
        name: "Assets",
        included: true,
      },
      {
        name: "Liabilities",
        included: true,
      },
      {
        name: "Income",
        included: true,
      },
    ],
  },
];

export default function PricingCards() {
  return (
    <div className="flex flex-col tab:flex-row gap-[48px] tab:gap-[10px] md:gap-[30px] tab:justify-between">
      {pricings.map(pricing => (
        <PricingCard key={pricing.plan} pricing={pricing} />
      ))}
    </div>
  );
}
