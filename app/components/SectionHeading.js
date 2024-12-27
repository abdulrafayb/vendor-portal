export default function SectionHeading({ heading, paragraph }) {
  return (
    <div className="text-center">
      <h2 className="-text-heading-dark-blue text-[36px] leading-[49.32px] px-64 mb-8 font-semibold">
        {heading}
      </h2>
      <p className="-text-paragraph-light text-[17px] leading-[25.5px] px-40 mb-12">
        {paragraph}
      </p>
    </div>
  );
}
