import HeadingBlueBubble from "../components/HeadingBlueBubble";
import SectionHeading from "../components/SectionHeading";

export default function VendorOnboarding() {
  return (
    <section className="-bg-section py-12">
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center">
          <HeadingBlueBubble text="SUPPLIER ONBOARDING" />
          <SectionHeading
            heading="Simplified Vendor Onboarding"
            paragraph="Say goodbye to the hassle of rushing suppliers, digging for information, or dealing with tedious manual work. Simplify your processes and access the supplier details your business needs to stay compliant, minimize risk, and ensure timely vendor payments with ease."
          />
        </div>
      </div>
    </section>
  );
}
