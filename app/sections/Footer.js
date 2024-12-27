import FooterImage from '/public/footer-image.png';
import KaispeLogo from '/public/kaispe-logo-white.png';
import MicrosoftLogo from '/public/microsoft-logo.png';
import MicrosoftPurpleLogo from '/public/microsoft-purple-logo.png';
import MicrosoftBlueLogo from '/public/microsoft-blue-logo.png';
import LinkedInLogo from '/public/linkedin-logo.png';
import FacebookLogo from '/public/facebook-logo.png';
import WebsiteLogo from '/public/website-logo.png';
import YoutubeLogo from '/public/youtube-logo.png';

import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';

export default function Footer() {
  return (
    <footer>
      <div className='custom-container'>
        <div className='-bg-footer-card rounded-3xl relative overflow-hidden flex justify-between -mb-52 px-12 gap-20 py-2'>
          <div className='flex flex-[1.2] flex-col py-16 gap-12'>
            <p className='text-[29px] leading-[43.5px] -text-heading-dark'>
              Are you as excited about our vendor self service portal as we are?
            </p>

            <div className='flex gap-4'>
              <LinkButton
                href='https://outlook.office365.com/book/KAISPE6@NETORGFT2992819.onmicrosoft.com/'
                text='Book A Demo'
                target='_blank'
              />
              <Link
                href='/contact'
                className='border-2 border-white px-8 py-2.5 rounded-2xl text-[15.4px] text-white'
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className='flex flex-1'>
            <Image
              src={FooterImage}
              alt='footer-image'
              className='object-contain object-center w-full h-full'
              width={527.54}
              height={262.61}
            />
          </div>
        </div>
      </div>

      <div className='-bg-footer h-[681px] flex flex-col justify-end -text-light-white'>
        <div className='w-[1180px] flex gap-12 mx-auto'>
          <div className='flex-[1.5] flex flex-col gap-8'>
            <Image src={KaispeLogo} alt='kaispe logo' />
            <p className='text-[15.53px] font-normal pr-36'>
              KAISPE has been providing solutions and services to customers
              using Microsoft Dynamics, Azure, Power Platform, Oracle NetSuite,
              mobile and web app development.
            </p>
            <div className='flex gap-4 items-center'>
              <div className='text-white'>
                <p className='text-[10.53px] -mb-1'>Gold</p>
                <p className='text-[19.25px]'>Microsoft Partner</p>
                <div className='flex justify-end mt-1'>
                  <Image
                    src={MicrosoftLogo}
                    alt='microsoft logo'
                    width={58}
                    height={15}
                  />
                </div>
              </div>
              <Image
                src={MicrosoftPurpleLogo}
                alt='microsoft logo'
                width={65}
                height={65}
              />
              <Image
                src={MicrosoftBlueLogo}
                alt='microsoft logo'
                width={65}
                height={65}
              />
            </div>
          </div>

          <div className='flex-[1] flex flex-col gap-8'>
            <div className='flex flex-col gap-3'>
              <p className='text-[20.71px] font-semibold text-white'>Email</p>
              <div className='relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-orange mb-1'></div>
              <p className='text-[15.53px] font-normal'>info@kaispe.com</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[20.71px] font-semibold text-white'>
                Contact Number
              </p>
              <div className='relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-orange mb-1'></div>
              <p className='text-[15.53px] font-normal'>
                USA : (+1) 315 791 4472
              </p>
              <p className='text-[15.53px] font-normal'>
                PAK : (+92) 213 432 6085
              </p>
            </div>
          </div>

          <div className='flex-[1] flex flex-col gap-4'>
            <p className='text-[20.71px] font-semibold text-white'>Address</p>
            <div className='relative before:absolute before:left-0 before:top-1/2 before:w-[34px] before:h-[3px] before:-bg-orange mb-1'></div>
            <p className='text-[15.53px] font-normal'>
              415 W. Golf Rd Suite 55-K Arlington Heights, IL 60005.
            </p>
            <p className='text-[15.53px] font-normal'>
              Meydan Grandstand 6th Floor, Meydan Road, Nada Al Sheba Dubai, UAE
            </p>
            <p className='text-[15.53px] font-normal'>
              Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.
            </p>
            <div className='flex gap-2'>
              <div className='border-2 rounded-full border-gray-300 p-1'>
                <Link
                  href='https://www.linkedin.com/company/kaispe'
                  target='_blank'
                >
                  <Image
                    src={LinkedInLogo}
                    alt='linkedin logo'
                    width={14.5}
                    height={14.5}
                  />
                </Link>
              </div>
              <div className='border-2 rounded-full border-gray-300 p-1'>
                <Link href='https://www.facebook.com/Kaispeco' target='_blank'>
                  <Image
                    src={FacebookLogo}
                    alt='facebook logo'
                    width={14.5}
                    height={14.5}
                  />
                </Link>
              </div>
              <div className='border-2 rounded-full border-gray-300 p-1'>
                <Link href='https://www.kaispe.com/' target='_blank'>
                  <Image
                    src={WebsiteLogo}
                    alt='website logo'
                    width={14.5}
                    height={14.5}
                  />
                </Link>
              </div>
              <div className='border-2 rounded-full border-gray-300 p-1 flex items-center justify-center'>
                <Link href='https://www.youtube.com/@kaispe' target='_blank'>
                  <Image
                    src={YoutubeLogo}
                    alt='youtube logo'
                    width={14.5}
                    height={14.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center pt-12 pb-8 px-8 flex flex-col gap-8'>
          <div className='relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[1179px] before:border-t-[0.4px] before:border-white before:opacity-50 mx-auto'></div>
          <p>
            &copy; 2025&nbsp;
            <Link
              href='https://www.kaispe.com/'
              className='text-[#987EFF] underline'
              target='_blank'
            >
              KAISPE
            </Link>
            <span className='text-[#987EFF]'>.</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
