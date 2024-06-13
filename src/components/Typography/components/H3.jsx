import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function H3({ children, fontFamily, boldness, style }) {
  return (
    <div className={clsx(cn["h3"], cn[fontFamily], cn[boldness])} style={style}>
      {children}
    </div>
  );
}
