import Image from "next/image";
import { Fragment } from "react";

export default function HoverMenu({ data }) {
  return (
    <div className="-bg-page inline-flex flex-col rounded-[10px]">
      {data.map((data, index) => {
        console.log(data, index);
        return (
          <Fragment key={index}>
            <ul
              className={`flex items-start gap-4 py-6 px-4 ${
                index === data.length - 1
                  ? "border-b-[1px] border-violet-900"
                  : ""
              }`}
            >
              {console.log(index !== data.length - 1)}
              <div
                className={`flex justify-center items-center w-[46.5px] h-[48.7px] rounded-[11.51px] ${
                  index === 0 ? "-bg-light-blue" : "bg-[#F0EEF7]"
                }`}
              >
                <Image
                  src={data.icon.src}
                  alt="icon"
                  width={data.icon.width}
                  height={data.icon.height}
                />
              </div>
              <div>
                <li className="text-[18px] -text-dark-gray">{data.linkName}</li>
                <li className="text-[14.82px] -text-paragraph-light">
                  {data.linkDescription}
                </li>
              </div>
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}
