export default function HeadingBlueBubble({
  text,
  className = "",
  textClassName = "",
  ...props
}) {
  return (
    <div className="flex">
      <div
        className={`inline-flex justify-center items-center mb-4 rounded-full -bg-heading py-1.5 px-6 font-medium ${className}`}
        {...props}
      >
        <p className={`-text-light-blue text-[16.63px] ${textClassName}`}>
          {text}
        </p>
      </div>
    </div>
  );
}
