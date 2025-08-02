'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const images: CarouselImage[] = [
    { src: '/snippets/1_Cover.png', alt: 'Book Cover' },
    { src: '/snippets/2_Filo1.png', alt: 'Page 2' },
    { src: '/snippets/3_Filo2.png', alt: 'Page 3' },
    { src: '/snippets/4_Wund1.png', alt: 'Page 4' },
    { src: '/snippets/5_Wund2.png', alt: 'Page 5' },
    { src: '/snippets/6_Back.png', alt: 'Back Cover' },
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Touch gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) prevImage();
    if (isRightSwipe) nextImage();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextImage, prevImage]);

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream via-blue-gray/10 to-orange/5 relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-dark-green group-hover:text-orange transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-dark-green group-hover:text-orange transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Container */}
      <div 
        className="relative w-full max-w-2xl h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-full max-h-[80vh] aspect-[2/3] bg-white shadow-2xl rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-orange shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;