import ArrowRight from "/public/arrow-right.png";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function LinkButtonArrow({
  href = "/",
  text,
  className = "",
  target = "_self",
  ...props
}) {
  return (
    <div className="">
      <Link href={href} target={target} className="group">
        <div
          className={twMerge(
            "relative -bg-button-light pl-8 pr-16 py-3 rounded-full text-[16.3px] w-auto flex items-center",
            className
          )}
          {...props}
        >
          <div className="relative z-20">{text}</div>

          <div className="absolute top-0 right-0 w-[50px] h-full -bg-button-dark rounded-full z-10 group-hover:w-full transition-all duration-500 ease-in-out flex items-center justify-end pr-4">
            <Image src={ArrowRight} alt="arrow right" />
          </div>
        </div>
      </Link>
    </div>
  );
}
