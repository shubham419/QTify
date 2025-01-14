import React from "react";
import style from "./Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const navbar = () => {
  return (
    <nav className={style.navbar}>
      <a href="/">
      <Logo />
      </a>

      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default navbar;
