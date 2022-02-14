import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className='header' id="home">
      <Logo />
      <Navigation />
    </header>
  );
}
