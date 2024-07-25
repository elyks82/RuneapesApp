"use client";
import React, { useEffect } from "react";
import styles from "./ParallaxIconBackground.module.css";

import Image from "next/image";

export interface ParallaxIconBackgroundProps {
  iconsPath: string;
  upperNodes: Array<[string, string, string]>;
  lowerNodes: Array<[string, string, string]>;
  className?: string;
}

//random int generator min max

const ParallaxIconBackground: React.FC<ParallaxIconBackgroundProps> = ({
  iconsPath,
  upperNodes,
  lowerNodes,
  className,
}) => {
  // Implement your component logic here

  let RenderIcons = (
    Nodes: Array<[string, string, string]>,
    offset: number,
  ) => {
    return Nodes.map((node, i) => {
      i = i + offset;
      return (
        <div
          key={i}
          className={styles.icon_container + " " + (className ?? "")}
          style={{
            position: "absolute",
            top: node[1],
            left: node[0],
            transform: `rotate(${node[2]} + 'deg'})`,
          }}
        >
          <Image
            className={styles.icon}
            src={iconsPath + (i + 1) + ".png"}
            alt="icon"
            width={50}
            height={50}
          />
        </div>
      );
    });
  };

  return (
    // JSX code for your component's UI goes here
    <div className={styles.upper_container}>
      <div className={styles.top_layer}>{RenderIcons(upperNodes, 0)}</div>

      <div className={styles.bottom_layer}>
        {RenderIcons(lowerNodes, upperNodes.length)}
      </div>
    </div>
  );
};

export default ParallaxIconBackground;
