import IconOne from "/public/procurement-icon-two.png";
import IconTwo from "/public/procurement-icon-two.png";
import SectionImage from "/public/procurement-image.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";

import Image from "next/image";
import LinkButton from "../components/LinkButton";

const data = [
  {
    icon: { src: IconOne, width: 43.92, height: 46 },
    title: "Vendor Quotation",
    description:
      "Vendors can effortlessly submit quotations for requested products, simplifying the negotiation process for businesses seeking the best deals.",
  },
  {
    icon: { src: IconTwo, width: 43.92, height: 46 },
    title: "Contract Management",
    description: `Draft and manage contracts or agreements directly within the portal, eliminating confusion and ensuring clarity in business relationships.`,
  },
];

export default function ProcurementWorkflow() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-12 items-center justify-center mb-24 px-[90px]">
        <div>
          <Image
            src={SectionImage}
            alt="screen image"
            width={639.24}
            height={500}
          />
        </div>

        <div className="flex flex-col p-2 -text-paragraph-light text-[17px]">
          <HeadingBlueBubble
            text="GET TO KNOW"
            className="justify-items-start"
          />
          <h3 className="-text-heading-dark-blue text-[34px] leading-[51px] mb-7 font-semibold">
            Streamlined Procurement Workflow Vendor Management Portal
          </h3>
          <p className="mb-7 pr-12">
            Our Vendor Portal streamlines the procurement workflow, ensuring
            every step, from product requests to invoicing, is optimized for
            efficiency. The portal offers an array of features to facilitate a
            smooth procurement process.
          </p>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 justify-start items-start mb-7 pr-8"
            >
              <Image
                src={item.icon.src}
                alt="icon"
                width={item.icon.width}
                height={item.icon.height}
              />

              <div className="flex flex-col gap-2">
                <h3 className="-text-dark-gray text-[17px] leading-[22.1px] font-medium">
                  {item.title}
                </h3>
                <p className="-text-paragraph-light text-[14px] leading-[21px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-start">
            <LinkButton href="/" text="View More" className="text-white " />
          </div>
        </div>
      </div>
    </section>
  );
}
