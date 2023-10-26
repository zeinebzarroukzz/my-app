import React from 'react'
import Header from "../components/Header/Header";
import Menus from "../components/Menus/Menus"
import photo from "../Images/restaurant chef B.jpg"
const Menu = () => {
  return (
    <>
    <Header img={photo} title="Welcome"></Header>
    <Menus></Menus>
    </>
  )
}

export default Menu;