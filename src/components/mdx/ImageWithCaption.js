import Image from 'next/image';

export default function ImageWithCaption({ src, alt, caption }) {
  return (
    <div className="my-6 text-center">
      <div className="relative w-full max-w-2xl mx-auto aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-xl border border-gray-300 dark:border-gray-700"
        />
      </div>
      {caption && (
        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
