import ImageOne from "/public/onboarding-image-one.png";
import ImageTwo from "/public/onboarding-image-two.png";
import ImageThree from "/public/onboarding-image-three.png";
import IconOne from "/public/onboarding-icon-one.png";
import IconTwo from "/public/onboarding-icon-two.png";
import IconThree from "/public/onboarding-icon-three.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import SectionHeading from "../components/SectionHeading";
import LinkButton from "../components/LinkButton";

import Image from "next/image";

const data = [
  {
    image: { src: ImageOne, alt: "image one", width: 390, height: 224 },
    icon: { src: IconOne, width: 46, height: 45 },
    title: "Hassle-Free Supplier Registration",
    description:
      "Eliminate repetitive tasks by automating supplier onboarding. Let vendors submit their information securely through an intuitive portal, reducing delays and manual errors.",
  },
  {
    image: { src: ImageTwo, alt: "image two", width: 390, height: 224 },
    icon: { src: IconTwo, width: 45, height: 45 },
    title: "Performance Analytics and Reporting",
    description: `Monitor vendor performance through real-time dashboards. Analyze order histories, resolve disputes, and track key metrics to continuously improve supplier relationships.`,
  },
  {
    image: { src: ImageThree, alt: "image three", width: 390, height: 224 },
    icon: { src: IconThree, width: 40.49, height: 39.18 },
    title: "Inventory Management",
    description:
      "Gain visibility into inventory levels to prevent shortages or surpluses. Proactive stock management ensures better demand forecasting and improved customer satisfaction.",
  },
];

export default function VendorOnboarding() {
  return (
    <section className="-bg-section py-12 mb-24">
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center">
          <HeadingBlueBubble text="SUPPLIER ONBOARDING" />
          <SectionHeading
            heading="Simplified Vendor Onboarding"
            paragraph="Say goodbye to the hassle of rushing suppliers, digging for information, or dealing with tedious manual work. Simplify your processes and access the supplier details your business needs to stay compliant, minimize risk, and ensure timely vendor payments with ease."
          />

          <div className="grid grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-start items-start mb-7 bg-white rounded-[20px] border-[1px] -border-dark-gray"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />

                <div className="relative flex flex-col gap-2 p-8">
                  <div className="flex justify-center items-center -bg-light-blue w-[73.49px] h-[73.49px] rounded-[17.37px] absolute -top-[52px]">
                    <Image
                      src={item.icon.src}
                      alt="icon"
                      width={item.icon.width}
                      height={item.icon.height}
                    />
                  </div>

                  <h3 className="-text-heading-dark-blue text-[21px] leading-[28.77px] font-medium h-[58px] mt-2 mb-4">
                    {item.title}
                  </h3>
                  <p className="-text-paragraph-light text-[15px] leading-[22.5px] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center gap-24 m-4">
            <h5 className="text-[26px] -text-heading-dark-gray font-medium pr-24">
              Discover how our Vendor Portal can help address common challenges
              and boost your operational efficiency.
            </h5>
            <div className="flex-shrink-0">
              <LinkButton href="/" text="Learn More" className="px-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
