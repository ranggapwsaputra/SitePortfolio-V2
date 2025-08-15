import Image from 'next/image';
import React from 'react';


const sizeMap = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
};

const ArticleBannerImage = ({ src, alt, caption = '', size = 'lg' }) => {
  return (
    <div className={`w-full mx-auto mb-8 ${sizeMap[size]} relative`}>
      <div className="relative h-auto w-full rounded-2xl border-2 border-dark bg-light p-1 dark:border-light dark:bg-dark">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          className="w-full h-auto rounded-2xl"
          priority
        />
      </div>
      {caption && (
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400 italic">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ArticleBannerImage;
