"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoImage from "/public/logo.png";
import LinkButton from "../components/LinkButtonArrow";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="-bg-header">
      <div className="custom-container">
        <div className="flex justify-between items-center h-[118px] text-[17px] font-medium">
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
            <nav className="flex -text-dark gap-12">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Home
              </Link>

              <Link
                href="/features"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/industries"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Solutions
              </Link>

              <Link
                href="/pricing"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Resources
              </Link>

              <Link
                href="/contact"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={`${
                  pathname === "/" ? "-text-light-blue" : "-text-light-gray"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <Link
              href="/contact"
              className={`${
                pathname === "/" ? "-text-light-blue" : "-text-light-gray"
              }`}
            >
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
