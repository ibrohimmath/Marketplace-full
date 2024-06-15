import React from "react";

import Layout from "./components/Layout";
import Home from "./pages/home";
import Category from "./components/Category";

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
