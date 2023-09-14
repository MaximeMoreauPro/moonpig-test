import React, { useState } from 'react';

import { CardImage } from '../CardItemUI/CardItemUI.styled';
import { CarouselContainer, NavButton } from './Carousel.styled';

type CarouselProps = {
  images: string[];
  // makes Carousel customizable with styled-components styled(Carousel)`...`
  className?: string;
};

export function Carousel({ images, className }: CarouselProps) {
  const { currentImage, canGoPrevious, previous, canGoNext, next } =
    useCarouselNav(images);

  return (
    <CarouselContainer className={className}>
      <NavButton
        enabled={canGoPrevious}
        aria-label="Show previous image"
        onClick={previous}
      >
        {/* left-pointing arrow */}
        &#8592;
      </NavButton>
      {<CardImage src={currentImage} />}
      <NavButton
        enabled={canGoNext}
        aria-label="Show next image"
        onClick={next}
      >
        {/* right-pointing arrow */}
        &#8594;
      </NavButton>
    </CarouselContainer>
  );
}

const useCarouselNav = (images: string[]) => {
  const imagesCount = images.length;
  const [currentImageIndex, setCurrentImage] = useState(0);

  const canGoPrevious = currentImageIndex > 0;
  const previous = () => {
    setCurrentImage(currentImageIndex - 1);
  };

  const canGoNext = currentImageIndex < imagesCount - 1;
  const next = () => {
    setCurrentImage(currentImageIndex + 1);
  };

  const currentImage = images[currentImageIndex];

  return {
    currentImage,
    canGoPrevious,
    previous,
    canGoNext,
    next,
  };
};
