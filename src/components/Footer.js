import React from 'react';
import Layout from './Layout';
import { NextJsIcon } from './Icons'; 

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout transparent className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        
        <div className="flex items-center lg:py-2">
          Build With{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9786;
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Powered:</span>
          <NextJsIcon className="w-4 h-4 text-dark" />
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
