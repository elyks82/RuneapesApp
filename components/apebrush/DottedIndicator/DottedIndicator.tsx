import React from "react";
import styles from "./DottedIndicator.module.css";
interface Props {
  dotCount: number;
  className?: string;
}

const DottedIndicator: React.FC<Props> = ({ dotCount, className }) => {
  const colors = ["blue", "black", "yellow", "red"];

  return (
    <div
      className={(className ? className + " " : "") + styles.upper_container}
    >
      {Array.from(Array(dotCount).keys()).map((i: number) => {
        return (
          <div
            key={"dot_" + i}
            className={styles.dot + " " + styles["black"]}
          />
        );
      })}
    </div>
  );
};

export default DottedIndicator;
