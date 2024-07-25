"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./CardCarousel.module.css";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
import Image from "next/image";

interface CarouselProps {
  children?: React.ReactNode;
  className?: string;
  isInfinite?: boolean;
  defaultIndex?: number;
}

interface TransformCalculations {
  sliderTranslateX: string;
  cardTranslations: Array<{
    translateX: string;
  }>;
}

let GAP_SIZE = 10;
let CAROUSEL_ANIMATION_TIMEOUT = 1000;

const CardCarousel: React.FC<CarouselProps> = ({
  children,
  className,
  isInfinite,
  defaultIndex,
}) => {
  isInfinite = isInfinite ?? false;
  let cards = React.Children.toArray(children);

  const [carouselIndex, setCarouselIndex] = useState(defaultIndex ?? 0);

  const carouselDirection = 0 <= carouselIndex ? -1 : 1;

  const ContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const firstCardDimensions = useContainerDimensions(cardRef);
  const containerDimensions = useContainerDimensions(ContainerRef);

  const fullCardWidth = firstCardDimensions.width + GAP_SIZE;
  const cardsInView = Math.ceil(containerDimensions.width / fullCardWidth);

  if (isInfinite && cardsInView * 2 > cards.length) {
    //Add extra cards if infinite scrolling is enabled and there are not enough cards to fill the view

    cards = [...cards, ...cards];
  }

  const nextCard = () => {
    setCarouselIndex((prevCarouselIndex) => prevCarouselIndex - 1);
  };

  const previousCard = () => {
    setCarouselIndex((prevCarouselIndex) => prevCarouselIndex + 1);
  };

  const calculateTransform = (index: number): TransformCalculations => {
    const visibleCardContainerWidth = cardsInView * fullCardWidth;
    const center =
      containerDimensions.width / 2 - visibleCardContainerWidth / 2;

    //Variables for card translation in infinite scrolling

    //Offset describes the first position where the scroller is out of view

    const offset = 0 <= index ? cardsInView * -1 : cards.length - cardsInView;
    const multiplier = cards.length * fullCardWidth * carouselDirection;
    const sliderTranslateX =
      cardsInView % 2 === 0
        ? `translateX(${index * fullCardWidth}px)`
        : `translateX(${center + index * fullCardWidth}px)`;

    const cardTranslations = cards.map((_, cardIndex) => {
      const translateXamount =
        Math.floor(Math.abs(index + cardIndex - offset) / cards.length) *
        multiplier;
      //console.log('index:', index, 'cardIndex:', cardIndex, 'offset:', offset, 'trans:', translateXamount)

      const translateX = `translateX(${translateXamount}px)`;
      return { translateX };
    });

    return { sliderTranslateX, cardTranslations };
  };

  //TODO
  //Add a useEffect to revert carouselIndex back to range if it goes out of bounds after animation

  const transformations = calculateTransform(carouselIndex);
  //console.dir(transformations, {depth: null})

  return (
    <div
      className={`${styles.upper_container} ${className ?? ""}`}
      ref={ContainerRef}
    >
      <div
        className={styles.card}
        ref={cardRef}
        style={{
          opacity: 0,
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          zIndex: -1,
        }}
      >
        {cards[0]}
      </div>

      <div className={styles.carousel_buttons_container}>
        <div className={styles.carousel_button} onClick={previousCard}>
          <Image
            className={
              styles.carousel_button_image +
              " " +
              styles.carousel_button_image_left
            }
            src="/icons/caret-left.svg"
            width={30}
            height={30}
            alt="Previous card"
          />
        </div>
        <div className={styles.carousel_button} onClick={nextCard}>
          <Image
            className={
              styles.carousel_button_image +
              " " +
              styles.carousel_button_image_right
            }
            src="/icons/caret-right.svg"
            width={30}
            height={30}
            alt="Next card"
          />
        </div>
      </div>

      <div className={styles.outer_cards_container}>
        <div
          className={styles.inner_cards_container}
          style={{
            transform: transformations.sliderTranslateX,
            gap: GAP_SIZE + "px",
            transition:
              "transform 1000ms cubic-bezier(0.000, 0.000, 0.000, 1.000)",
          }}
        >
          {cards.map((card, i) => (
            <div
              className={styles.card}
              key={"card_" + i}
              style={
                isInfinite
                  ? {
                      transform: transformations.cardTranslations[i].translateX,
                    }
                  : {}
              }
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
