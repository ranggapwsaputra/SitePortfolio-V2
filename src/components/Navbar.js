import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { XIcon, GithubIcon, LinkedInIcon} from './Icons';
import { motion } from 'framer-motion';
import ThemeSwitcher from './hooks/ThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
  <Link
    href={href}
    className={`${className} relative group px-3 py-1 rounded transition-all duration-300
      ${router.asPath === href
        ? 'bg-dark text-light underline underline-offset-4 decoration-light'
        : 'text-dark dark:text-light hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
  >
    {title}
    {router.asPath !== href && (
      <span
        className="h-[1px] inline-block bg-dark dark:bg-light
          absolute left-0 -bottom-0.5 w-0
          group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    )}
  </Link>
);
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = ThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-31 py-8 font-medium flex items-center justify-between bg-light dark:text-light relative z-10 lg:px-16 z-1 md:px-12 sm:px-8">

      {/* Burger Button */}
      <button
        className="flex flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block ease-out h-0.5 w-6 rounded-sm transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
        ></span>
        <span
          className={`bg-dark block ease-out h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 transform ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`bg-dark block ease-out h-0.5 w-6 rounded-sm transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
        ></span>
      </button>

      {/* Desktop Nav */}
      <div className="w-full px-32 py-8 font-medium flex items-center justify-between lg:hidden">
        <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>

      {/* Desktop Icons */}
      <nav className="flex items-center justify-center flex-wrap lg:hidden">
        <motion.a
          href="https://github.com/ranggapwsaputra"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/ranggapwsaputra"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 rounded-full"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://x.com/ranggapwsaputra"
          target="_blank"
          aria-label="X"
          className="w-6 mx-3"
        >
          <XIcon className="text-dark" />
        </motion.a>
      </nav></div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            <CustomMobileLink href="/articles" title="Articles" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://github.com/ranggapwsaputra"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-light rounded-full dark:bg-light sm:mx-1"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ranggapwsaputra"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 rounded-full sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://x.com/ranggapwsaputra"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 bg-light rounded-full dark:bg-light sm:mx-1"
            >
              <XIcon />
            </motion.a>
          </nav>
        </motion.div>
      )}

      {/* Logo */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
