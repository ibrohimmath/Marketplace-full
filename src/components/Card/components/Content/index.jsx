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
} from "../../../Typography";
import { ImgAvatar } from "../../../Img";
import cn from "./style.module.scss";

export default function Content({ title, avatar, avatarName, style }) {
  return (
    <div className={clsx(cn["content"])} style={style}>
      <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
        {title}
      </H5>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <ImgAvatar src={avatar} style={{ height: "1.75rem" }} />
        <Base fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
          {avatarName}
        </Base>
      </div>
    </div>
  );
}
