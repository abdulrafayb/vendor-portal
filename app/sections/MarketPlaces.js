import IconOne from "/public/marketplace-icon-one.png";
import IconTwo from "/public/marketplace-icon-two.png";
import IconThree from "/public/marketplace-icon-three.png";
import IconFour from "/public/marketplace-icon-four.png";
import IconFive from "/public/marketplace-icon-five.png";
import IconSix from "/public/marketplace-icon-six.png";
import IconSeven from "/public/marketplace-icon-seven.png";
import IconEight from "/public/marketplace-icon-eight.png";

import Image from "next/image";

const data = [
  {
    icon: { src: IconOne, width: 205.3, height: 62.92 },
  },
  {
    icon: { src: IconTwo, width: 180, height: 65.35 },
  },
  {
    icon: { src: IconThree, width: 218, height: 67.01 },
  },
  {
    icon: { src: IconFour, width: 174, height: 53.49 },
  },
  {
    icon: { src: IconFive, width: 183, height: 56.53 },
  },
  {
    icon: { src: IconSix, width: 208.2, height: 64 },
  },
  {
    icon: { src: IconSeven, width: 216, height: 66.4 },
  },
  {
    icon: { src: IconEight, width: 209, height: 35.52 },
  },
];

export default function MarketPlaces() {
  return (
    <section>
      <div className="custom-container mb-24">
        <h3 className="-text-heading-dark-blue text-[36px] leading-[49.32px] text-center mb-12 font-semibold">
          Available on Leading Marketplaces
        </h3>

        <div className="grid grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex justify-center items-center p-6 rounded-[16.66px] border-[1.9px] -border-light-gray before:content-[''] before:absolute before:left-[5px] before:right-[5px] before:bottom-[-10px] before:h-[70px] before:border before:-border-light-gray before:rounded-[16.66px] before:bg-[#ebebeb] before:-z-10 
                ${
                  index === 0
                    ? "-bg-light-blue before:!bg-[#0055FF40]"
                    : "-bg-section"
                }
              `}
            >
              <Image
                src={item.icon.src}
                alt="icon"
                width={item.icon.width}
                height={item.icon.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
