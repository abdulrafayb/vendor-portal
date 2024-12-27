import IconOne from "/public/self-service-icon-one.png";
import IconTwo from "/public/self-service-icon-two.png";
import IconThree from "/public/self-service-icon-three.png";
import ScreenImage from "/public/vendor-self-service.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";

import Image from "next/image";

const data = [
  {
    icon: { src: IconOne, width: 43.95, height: 46 },
    title: "User-Friendly Interface",
    description:
      "Navigate the portal effortlessly, accessing critical information with just a few clicks.",
  },
  {
    icon: { src: IconTwo, width: 43.95, height: 46 },
    title: "Mobile Compatibility",
    description: `Access the vendor portal app on various devices including desktops, tablets, and mobile phones.`,
  },
  {
    icon: { src: IconThree, width: 43.95, height: 46 },
    title: "AI-Enhanced Quotation",
    description:
      "Experience future ready procurement with AI assisted quotations, helping you make optimal purchasing decisions.",
  },
];

export default function VendorSelfService() {
  return (
    <section>
      <div className="grid grid-cols-2 items-center justify-center mb-24">
        <div className="flex flex-col p-2 pl-40 pr-16 -text-paragraph-light text-[17px]">
          <HeadingBlueBubble
            text="WHAT WE DO FOR YOU"
            className="justify-items-start"
          />
          <h3 className="-text-heading-dark-blue text-[35px] leading-[47.95px] mb-7 font-semibold">
            Vendor Self Service Portal Enabling Easy Collaboration
          </h3>
          <p className="mb-7">
            Transform vendor interactions, streamline procurement, and boost
            efficiency with our Vendor Portal, empowering stronger relationships
            and business success.
          </p>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 justify-start items-start mb-7"
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
        </div>

        <div className="pr-16 relative z-10">
          <div className="absolute bg-[#E6EEFF99] w-[301px] h-[301px] rounded-full -top-9 right-9 -z-10"></div>
          <Image
            src={ScreenImage}
            alt="screen image"
            width={747.81}
            height={512}
          />
        </div>
      </div>
    </section>
  );
}
