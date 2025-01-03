import HeadingBlueBubble from "../components/HeadingBlueBubble";
import LinkButtonArrow from "../components/LinkButtonArrow";

export default function IntegrateFaster() {
  return (
    <section className="-bg-section py-16 px-[365px] mb-24">
      <div className="custom-container">
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <HeadingBlueBubble text="QUICK CONNECTION" />
          <h4 className="-text-heading-dark-blue text-[36px] leading-[49.32px] font-semibold">
            Integrate Faster with Our API Documentation
          </h4>
          <p className="-text-paragraph-light text-[17px] leading-[25.5px]">
            Looking to connect your existing systems with the KAISPE Vendor
            Portal? Our easy-to-follow API documentation makes it effortless to
            integrate with your ERP, CRM, or custom applications. Whether
            you&apos;re adding new workflows or syncing data across platforms,
            we&apos;ve got you covered.
          </p>
          <h6 className="-text-paragraph-light text-[20px] leading-[30px] font-medium">
            Start your integration journey today and unlock the full potential
            of our portal!
          </h6>
          <LinkButtonArrow
            href="/"
            text="API DOCUMENT"
            className="bg-transparent border-[1.67px] -border-light-blue -text-light-blue hover:text-white transition-colors duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
