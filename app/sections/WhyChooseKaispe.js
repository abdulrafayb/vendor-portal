import ImageOne from "/public/why-choose-kaispe-image-one.png";
import ShapeOne from "/public/why-choose-kaispe-shape-one.png";
import IconOne from "/public/why-choose-kaispe-icon-one.png";
import IconTwo from "/public/why-choose-kaispe-icon-two.png";
import IconThree from "/public/why-choose-kaispe-icon-three.png";
import IconFour from "/public/why-choose-kaispe-icon-four.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import LinkButtonArrow from "../components/LinkButtonArrow";
import SectionHeading from "../components/SectionHeading";

import Image from "next/image";

const data = [
  {
    icon: { src: IconOne, width: 34.13, height: 33.03 },
    title: "User-Friendly Design",
    description:
      "Simplify vendor management with intuitive tools that are easy to navigate.",
  },
  {
    icon: { src: IconTwo, width: 34.13, height: 33.03 },
    title: "Scalability",
    description: `Whether you manage 10 or 10,000 vendors, KAISPE scales to meet your needs.`,
  },
  {
    icon: { src: IconThree, width: 34.13, height: 33.03 },
    title: "Data Security",
    description: `Keep your sensitive business data safe with top-notch security protocols.`,
  },
  {
    icon: { src: IconFour, width: 34.13, height: 33.03 },
    title: "Customizable Features",
    description: `Tailor the portal to fit your unique business requirements and processes.`,
  },
];

export default function WhyChooseKaispe() {
  return (
    <section className="mb-24">
      <div className="custom-container flex flex-col justify-center items-center text-center">
        <HeadingBlueBubble text="WHY CHOOSE US" />
        <SectionHeading
          heading="Why Choose KAISPE Vendor Portal?"
          paragraph="KAISPE's Vendor Portal is designed to simplify and streamline the entire vendor management process. From product catalog updates to real-time communication and delivery tracking, our platform enhances collaboration and efficiency at every stage."
        />

        <div className="grid grid-cols-3 gap-8 text-left justify-center items-center mb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 -bg-section justify-center py-12 px-10 rounded-[41.9px] relative z-10 overflow-hidden ${
                index === 0 ? "col-span-3 grid grid-cols-2 pb-0 px-14" : ""
              } ${index === data.length - 1 ? "!-bg-light-blue" : ""}`}
            >
              {index === 0 ? (
                <>
                  <div className="flex flex-col gap-4 justify-start lg:mt-6">
                    <div className="bg-[#0055FF14] flex justify-center items-center w-[61.95px] h-[61.95px] rounded-[14.64px]">
                      <Image
                        src={item.icon.src}
                        alt="icon"
                        width={item.icon.width}
                        height={item.icon.height}
                      />
                    </div>

                    <h3 className="-text-dark-gray text-[25px] leading-[37.5px] font-medium">
                      {item.title}
                    </h3>
                    <p className="-text-paragraph-light text-[18.85px] leading-[28.28px]">
                      {item.description}
                    </p>
                  </div>
                  <Image src={ImageOne} alt="image" width={623} height={321} />
                </>
              ) : (
                <>
                  <div
                    className={`flex justify-center items-center w-[61.95px] h-[61.95px] rounded-[14.64px] ${
                      index === data.length - 1
                        ? "bg-white/40"
                        : "bg-[#0055FF14]"
                    }`}
                  >
                    {index === data.length - 1 && (
                      <div
                        className="absolute inset-0 bg-contain bg-no-repeat bg-right"
                        style={{
                          backgroundImage: `url(${ShapeOne.src})`,
                        }}
                      />
                    )}

                    <Image
                      src={item.icon.src}
                      alt="icon"
                      width={item.icon.width}
                      height={item.icon.height}
                    />
                  </div>

                  <h3
                    className={`-text-dark-gray text-[25px] leading-[37.5px] font-medium relative z-10 ${
                      index === data.length - 1 ? "text-white" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`-text-paragraph-light text-[18.85px] leading-[28.28px] relative z-10 ${
                      index === data.length - 1 ? "text-white" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <LinkButtonArrow
          href="/"
          text="DISCOVER MORE"
          className="bg-transparent border-[1.67px] -border-light-blue -text-light-blue hover:text-white transition-colors duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
