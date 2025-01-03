"use client";

import logoImage from "/public/logo.png";
import ArrowDown from "/public/arrow-down.png";
import IconOne from "/public/header-icon-one.png";
import IconTwo from "/public/header-icon-two.png";
import IconThree from "/public/header-icon-three.png";
import IconFour from "/public/header-icon-four.png";
import IconFive from "/public/header-icon-five.png";
import IconSix from "/public/header-icon-six.png";
import IconSeven from "/public/header-icon-seven.png";
import LinkButton from "../components/LinkButton";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HoverMenu from "../components/HoverMenu";

const solutionsData = [
  {
    icon: { src: IconOne, width: 25, height: 25 },
    linkName: "Features",
    linkDescription: "Simplified Procurement and Collaboration",
  },
  {
    icon: { src: IconTwo, width: 28, height: 28 },
    linkName: "Capabilities",
    linkDescription: "Efficient, Collaborative, Scalable Solutions",
  },
  {
    icon: { src: IconThree, width: 26, height: 27.53 },
    linkName: "Insights",
    linkDescription: "Actionable Data, Smarter Decisions",
  },
  {
    icon: { src: IconFour, width: 33, height: 35 },
    linkName: "AI Solutions",
    linkDescription: "Intelligent, Scalable, Data-Driven Insights",
  },
];

const resourcesData = [
  {
    icon: { src: IconFive, width: 28, height: 29.08 },
    linkName: "Integration",
    linkDescription: "Seamless Connectivity and Efficiency",
  },
  {
    icon: { src: IconSix, width: 30, height: 30 },
    linkName: "Documentation",
    linkDescription: "Comprehensive Guides and Resources",
  },
  {
    icon: { src: IconSeven, width: 30, height: 30 },
    linkName: "FAQs",
    linkDescription: "Answers Frequently Asked Questions",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="-bg-header shadow-[0_4px_30px_0_rgba(0,0,0,0.06)]">
      <div className="custom-container relative z-10">
        <div className="flex justify-between items-center h-[118px] text-[15px] font-medium">
          <div>
            <Link href="/">
              <Image
                priority
                src={logoImage}
                alt="logo"
                width={176.07}
                height={49.48}
              />
            </Link>
          </div>

          <div>
            <nav className="flex -text-light-gray gap-10">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Home
              </Link>

              <Link
                href="/industries"
                className={`${
                  pathname === "/industries"
                    ? "-text-light-blue"
                    : "-text-light-gray"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/solutions"
                className={`${
                  pathname === "/solutions"
                    ? "-text-light-blue"
                    : "-text-light-gray"
                } flex items-center gap-2`}
              >
                Solutions
                <Image
                  src={ArrowDown}
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              </Link>

              <Link
                href="/resources"
                className={`${
                  pathname === "/resources"
                    ? "-text-light-blue"
                    : "-text-light-gray"
                } flex items-center gap-2`}
              >
                Resources
                <Image
                  src={ArrowDown}
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              </Link>

              <Link
                href="/pricing"
                className={`${
                  pathname === "/pricing"
                    ? "-text-light-blue"
                    : "-text-light-gray"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "-text-light-blue"
                    : "-text-light-gray"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="-text-light-gray">
              Sign In
            </Link>

            <LinkButton
              href="https://kspcs.powerappsportals.com/customer-landing/"
              text="Support Portal"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
