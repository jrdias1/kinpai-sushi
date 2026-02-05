import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  images,
  autoPlayInterval = 3000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-[#0f0f0f]/40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#C5A059] w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-white/70 text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
