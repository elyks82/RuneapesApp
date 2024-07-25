"use client";

import React, { use } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div
      className={styles.loader}
      style={{
        display: "flex",
        position: "fixed",
        zIndex: 1000,
        justifyContent: "center",
        alignItems: "center",
        width: "100svh",
        backgroundColor: "#000",
        scale: 0.8,
      }}
    >
      <svg
        width="36.549969mm"
        height="34.162743mm"
        viewBox="0 0 36.549969 34.162743"
      >
        <defs id="defs1" />
        <g id="layer1" transform="translate(-95.779164,-155.57499)">
          <path
            style={{
              stroke: "#92ff78",
              fill: "none",
              strokeWidth: 2.5,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeOpacity: 1,
              strokeDasharray: "100", // Duplicate property, may need to adjust based on the effect you're trying to achieve
              strokeDashoffset: "100",
              animation: "draw 4s ease-in-out infinite",
              WebkitAnimation: "draw 4s ease-in-out infinite", // for better cross-browser support
            }}
            d="m 131.12291,174.94731 -3.60344,-1.04766 -10.48086,8.68615 9.81659,5.38832 -27.462783,0.0576 8.020403,-6.19188 9.96727,-7.69491 -0.0687,-8.14076 3.27894,-8.42514 9.37111,0.004 -0.0591,8.42591 -8.67585,0.009 -4.8719,-8.49321 -11.61902,-0.0217 -6.477355,8.38116 v 7.37944 l 13.529115,0.0157"
            id="path2933"
          />
        </g>
      </svg>
    </div>
  );
}
