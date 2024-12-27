import HeroImage from "/public/hero-image.png";
import LinkButtonArrow from "../components/LinkButtonArrow";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="relative z-10 flex justify-center items-center py-4 mb-24">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
          <div className="p-2 pl-40 flex flex-col gap-8 justify-center">
            <h1 className="-text-dark-blue text-[48px] leading-[69.12px] font-semibold">
              Empowering Business Relationships with Vendor Portal
            </h1>
            <p className="-text-paragraph-light font-normal text-[17px] leading-[25.5px] mb-6">
              Sort your raw data of vendors by bringing it to one platform of
              the Vendor Portal by KAISPE. Maximize your business communication
              and efficiency to streamline purchase orders, contracts, vendor
              management and making the entire process more organized and
              efficient.
            </p>
            <div className="flex gap-8 items-center">
              <LinkButtonArrow
                href="https://outlook.office365.com/book/KAISPE6@NETORGFT2992819.onmicrosoft.com/"
                target="_blank"
                text="Book A Demo"
              />
              <Link
                href="/contact"
                className="border-2 -border-dark-blue px-12 py-3 rounded-full text-[15.4px] -text-dark-blue font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="p-2 relative">
            <Image
              src={HeroImage}
              alt="hero image"
              width={722.81}
              height={564}
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[407px] h-screen bg-[#E6EEFF] opacity-60 -z-10"></div>
    </section>
  );
}
