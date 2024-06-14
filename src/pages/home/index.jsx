import React from "react";
import clsx from "clsx";

import Container from "../../components/Container";
import Showcase from "../../components/Showcase";
import Trending from "../../components/Trending";
import Creators from "../../components/Creators";

import cn from "./style.module.scss";

function Home() {
  return (
    <div className={clsx(cn["home"])}>
      <Container>
        <Showcase />
        <Trending />
        <Creators />
      </Container>
    </div>
  );
}

export default Home;
