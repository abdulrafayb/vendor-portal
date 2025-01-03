import IconOne from "/public/ai-solutions-icon-one.png";
import IconTwo from "/public/ai-solutions-icon-two.png";
import IconThree from "/public/ai-solutions-icon-three.png";
import IconFour from "/public/ai-solutions-icon-four.png";
import BackgroundImage from "/public/ai-solutions-image.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: { src: IconOne, width: 52, height: 52 },
    description:
      "AI Assistant to Optimize Vendor Communication and boost collaboration.",
  },
  {
    icon: { src: IconTwo, width: 44, height: 44 },
    description: "Automate processes like invoice matching and risk analysis.",
  },
  {
    icon: { src: IconThree, width: 44, height: 44 },
    description:
      "Gain real-time insights into vendor performance and inventory.",
  },
  {
    icon: { src: IconFour, width: 42, height: 42 },
    description:
      "Stay ahead with predictive analytics and smart notifications.",
  },
];

export default function AISolutions() {
  return (
    <section>
      <div
        className="-bg-light-blue py-20 mb-24 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        <div className="px-32">
          <HeadingBlueBubble
            text="AI-Solutions"
            className="bg-[#4281FF]"
            textClassName="text-white"
          />
          <div className="flex text-white justify-start items-start gap-24">
            <h3 className="text-[36px] leading-[54px] font-semibold w-1/2 pr-20">
              AI Capabilities for Smarter Vendor Management
            </h3>
            <p className="text-[17px] leading-[25.5px] font-normal w-1/2">
              Harness the power of AI to simplify vendor onboarding, optimize
              procurement, track performance, and enhance compliance. Our
              AI-driven insights ensure accurate decision-making and seamless
              vendor collaboration.
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-center mt-8 text-[32px] font-medium">
            Key Benefits
          </h5>
          <div className="grid grid-cols-4 px-20 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 justify-start items-start mb-7 p-10 text-white border-[2px] border-[#88B0FF] rounded-[26px] mt-16"
              >
                <div className="h-[52px]">
                  <Image
                    src={item.icon.src}
                    alt="icon"
                    width={item.icon.width}
                    height={item.icon.height}
                  />
                </div>

                <p className="text-[18.85px] leading-[28.28px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center text-white">
            <h5 className="text-[22px] leading-[33px] font-medium px-96 mt-8">
              Discover how AI transforms vendor management through dynamic
              solutions tailored to your needs.
            </h5>
            <Link
              href="\"
              className="inline-block border-[1.67px] rounded-[29.8px] py-3 px-6 mt-8"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
