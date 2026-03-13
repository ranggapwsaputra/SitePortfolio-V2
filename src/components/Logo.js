import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-1 md:right-auto md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0'>
            <MotionLink
                href="/"
                className='w-16 h-16 text-sm bg-black rounded-full p-1 font-semibold flex items-center justify-center'
                whileHover={{
                    backgroundColor: [
                        "#121212",
                        "rgba(131,58,180,1)",
                        "rgba(253,29,29,1)",
                        "rgba(252,176,69,1)",
                        "rgba(131,58,180,1)",
                        "#121212"
                    ],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >
                <span className="text-white mr-1 ">R</span>
                <span className="w-4 h-4 rounded bg-light text-black flex items-center justify-center">S</span>
            </MotionLink>
        </div>
    );
};

export default Logo;
