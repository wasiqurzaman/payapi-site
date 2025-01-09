import Image from "next/image";
import Ready from "../components/Ready";

export default function AboutPage() {
  return (
    <div>
      <section className="pt-[48px] tab:pt-[72px] lg:pt-[82px]">
        <div className="max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0 flex flex-col">
          <div className="flex flex-col items-center lg:items-start gap-[48px] tab:gap-[52px] lg:px-[95px] mb-[48px] sm:mb-[92px] lg:mb-[100px]">
            <h1 className="h3-big tab:h2 lg:h1-sm max-w-[720px] text-center lg:text-start w-[80%]">
              We empower innovators by delivering access to the financial system
            </h1>
            <div className="flex flex-col tab:flex-row items-center gap-[10px] lg:gap-[30px] tab:items-start text-center tab:text-start">
              <h3 className="h4 tab:h3-big text-nowrap w-[223px] lg:w-[255px]">
                Our Vision
              </h3>
              <p className="text-sanJuanBlueLight tab:flex-1 sm:w-[80%] tab:w-auto">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
            <div className="flex flex-col tab:flex-row items-center gap-[10px] lg:gap-[30px] tab:items-start text-center tab:text-start">
              <h3 className="h4 tab:h3-big text-nowrap w-[223px] lg:w-[255px]">
                Our Business
              </h3>
              <p className="text-sanJuanBlueLight tab:flex-1 sm:w-[80%] tab:w-auto">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mb-[48px] sm:mb-[72px]">
          <Image
            src="/assets/about/desktop/image-team-members.jpg"
            alt="image team members"
            width={1440}
            height={500}
            className="hidden sm:block"
          />
          <Image
            src="/assets/about/mobile/image-team-members.jpg"
            alt="image team members"
            width={375}
            height={300}
            className="sm:hidden mx-auto w-[480px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-[12px] sm:gap-[30px]  max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0 mb-[48px] sm:mb-[72px]">
          <div className="flex flex-col border-t sm:border-y  border-sanJuanBlueLight/50 pt-[17px] sm:py-[17px] w-[350] flex-1 sm:h-[150px] tab:h-auto sm:justify-between items-center sm:items-start">
            <p className="text-sanJuanBlueLight">Team Members</p>
            <h2 className="h1-sm text-primary">300+</h2>
          </div>
          <div className="flex flex-col sm:py-[17px] sm:border-y border-sanJuanBlueLight/50 py-[17px] w-[350] flex-1 sm:h-[150px] tab:h-auto sm:justify-between items-center sm:items-start">
            <p className="text-sanJuanBlueLight">Offices in the US</p>
            <h2 className="h1-sm text-primary">3</h2>
          </div>
          <div className="flex flex-col border-b sm:border-y border-sanJuanBlueLight/50 pb-[17px] sm:py-[17px] w-[350] flex-1 tsm:h-[150px] tab:h-auto sm:justify-between items-center sm:items-start">
            <p className="text-sanJuanBlueLight">Transactions analyzed</p>
            <h2 className="h1-sm text-primary">10M+</h2>
          </div>
        </div>

        <div className="max-w-[1110px] mx-auto px-[24px] md:px-[40px] xl:px-0 flex flex-col mb-[12px] lg:mb-[36px]">
          <div className="flex flex-col gap-[52px] lg:px-[95px]">
            <div className="flex flex-col tab:flex-row items-center gap-[10px] lg:gap-[30px] tab:items-start text-center tab:text-start">
              <h3 className="h4 tab:h3-big text-nowrap w-[223px] lg:w-[255px]">
                The Culture
              </h3>
              <p className="text-sanJuanBlueLight tab:flex-1 sm:w-[80%] tab:w-auto">
                We strongly believe there&apos;s always an opportunity to learn
                from each other outside of day-to-day work, whether it&apos;s
                company-wide offsites, internal hackathons, or co-worker
                meetups. We always value cross-team collaboration and diversity
                of thought, no matter the job title.
              </p>
            </div>
            <div className="flex flex-col tab:flex-row items-center gap-[10px] lg:gap-[30px] tab:items-start text-center tab:text-start">
              <h3 className="h4 tab:h3-big text-nowrap w-[223px] lg:w-[255px]">
                The People
              </h3>
              <p className="text-sanJuanBlueLight tab:flex-1 sm:w-[80%] tab:w-auto">
                We&apos;re all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
        <Ready />
      </section>
    </div>
  );
}
