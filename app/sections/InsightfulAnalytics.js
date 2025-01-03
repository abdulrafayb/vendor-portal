import IconOne from "/public/insightful-analytics-icon-one.png";
import IconTwo from "/public/insightful-analytics-icon-two.png";
import IconThree from "/public/insightful-analytics-icon-three.png";
import ImageOne from "/public/insightful-analytics-image-one.png";
import ImageTwo from "/public/insightful-analytics-image-two.png";
import ImageThree from "/public/insightful-analytics-image-three.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";

import Image from "next/image";

const data = [
  {
    icon: { src: IconOne, width: 38.7, height: 37.45 },
    image: { src: ImageOne, alt: "image one", width: 390, height: 437 },
    title: "Comprehensive Dashboard",
  },
  {
    icon: { src: IconTwo, width: 38, height: 42 },
    image: { src: ImageTwo, alt: "image two", width: 390, height: 437 },
    title: "Integration with ERPs",
  },
  {
    icon: { src: IconThree, width: 43, height: 42 },
    image: { src: ImageThree, alt: "image three", width: 390, height: 437 },
    title: "Real time Tracking",
  },
];

export default function InsightfulAnalytics() {
  return (
    <section className="-bg-section p-16 mb-24">
      <div className="custom-container">
        <div className="flex flex-col justify-center items-center text-center">
          <HeadingBlueBubble text="EASY TO KNOW" className="mb-6" />
          <h4 className="-text-heading-dark-blue text-[36px] leading-[49.32px] font-semibold mb-6">
            Insightful Analytics and Reporting
          </h4>
          <p className="-text-paragraph-light text-[17px] leading-[25.5px] px-28">
            Data driven decision making is the bedrock of modern business
            success. Our Vendor Portal offers insightful analytics and
            reporting. Your business can now have more automated operations,
            hence improving data sorting and vendor management through e order
            management and purchase order management.
          </p>

          <div className="grid grid-cols-3 gap-8 text-left mt-16">
            {data.map((item, index) => (
              <div key={index} className="relative rounded-[20px]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />

                <div className="absolute bottom-6 left-6 flex flex-col gap-8 pr-32 justify-start items-start">
                  <div className="bg-[#FFFFFF40] w-[70.23px] h-[70.23px] flex items-center justify-center rounded-[16.6px]">
                    <Image
                      src={item.icon.src}
                      alt="icon"
                      width={item.icon.width}
                      height={item.icon.height}
                    />
                  </div>

                  <h6 className="text-white text-[26px] leading-[35.62px] font-medium">
                    {item.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
