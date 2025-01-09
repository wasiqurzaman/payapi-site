import PricingCards from "../components/PricingCards";
import Ready from "../components/Ready";

export default function PricingPage() {
  return (
    <div>
      <section className="pt-[48px] tab:pt-[75px] lg:pt-[82px] pb-[56px]">
        <div className="max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0 flex flex-col gap-[48px] tab:gap-[72px] items-center lg:items-start">
          <h1 className="h3-big tab:h2 lg:h1-sm">Pricing</h1>
          <PricingCards />
        </div>
      </section>
      <Ready />
    </div>
  );
}
