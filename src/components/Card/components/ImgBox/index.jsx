import React from "react";
import clsx from "clsx";

import cn from "../../style.module.scss";

export default function ImgBox({ children, style }) {
  return (
    <div className={clsx(cn["image-box"])} style={style}>
      {children}
    </div>
  );
}
