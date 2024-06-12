import React from "react";
import clsx from "clsx";
import Container from "../../components/Container";
import cn from "./style.module.scss";
import Showcase from "../../components/Showcase";

function Home() {
  return (
    <div className={clsx(cn["home"])}>
      <Container>
        <Showcase />
      </Container>
    </div>
  );
}

export default Home;
