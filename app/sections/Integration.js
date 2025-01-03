import SectionImage from "/public/integration-image.png";
import HeadingBlueBubble from "../components/HeadingBlueBubble";
import LinkButton from "../components/LinkButton";

import Image from "next/image";

export default function Integration() {
  return (
    <section>
      <div className="custom-container grid grid-cols-2 gap-32 mb-24">
        <div className="flex flex-col gap-2 justify-center items-start -text-dark-gray">
          <HeadingBlueBubble text="INTEGRATION" />
          <h4 className="text-[36px] leading-[54px] font-semibold mb-6">
            Seamless Integration
          </h4>
          <p className="text-[18px] leading-[27px] -text-paragraph-light mb-8 pr-8">
            The KAISPE Vendor Portal seamlessly integrates with your existing
            systems, including inventory management, CRM, and leading ERP
            solutions such as Microsoft Dynamics 365 Finance and Supply Chain,
            SAP, and Oracle, ensuring accurate data synchronization and enhanced
            operational efficiency.
          </p>
          <LinkButton href="/" text="Learn More" className="text-white px-8" />
        </div>

        <div className="flex items-center h-full">
          <Image
            src={SectionImage}
            alt="integration image"
            width={543.53}
            height={362}
          />
        </div>
      </div>
    </section>
  );
}
