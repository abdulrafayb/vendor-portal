import ArrowIcon from "/public/transform-arrow.png";
import ArrowIconWhite from "/public/transform-arrow-white.png";
import IconOne from "/public/transform-icon-one.png";
import IconTwo from "/public/transform-icon-two.png";
import IconThree from "/public/transform-icon-three.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import LinkButtonArrow from "../components/LinkButtonArrow";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: { src: IconOne, width: 31.41, height: 31.41 },
    title: "Streamlined Vendor Management",
    description:
      "Centralize all vendor activities, from onboarding to performance monitoring, in one platform for a more organized and efficient process.",
    arrowIcon: { src: ArrowIcon, width: 33, height: 33 },
  },
  {
    icon: { src: IconTwo, width: 35, height: 37 },
    title: "Enhanced Collaboration",
    description:
      "Build stronger relationships with vendors through transparent workflows and real-time updates.",
    arrowIcon: { src: ArrowIcon, width: 33, height: 33 },
  },
  {
    icon: { src: IconThree, width: 34, height: 34 },
    title: "Time-Saving Automation",
    description:
      "Automate key processes like order management, invoice tracking, and compliance checks, reducing manual effort and errors.",
    arrowIcon: { src: ArrowIconWhite, width: 33, height: 33 },
  },
];

export default function TransformTheWay() {
  return (
    <section>
      <div className="custom-container mb-24">
        <HeadingBlueBubble text="BENEFITS" />

        <div className="flex justify-center items-center gap-36 mb-16">
          <h4 className="-text-heading-dark-gray text-[36px] leading-[54px] font-semibold w-1/2">
            Transform the Way You Manage Vendors
          </h4>
          <p className="-text-paragraph-light text-[18px] leading-[27px] w-1/2">
            Revolutionize vendor management with a platform designed to
            streamline processes, enhance collaboration, and ensure compliance.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col gap-8 justify-start py-10 px-8 border-[1.67px] rounded-[10.47px] ${
                  index === data.length - 1
                    ? "-bg-section rounded-tr-[83.75px]"
                    : ""
                }`}
            >
              <div className="-bg-light-blue w-[56.87px] h-[56.87px] flex justify-center items-center rounded-[13.44px]">
                <Image
                  src={item.icon.src}
                  alt="icon"
                  width={item.icon.width}
                  height={item.icon.height}
                />
              </div>

              <h6 className="-text-heading-dark-gray text-[18.88px] leading-[24.54px] h-[50px] font-medium">
                {item.title}
              </h6>
              <p className="-text-paragraph-light text-[15.27px] leading-[22.91px] h-[92px]">
                {item.description}
              </p>

              <Link href="/" className="inline-block">
                <div
                  className={`w-[54.44px] h-[54.44px] rounded-full inline-flex justify-center items-center ${
                    index === data.length - 1
                      ? "-bg-light-blue"
                      : "border-[1.68px] -border-light-gray"
                  }`}
                >
                  <Image
                    src={item.arrowIcon.src}
                    alt="arrow icon"
                    width={item.arrowIcon.width}
                    height={item.arrowIcon.height}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <LinkButtonArrow
            href="/"
            text="VIEW ALL"
            className="bg-transparent border-[1.67px] -border-light-blue -text-light-blue hover:text-white transition-colors duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
