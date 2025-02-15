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
import Button from "../Button";
import { CardNft } from "../Card";

import planeSrc from "../../assets/cosmosplane.png";
import cosmoswomanSrc from "../../assets/cosmoswoman.png";
import cosmosSrc from "../../assets/cosmos.png";
import africanSrc from "../../assets/african.png";
import astronautSrc from "../../assets/astronaut.png";
import dotguSrc from "../../assets/dotgu.png";

import cn from "./style.module.scss";

export default function Nft() {
  return (
    <div className={clsx(cn["nft"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        Discover more NFTs
      </H3>
      <div className={clsx(cn["nft-flex"])}>
        <H5 fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
          Explore new trending NFTs
        </H5>
        <Button
          type="dark-primary"
          style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}
        >
          <i className={clsx("fa-regular", "fa-eye", cn["btn__eye"])}></i>
          <Base fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            See all
          </Base>
        </Button>
      </div>
      <div className={clsx(cn["nft-grid"])}>
        <CardNft
          mainImage={planeSrc}
          title={"Distant Galaxy"}
          avatar={cosmoswomanSrc}
          avatarName={"MoonDancer"}
          price={"1.63 ETH"}
          bid={"0.33 wETH"}
        ></CardNft>
        <CardNft
          mainImage={cosmosSrc}
          title={"Life on Edena"}
          avatar={africanSrc}
          avatarName={"NebulaKid"}
          price={"1.63 ETH"}
          bid={"0.33 wETH"}
        ></CardNft>
        <CardNft
          mainImage={astronautSrc}
          title={"AstroFiction"}
          avatar={dotguSrc}
          avatarName={"Spaceone"}
          price={"1.63 ETH"}
          bid={"0.33 wETH"}
        ></CardNft>
      </div>
    </div>
  );
}
