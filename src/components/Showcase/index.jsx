import React from "react";
import clsx from "clsx";
import { FontFamily, Boldness, H1, H2, H3, H4, H5 } from "../Typography";

import cn from "./style.module.scss";

export default function Showcase() {
  return <div className={clsx(cn["showcase"])}></div>;
}
