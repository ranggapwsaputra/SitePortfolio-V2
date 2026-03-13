import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

export default function ImageWithCaption({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <div className="my-8 text-center not-prose">
        <div
          className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-md bg-white dark:bg-neutral-800 cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt || caption || 'article image'}
            width={600}
            height={400}
            className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ display: 'block' }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full font-mono tracking-wide">
              Klik untuk perbesar
            </span>
          </div>
        </div>
        {caption && (
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic font-mono tracking-wide">
            {caption}
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsOpen(false)}
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-[10000] text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.25s ease-out' }}
          >
            <Image
              src={src}
              alt={alt || caption || 'article image'}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              style={{ display: 'block' }}
              quality={90}
            />
            {caption && (
              <p className="text-center mt-4 text-sm text-white/70 font-mono tracking-wide">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
