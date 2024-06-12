import React from "react";
import clsx from "clsx";

import cn from "./style.module.scss";

export default function Showcase() {
  return (
    <div className={clsx(cn["showcase"])}>
      <div>Showcase</div>
    </div>
  );
}
