import React, { useState } from 'react';

import { CardImage } from '../CardItemUI/CardItemUI.styled';
import { NavButton } from './Carousel.styled';

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
      <NavButton
        enabled={canGoPrevious}
        aria-label="Show previous image"
        onClick={previous}
      >
        &#8592;
      </NavButton>
      {<CardImage src={images[currentImage]} />}
      <NavButton
        enabled={canGoNext}
        aria-label="Show next image"
        onClick={next}
      >
        &#8594;
      </NavButton>
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
