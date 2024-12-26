import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function LinkButton({
  href = "/",
  text,
  className = "",
  target = "_self",
  ...props
}) {
  return (
    <div className="text-center">
      <div
        className={twMerge(
          "-bg-button px-6 py-2.5 rounded-2xl text-[16px] inline-block w-auto",
          className
        )}
        {...props}
      >
        <Link href={href} target={target}>
          {text}
        </Link>
      </div>
    </div>
  );
}
