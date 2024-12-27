import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function LinkButton({
  href = '/',
  text,
  className = '',
  target = '_self',
  ...props
}) {
  return (
    <div className='text-center'>
      <Link href={href} target={target} className='group'>
        <div
          className={twMerge(
            'relative -bg-button-light px-6 py-3 rounded-full text-[15px] inline-block w-auto',
            className
          )}
          {...props}
        >
          <div className='relative z-20'>{text}</div>
          <div className='absolute top-0 right-0 w-[46px] h-full -bg-button-dark rounded-full z-10 group-hover:w-full transition-all duration-500 ease-in-out'></div>
        </div>
      </Link>
    </div>
  );
}
