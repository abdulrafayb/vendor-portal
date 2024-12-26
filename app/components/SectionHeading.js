export default function SectionHeading({ heading, paragraph }) {
  return (
    <div className="text-center">
      <h2 className="-text-dark text-[32px] leading-[48px] px-64 mb-8 font-medium">
        {heading}
      </h2>
      <p className="-text-light-dark text-[18px] leading-[27px] px-28 mb-12">
        {paragraph}
      </p>
    </div>
  );
}
