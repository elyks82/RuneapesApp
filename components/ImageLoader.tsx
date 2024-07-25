import React, { useState, useMemo } from "react";
import Image from "next/image";
import Loader from "@/components/apebrush/Loader/Loader";
// Define the types for the props
interface ImageLoaderProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  style: React.CSSProperties;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  width,
  height,
  alt,
  className,
  style,
}) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized={true}
      />
    </>
  );
};

export default ImageLoader;
