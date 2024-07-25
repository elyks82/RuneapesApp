"use client";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Section.module.css";
import gsap from "gsap";
import ParallaxIconBackground, {
  ParallaxIconBackgroundProps,
} from "../ParallaxIconBackground/ParallaxIconBackground";

interface SectionProps {
  children?: React.ReactNode;
  isFull: boolean;
  sectionId: string;
  animationSettings?: {
    defaultAnimation?: boolean;
    omitAnimation?: boolean;
  };
  parallaxBackground?: ParallaxIconBackgroundProps;
  theme?: "dark" | "light";
  align?: "top" | "center";
}

const Section: React.FC<SectionProps> = ({
  children,
  isFull,
  sectionId,
  animationSettings,
  parallaxBackground,
  theme,
  align,
}) => {
  const omitAnimation = animationSettings?.omitAnimation ?? false;
  const defaultAnimation = animationSettings?.defaultAnimation ?? false;
  theme = theme ?? "light";
  align = align ?? "center";
  const pageRef = useRef(null);

  return (
    <div
      className={
        styles.upper_container +
        " " +
        (theme === "light" ? styles.theme_light : styles.theme_dark)
      }
      ref={pageRef}
    >
      <div
        className={
          styles.page_container +
          " " +
          (isFull && styles.full_container) +
          " " +
          "page-" +
          sectionId
        }
        style={{
          justifyContent: align === "top" ? "flex-start" : "center",
        }}
      >
        {children}
      </div>
      {parallaxBackground && (
        <div className={styles.parallax_bg_container}>
          <ParallaxIconBackground
            {...parallaxBackground}
            className={"mirror-animation-" + sectionId}
          />
        </div>
      )}
    </div>
  );
};

export default Section;
