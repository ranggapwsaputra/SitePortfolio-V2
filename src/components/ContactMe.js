import React from 'react'
import { CircleText } from './Icons'
import Link from 'next/link';

const ContactMe = () => {
  return (
    <div className='fixed right-3 bottom-3 z-[9999]
    flex items-center justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-0 md:bottom-auto
    sm:right-0
    '>
        <div className='w-40 h-auto items-center justify-center relative md:w-24'>
        <CircleText className={"fill-dark animate-spin-slow"} />

        <Link
          href="https://t.me/ranggapwsaputra"
          target="_blank"
          className="flex items-center justify-center absolute right-1/2 top-0 translate-x-1/2 translate-y-1/2 bg-dark
          text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
          font-semibold hover:bg-light hover:text-dark

          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          
          md:w-12 md:h-12 md:text-[10px]
          "
        >
          Contact
        </Link>
        </div>
    </div>
  )
}

export default ContactMe
