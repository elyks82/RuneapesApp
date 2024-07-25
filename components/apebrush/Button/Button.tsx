"use client";
import React from "react";
import styles from "./Button.module.css";
import NextImage from "next/image";
import { Button as AriaButton } from "react-aria-components";
import { Link } from "react-aria-components";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  href?: string;
  isBlack?: boolean;
  stretch?: boolean;
  className?: string;
  disabled?: boolean;
  actionIcon?: string;
  noBackground?: boolean;
  filterPrimary?: boolean;
  hrefReplace?: boolean;
  type?: "action" | "normal";
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  href,
  isBlack,
  stretch,
  className,
  disabled,
  noBackground,
  actionIcon,
  filterPrimary,
  type,
  hrefReplace,
}) => {
  hrefReplace = hrefReplace ?? false;

  type = type ?? "normal";

  const ButtonContents = (
    <div className={styles.inner_container}>
      {icon && (
        <NextImage
          src={icon}
          alt="btn_icon"
          width={24}
          height={24}
          className={styles.pre_icon}
        />
      )}
      {children}

      {(href || actionIcon) && (
        <NextImage
          src={
            actionIcon
              ? "/icons/" + actionIcon + ".svg"
              : "/icons/hrefarrowIcon.svg"
          }
          alt="btn_icon"
          width={16}
          height={16}
          className={
            styles.href_icon +
            " " +
            styles.icon +
            " " +
            (filterPrimary ? styles.filter_primary : "")
          }
        />
      )}
    </div>
  );

  //If href prop is present use aria Link component instead.
  if (href) {
    return (
      <Link
        className={
          styles.upper_container +
          " " +
          (isBlack ? styles.black_button : "") +
          " " +
          (stretch ? styles.stretch_button : "") +
          " " +
          (disabled ? styles.disabled : "") +
          " " +
          (noBackground ? styles.no_background : "") +
          " " +
          (type === "action" ? styles.action_button : " ") +
          " " +
          (className ?? "")
        }
        href={href}
        target={hrefReplace ? "_blank" : ""}
      >
        {ButtonContents}
        <div className={styles.underline} />
      </Link>
    );
  }

  return (
    <AriaButton
      className={
        styles.upper_container +
        " " +
        (isBlack ? styles.black_button : "") +
        " " +
        (stretch ? styles.stretch_button : "") +
        " " +
        (disabled ? styles.disabled : "") +
        " " +
        (noBackground ? styles.no_background : "") +
        " " +
        (type === "action" ? styles.action_button : " ") +
        " " +
        (className ?? "")
      }
    >
      {ButtonContents}
      <div className={styles.underline} />
    </AriaButton>
  );
};

export default Button;
