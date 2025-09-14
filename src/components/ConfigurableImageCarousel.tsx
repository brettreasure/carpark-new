'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import InstructionModal from './InstructionModal';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ConfigurableImageCarouselProps {
  images: CarouselImage[];
}

const ConfigurableImageCarousel = ({ images }: ConfigurableImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [carouselLoaded, setCarouselLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carousel loading and instruction modal timing
  useEffect(() => {
    setCarouselLoaded(true);
    
    if (isMobile) {
      // For mobile: show modal immediately on first page load
      const timer = setTimeout(() => setShowInstructions(true), 500);
      return () => clearTimeout(timer);
    } else {
      // For desktop: normal 2-second delay
      const timer = setTimeout(() => setShowInstructions(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Mobile fallback: show modal on any touch interaction if not shown yet
  useEffect(() => {
    if (!isMobile) return;
    
    const handleTouch = () => {
      if (!showInstructions && carouselLoaded) {
        setShowInstructions(true);
      }
    };

    document.addEventListener('touchstart', handleTouch, { once: true, passive: true });
    return () => document.removeEventListener('touchstart', handleTouch);
  }, [showInstructions, carouselLoaded, isMobile]);

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
    <div className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream via-blue-gray/10 to-orange/5 
relative">
      {/* Mobile Navigation Arrows - positioned at screen edges */}
      {currentIndex > 0 && (
        <button
          onClick={prevImage}
          className="md:hidden absolute left-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all 
duration-200 group"
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
      )}

      <button
        onClick={nextImage}
        className="md:hidden absolute right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all 
duration-200 group"
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
        <div className="relative h-full max-h-[80vh] aspect-[2/3] bg-black shadow-2xl rounded-lg overflow-hidden">
          {/* Desktop arrows - positioned inside image container at edges */}
          {currentIndex > 0 && (
            <button
              onClick={prevImage}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white 
rounded-full shadow-lg transition-all duration-200 group"
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
          )}

          <button
            onClick={nextImage}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white 
rounded-full shadow-lg transition-all duration-200 group"
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

      {/* Instruction Modal */}
      <InstructionModal 
        show={showInstructions} 
        onClose={() => setShowInstructions(false)}
        isMobile={isMobile}
      />
    </div>
  );
};

export default ConfigurableImageCarousel;