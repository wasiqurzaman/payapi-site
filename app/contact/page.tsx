import CompanyIcons from "../components/CompanyIcons";
import ContactForm from "../components/ContactForm";
import Ready from "../components/Ready";

export default function ContactPage() {
  return (
    <div>
      <section className="pt-[48px] tab:pt-[75px] lg:pt-[82px] pb-[56px]">
        <div className="flex flex-col items-center lg:items-start max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0">
          <div className="mb-[44px] text-center lg:text-start w-full tab:max-w-[80%] lg:max-w-[60%]">
            <h1 className="h3-big tab:h2 lg:h1-sm">
              Submit a help request and we’ll get in touch shortly.
            </h1>
          </div>
          {/* form */}
          <div className="flex flex-col lg:flex-row items-center gap-[64px] lg:gap-[100px]">
            <ContactForm />
            <div className="max-w-[541px] flex flex-col gap-[48px] items-center lg:items-start text-center lg:text-start">
              <h3 className="h4 text-center lg:text-start">
                Join the thousands of innovators already building with us
              </h3>
              <div>
                <CompanyIcons fillColor="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ready />
    </div>
  );
}
