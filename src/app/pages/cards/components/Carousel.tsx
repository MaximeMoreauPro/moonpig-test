import React, { useState } from 'react';

import { CardImage } from './CardItemUI/CardItemUI.styled';

type CarouselProps = {
  images: string[];
  className?: string;
};

export function Carousel({ images, className }: CarouselProps) {
  const { currentImage, canGoPrevious, previous, canGoNext, next } =
    useCarouselNav(images);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className={className}
    >
      <button
        disabled={!canGoPrevious}
        aria-disabled={!canGoPrevious}
        aria-label="Show previous image"
        onClick={previous}
      >
        &#8592;
      </button>
      {<CardImage src={images[currentImage]} />}
      <button
        disabled={!canGoNext}
        aria-disabled={!canGoNext}
        aria-label="Show next image"
        onClick={next}
      >
        &#8594;
      </button>
    </div>
  );
}

const useCarouselNav = (images: string[]) => {
  const imagesCount = images.length;
  const [currentImage, setCurrentImage] = useState(0);

  const canGoPrevious = currentImage > 0;
  const previous = () => {
    setCurrentImage(currentImage - 1);
  };

  const canGoNext = currentImage < imagesCount - 1;
  const next = () => {
    setCurrentImage(currentImage + 1);
  };

  return {
    currentImage,
    canGoPrevious,
    previous,
    canGoNext,
    next,
  };
};
