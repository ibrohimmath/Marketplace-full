import React from "react";
import clsx from "clsx";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Base,
  Caption,
  FontFamily,
  Boldness,
} from "../Typography";

import cn from "./style.module.scss";

export default function Creators() {
  return (
    <div className={clsx(cn["creators"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        Top creators
      </H3>
    </div>
  );
}
