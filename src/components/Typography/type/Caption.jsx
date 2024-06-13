import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function Caption({ children, fontFamily, boldness, style }) {
  return (
    <div
      className={clsx(cn["caption"], cn[fontFamily], cn[boldness])}
      style={style}
    >
      {children}
    </div>
  );
}
