import SectionImage from "/public/documentation-image.png";
import IconOne from "/public/documentation-icon-one.png";
import IconTwo from "/public/documentation-icon-two.png";
import IconThree from "/public/documentation-icon-three.png";
import IconFour from "/public/documentation-icon-four.png";
import IconFive from "/public/documentation-icon-five.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";

import Image from "next/image";

const data = [
  {
    icon: { src: IconOne, width: 31.41, height: 31.41 },
    description:
      "Seamlessly duplicate RFQs and purchase orders to streamline procurement processes.",
  },
  {
    icon: { src: IconTwo, width: 35, height: 37 },
    description:
      "Generate RFQs, contracts, quote comparisons, and quotations effortlessly with intuitive tools.",
  },
  {
    icon: { src: IconThree, width: 34, height: 34 },
    description:
      "Produce professional invoices with ease, ensuring accuracy and professionalism.",
  },
  {
    icon: { src: IconFour, width: 34, height: 34 },
    description:
      "Conveniently print purchase orders and goods receipt notes for efficient record-keeping.",
  },
  {
    icon: { src: IconFive, width: 34, height: 34 },
    description:
      "Simplify quote comparisons and export quotations seamlessly with user-friendly features.",
  },
];

export default function Documentation() {
  return (
    <section className="-bg-section mb-24">
      <div className="custom-container">
        <div className="grid grid-cols-2 gap-16 py-12 items-center justify-center">
          <div>
            <Image src={SectionImage} alt="screen image" />
          </div>

          <div className="flex flex-col -text-paragraph-light text-[17px]">
            <HeadingBlueBubble
              text="DOCUMENTATION"
              className="justify-items-start"
            />
            <h3 className="-text-heading-dark-blue text-[36px] leading-[49.32px] mb-8 font-semibold">
              Effortless Document Generation
            </h3>

            {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 justify-start items-start mb-7 pr-8 bg-white p-5 rounded-[16.08px] border-[1.84px] -border-light-white"
              >
                <div className="-bg-section w-[56.28px] h-[58.95px] flex-shrink-0 flex justify-center items-center rounded-[13.93px]">
                  <Image
                    src={item.icon.src}
                    alt="icon"
                    width={item.icon.width}
                    height={item.icon.height}
                  />
                </div>

                <p className="-text-paragraph-light text-[16px] leading-[24px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
