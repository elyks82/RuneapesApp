"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CardThumbnail.module.css";

export interface CardThumbnailProps {
  thumbnail: string;
}

const getRandomInterval = () => {
  return Math.floor(Math.random() * 1000); // Random interval between 500ms and 3500ms
};

const CardThumbnail: React.FC<CardThumbnailProps> = ({ thumbnail }) => {
  const [etchFlashOn, setEtchFlashOn] = useState(true);

  /*
            Each thumbnail card will have different images and animations.
            The purpose of the cardthumbnail card is a centralized component that stores all these animations
    */

  useEffect(() => {
    let timeout = setTimeout(() => runFlicker(), 0);

    const runFlicker = () => {
      setEtchFlashOn(false);
      timeout = setTimeout(() => {
        setEtchFlashOn(true);
        timeout = setTimeout(() => {
          runFlicker();
        }, getRandomInterval());
      }, 200);
    };

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  let thumbnailContents = <div></div>;

  if (thumbnail === "etch") {
    thumbnailContents = (
      <div className={styles.inner_thumbnail_container}>
        <Image
          src="/illustrations/etch/flash_on.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image}
        />

        <Image
          src="/illustrations/etch/flash_off.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={
            styles.thumbnail_image +
            " " +
            styles.etch_flicker +
            " " +
            (etchFlashOn ? styles.etch_flash_on : styles.etch_flash_off)
          }
        />
      </div>
    );
  }
  if (thumbnail === "pad") {
    thumbnailContents = (
      <div className={styles.inner_thumbnail_container}>
        <Image
          src="/illustrations/pad/cage_empty.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image}
        />

        <Image
          src="/illustrations/pad/rock.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image + " " + styles.stone_bobbing}
        />

        <Image
          src="/illustrations/pad/cage_shine.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image}
        />
      </div>
    );
  }
  if (thumbnail === "airdrop") {
    thumbnailContents = (
      <Image
        src="/illustrations/placeholder.png"
        alt="apemedia"
        width={900}
        height={464.4}
        className={styles.thumbnail_image}
      />
    );
  }
  if (thumbnail === "locker") {
    thumbnailContents = (
      <Image
        src="/illustrations/placeholder.png"
        alt="apemedia"
        width={900}
        height={464.4}
        className={styles.thumbnail_image}
      />
    );
  }
  if (thumbnail === "pools") {
    thumbnailContents = (
      <div className={styles.inner_thumbnail_container}>
        <Image
          src="/illustrations/pools/fog1.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image}
        />

        <Image
          src="/illustrations/pools/fog2.png"
          alt="apemedia"
          width={900}
          height={464.4}
          className={styles.thumbnail_image + " " + styles.pool_fog}
        />
      </div>
    );
  }

  return (
    <div
      className={styles.upper_container}
      style={{
        width: "calc(100% + 2px)",
        height: "380px",
      }}
    >
      {thumbnailContents}
    </div>
  );
};

export default CardThumbnail;
