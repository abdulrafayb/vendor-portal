import IconOne from "/public/features-icon-one.png";
import IconTwo from "/public/features-icon-two.png";
import IconThree from "/public/features-icon-three.png";
import IconFour from "/public/features-icon-four.png";
import ArrowIconBlue from "/public/features-arrow-right-blue.png";
import ArrowIconWhite from "/public/features-arrow-right-white.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import LinkButtonArrow from "../components/LinkButtonArrow";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: { src: IconOne, width: 33, height: 32 },
    title: "Customizable Permission Controls",
    description:
      "Assign unique user access levels, ensuring secure and personalized data views.",
    LinkText: "See Details",
    LinkIcon: ArrowIconBlue,
    Link: "https://expenseapp.kaispe.com/",
  },
  {
    icon: { src: IconTwo, width: 31, height: 31 },
    title: "Purchase Order",
    description: `It offers businesses the convenience to effortlessly draft detailed purchase orders, specifying quantities, prices, and delivery terms.`,
    LinkText: "See Details",
    LinkIcon: ArrowIconBlue,
    Link: "https://loanapp.kaispe.com/",
  },
  {
    icon: { src: IconThree, width: 33, height: 33 },
    title: "Modernized Vendor Management",
    description:
      "Move beyond spreadsheets to leverage notifications, collaboration tools, and automated workflows.",
    LinkText: "See Details",
    LinkIcon: ArrowIconWhite,
    Link: "https://prapp.kaispe.com/",
  },
  {
    icon: { src: IconFour, width: 33, height: 34 },
    title: "End-to-End Transparency",
    description: "Track purchase orders, invoices, and payments with ease.",
    LinkText: "See Details",
    LinkIcon: ArrowIconBlue,
    Link: "https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksptimeapp_free?tab=Overview",
  },
];

export default function FeatureFunctionalities() {
  return (
    <section>
      <div className="custom-container mb-24">
        <div className="flex flex-col justify-center items-center">
          <HeadingBlueBubble text="WHAT WE DO FOR YOU" />
          <h2 className="text-[35px] leading-[47.95px] -text-dark-blue px-80 text-center mb-12 font-semibold">
            Feature and Functionalities of Vendor Portal
          </h2>

          <div className="grid grid-cols-4 gap-9 mb-16">
            {data.map((item, index) => (
              <div
                key={index}
                className={`
                  border-[1.9px] -border-light-gray py-8 px-6 rounded-2xl flex flex-col -text-dark-gray
                  ${index === 2 ? "-bg-light-blue !text-white" : ""} ${
                  index % 2 === 1 ? "mt-14" : "mb-14"
                }
                `}
              >
                <div className="flex justify-start items-center">
                  <div
                    className={`flex-inline bg-[#6A54B01A] p-4 rounded-2xl mb-6 relative ${
                      index === 2 ? "bg-white" : ""
                    }`}
                  >
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "top-[1.25px]  -translate-y-1/2"
                          : "bottom-[1.25px] translate-y-1/2"
                      } left-1/2 -translate-x-1/2 border-[2px] -border-light-blue rounded-full w-[26px]`}
                    ></div>
                    <Image
                      src={item.icon.src}
                      alt="icon"
                      width={item.icon.width}
                      height={item.icon.height}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-10">
                  <h3 className="text-[18.68px] leading-[24.28px] font-medium">
                    {item.title}
                  </h3>
                  <p
                    className={`-text-paragraph-light text-[15.11px] leading-[22.66px] ${
                      index === 2 ? "!text-white" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col flex-grow justify-end">
                  <Link
                    href={item.Link}
                    target="_blank"
                    className="inline-flex self-start gap-3 items-center"
                  >
                    <div className="text-[15px] font-medium">
                      {item.LinkText}
                    </div>
                    <Image src={item.LinkIcon} alt="arrow icon" width={17} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <LinkButtonArrow text="View All Features" />
        </div>
      </div>
    </section>
  );
}
