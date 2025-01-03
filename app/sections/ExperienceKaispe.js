import BackgroundImage from "/public/experience-kaispe-image-one.png";
import LinkButtonArrow from "../components/LinkButtonArrow";

export default function ExperienceKaispe() {
  return (
    <section
      className="-bg-section mb-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage.src}')`,
      }}
    >
      <div className="custom-container flex flex-col justify-center items-center text-center p-20 gap-12">
        <h4 className="text-[32px] leading-[48px] -text-heading-dark-gray px-36 font-medium">
          Experience KAISPE Vendor Portal at No Cost—Transform Your Business
          Today!
        </h4>
        <p className="text-[18px] leading-[27px] -text-paragraph-light px-2">
          Ready to take your vendor operations to the next level? Start with our
          Free Plan and experience everything KAISPE has to offer—manage
          vendors, create orders quickly, generate RFQs, and streamline your
          daily tasks. No credit card required—just powerful, easy-to-use tools
          designed to help your business thrive.
        </p>
        <LinkButtonArrow href="/" text="Start for Free" />
      </div>
    </section>
  );
}
