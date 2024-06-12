import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/home";
// import { ImgAvatar, ImgFull, ImgSquare } from "./components/Img";
import showCaseSrc from "../src/assets/showcase.png";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
