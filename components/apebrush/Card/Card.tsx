import React from "react";
import styles from "./Card.module.css";
import CardThumbnail, {
  CardThumbnailProps,
} from "../CardThumbnail/CardThumbnail";
import Image from "next/image";
import Button from "../Button/Button";

interface CardProps {
  thumbnail: string;
  iconPath: string;
  title: string;
  description: string;
  href?: {
    url: string;
    label: string;
  };
}

const Card: React.FC<CardProps> = ({
  thumbnail,
  iconPath,
  title,
  description,
  href,
}) => {
  return (
    <div className={styles.upper_container}>
      <CardThumbnail thumbnail={thumbnail} />
      <div className={styles.lower_container}>
        <div className={styles.lower_container_inner}>
          <div className={styles.header_container}>
            <Image
              src={iconPath}
              width={40}
              height={40}
              alt="Ape brush media"
            />
            <div className={styles.title_text}> {title}</div>
          </div>
          <div className={styles.description_text}> {description}</div>
        </div>
      </div>

      <div className={styles.button_container}>
        {href ? (
          <Button
            icon="/icons/deckIcon.svg"
            href={href.url}
            stretch={true}
            className={styles.button}
          >
            <span>{href.label}</span>
          </Button>
        ) : (
          <Button stretch={true} className={styles.button} disabled={true}>
            <span>Coming soon</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
