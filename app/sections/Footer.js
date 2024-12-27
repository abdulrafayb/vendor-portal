import FooterImage from "/public/footer-image.png";
import KaispeLogo from "/public/kaispe-logo-white.png";
import MicrosoftLogo from "/public/microsoft-logo.png";
import MicrosoftPurpleLogo from "/public/microsoft-purple-logo.png";
import MicrosoftBlueLogo from "/public/microsoft-blue-logo.png";
import LinkedInLogo from "/public/linkedin-logo.png";
import FacebookLogo from "/public/facebook-logo.png";
import WebsiteLogo from "/public/website-logo.png";
import YoutubeLogo from "/public/youtube-logo.png";

import Image from "next/image";
import Link from "next/link";
import LinkButtonArrow from "../components/LinkButtonArrow";

export default function Footer() {
  return (
    <footer>
      <div className="custom-container">
        <div className="-bg-footer-card rounded-3xl relative overflow-hidden flex justify-between -mb-52 px-12 gap-20">
          <div className="flex flex-[1.2] flex-col py-16 gap-12">
            <p className="text-[29px] leading-[43.5px] -text-heading-dark font-medium">
              Are you as excited about our vendor self service portal as we are?
            </p>

            <div className="flex gap-4">
              <LinkButtonArrow
                href="https://outlook.office365.com/book/KAISPE6@NETORGFT2992819.onmicrosoft.com/"
                text="Book A Demo"
                target="_blank"
                className="font-medium"
              />
              <Link
                href="/contact"
                className="border-2 -border-lighter-gray px-12 py-3 rounded-full text-[15.4px] -text-lighter-gray font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-1">
            <Image
              src={FooterImage}
              alt="footer-image"
              className="object-contain object-center w-full h-full"
              width={527.54}
              height={262.61}
            />
          </div>
        </div>
      </div>

      <div className="-bg-footer h-[661px] flex flex-col justify-end -text-light-white">
        <div className="custom-container">
          <div className="flex gap-12">
            <div className="flex-[2] flex flex-col gap-8">
              <Image src={KaispeLogo} alt="kaispe logo" />
              <p className="text-[13.17px]">
                KAISPE has been providing solutions and services to customers
                using Microsoft Dynamics, Azure, Power Platform, Oracle
                NetSuite, mobile and web app development.
              </p>
              <div className="flex gap-4 items-center">
                <div className="text-white">
                  <p className="text-[8.93px] -mb-1">Gold</p>
                  <p className="text-[16.33px]">Microsoft Partner</p>
                  <div className="flex justify-end mt-1">
                    <Image
                      src={MicrosoftLogo}
                      alt="microsoft logo"
                      width={50.23}
                      height={9.66}
                    />
                  </div>
                </div>
                <Image
                  src={MicrosoftPurpleLogo}
                  alt="microsoft logo"
                  width={55.14}
                  height={55.14}
                />
                <Image
                  src={MicrosoftBlueLogo}
                  alt="microsoft logo"
                  width={55.14}
                  height={55.14}
                />
              </div>
            </div>

            <div className="flex-[1] flex flex-col gap-8">
              <div className="flex flex-col gap-3 text-[14.48px] text-white">
                <p className="text-[19.31px] font-semibold">Overview</p>
                <div className="relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-light-blue mb-1"></div>
                <Link href="/">Industries</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Blogs</Link>
                <Link href="/">Customer Stories</Link>
                <Link href="/">Company</Link>
              </div>
            </div>

            <div className="flex-[1] flex flex-col gap-8">
              <div className="flex flex-col gap-3 text-[14.48px] text-white">
                <p className="text-[20.71px] font-semibold">Quick Access</p>
                <div className="relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-light-blue mb-1"></div>
                <Link href="/">Features</Link>
                <Link href="/">Capabilities</Link>
                <Link href="/">Insights</Link>
                <Link href="/">Integration</Link>
                <Link href="/">Documentation</Link>
                <Link href="/">Videos</Link>
              </div>
            </div>

            <div className="flex-[1.3] flex flex-col gap-8 text-[14.48px] text-white">
              <div className="flex flex-col gap-3">
                <p className="text-[19.31px] font-semibold text-white">Email</p>
                <div className="relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-light-blue mb-1"></div>
                <p>info@kaispe.com</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[19.31px] font-semibold text-white">
                  Contact Number
                </p>
                <div className="relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-light-blue mb-1"></div>
                <p>USA : (+1) 315 791 4472</p>
                <p>PAK : (+92) 213 432 6085</p>
              </div>
            </div>

            <div className="flex-[2] flex flex-col gap-4 text-[14.06px] text-white">
              <p className="text-[18.75px] font-semibold text-white">Address</p>
              <div className="relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-light-blue mb-1"></div>
              <p>415 W. Golf Rd Suite 55-K Arlington Heights, IL 60005.</p>
              <p>
                Meydan Grandstand 6th Floor, Meydan Road, Nada Al Sheba Dubai,
                UAE
              </p>
              <p>Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.</p>
              <div className="flex gap-2">
                <div className="border-2 rounded-full border-white p-1">
                  <Link
                    href="https://www.linkedin.com/company/kaispe"
                    target="_blank"
                  >
                    <Image
                      src={LinkedInLogo}
                      alt="linkedin logo"
                      width={13.13}
                      height={13.13}
                    />
                  </Link>
                </div>
                <div className="border-2 rounded-full border-white p-1">
                  <Link
                    href="https://www.facebook.com/Kaispeco"
                    target="_blank"
                  >
                    <Image
                      src={FacebookLogo}
                      alt="facebook logo"
                      width={13.13}
                      height={13.13}
                    />
                  </Link>
                </div>
                <div className="border-2 rounded-full border-white p-1">
                  <Link href="https://www.kaispe.com/" target="_blank">
                    <Image
                      src={WebsiteLogo}
                      alt="website logo"
                      width={13.13}
                      height={13.13}
                    />
                  </Link>
                </div>
                <div className="border-2 rounded-full border-white p-1 flex items-center justify-center">
                  <Link href="https://www.youtube.com/@kaispe" target="_blank">
                    <Image
                      src={YoutubeLogo}
                      alt="youtube logo"
                      width={13.13}
                      height={13.13}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 pb-8 flex flex-col gap-8">
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-screen before:border-t-[0.4px] before:border-white before:opacity-20 mx-auto"></div>
            <div className="flex justify-between">
              <p className="text-[17px]">
                &copy; 2025&nbsp;
                <Link
                  href="https://www.kaispe.com/"
                  className="-text-footer-link-blue underline"
                  target="_blank"
                >
                  KAISPE
                </Link>
                <span className="-text-light-blue">.</span> All Rights Reserved.
              </p>
              <p className="-text-footer-link-blue underline text-[18px]">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
