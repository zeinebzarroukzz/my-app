import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import first from "../assets/firstphoto.jpg"
function HomePage() {
  return (
    <>
      <Header img={first}></Header>
      <Main></Main>
    </>
  );
}

export default HomePage;
