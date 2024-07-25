"use client";
import React from "react";
import styles from "./Thumbnail.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImageLoader from "@/components/ImageLoader";

interface ThumbnailProps {
  svgPath: string;
  altText: string;
  initialPosition?: { x: number; y: number };
}

const inRange = (number: number, newNumber: number, range: number) => {
  return Math.abs(newNumber - number) <= range;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  svgPath,
  altText,
  initialPosition,
}) => {
  const { x: initialX, y: initialY } = initialPosition || { x: 0, y: 0 };

  // Get current mouse position and transform div to it
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      //Mouse movement throttler
      if (
        inRange(e.clientX, position.x, 1) &&
        inRange(e.clientY, position.y, 1)
      ) {
        return;
      }

      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  });

  return (
    <div className={styles.upper_container}>
      <Image
        unoptimized={true}
        src={svgPath}
        alt={altText}
        width={400}
        height={200}
        className={styles.thumbnail_image}
        style={{
          transform: `translate(${initialX + position.x / 35}px, ${initialY + position.y / 35}px)`,
        }}
      />
    </div>
  );
};

export default Thumbnail;
