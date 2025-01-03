import BackgroundImage from "/public/industry-background-image.png";
import ImageOne from "/public/industry-image-one.png";
import ImageTwo from "/public/industry-image-two.png";
import ImageThree from "/public/industry-image-three.png";
import ImageFour from "/public/industry-image-four.png";
import ImageFive from "/public/industry-image-five.png";
import ImageSix from "/public/industry-image-six.png";
import ImageSeven from "/public/industry-image-seven.png";
import ImageEight from "/public/industry-image-eight.png";
import ImageNine from "/public/industry-image-nine.png";
import ImageTen from "/public/industry-image-ten.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import SectionHeading from "../components/SectionHeading";
import LinkButton from "../components/LinkButton";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const data = [
  {
    image: { src: ImageOne, alt: "image one", width: 370, height: 408 },
    title: "Retail",
  },
  {
    image: { src: ImageTwo, alt: "image two", width: 370, height: 408 },
    title: "Distribution",
  },
  {
    image: { src: ImageThree, alt: "image three", width: 370, height: 408 },
    title: "Construction",
  },
  {
    image: { src: ImageFour, alt: "image four", width: 370, height: 408 },
    title: "Public Sector",
  },
  {
    image: { src: ImageFive, alt: "image five", width: 370, height: 408 },
    title: "Mining",
  },
  {
    image: { src: ImageSix, alt: "image six", width: 370, height: 408 },
    title: "Manufacturing",
  },
  {
    image: { src: ImageSeven, alt: "image seven", width: 370, height: 408 },
    title: "Automotive",
  },
  {
    image: { src: ImageEight, alt: "image eight", width: 370, height: 408 },
    title: "Healthcare",
  },
  {
    image: { src: ImageNine, alt: "image nine", width: 370, height: 408 },
    title: "Technology",
  },
  {
    image: { src: ImageTen, alt: "image ten", width: 370, height: 408 },
    title: "Fashion & Apparel",
  },
];

export default function IndustriesWeServe() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-24">
        <HeadingBlueBubble text="WHERE WE SERVE" />

        <div
          className="flex overflow-x-clip py-8 mt-8"
          style={{
            backgroundImage: `url(${BackgroundImage.src})`,
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {data.map((item, index) => (
                  <>
                    <Link href="/">
                      <div
                        key={index}
                        className="relative rounded-[10.13px] flex-shrink-0"
                      >
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={item.image.width}
                          height={item.image.height}
                        />

                        <h6 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[26px] leading-[35.62px] font-medium text-center">
                          {item.title}
                        </h6>
                      </div>
                    </Link>
                  </>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading
            heading="Industries We Serve"
            paragraph="The KAISPE Vendor Portal is designed to serve a wide range of industries. Whether you’re in Retail, Distribution, Construction, Public Sector, Mining, or beyond, our platform can be customized to meet your specific needs and enhance your vendor relationships."
          />
          <LinkButton href="/" text="DISCOVER MORE" />
        </div>
      </div>
    </section>
  );
}
