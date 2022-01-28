import React from "react";

import Logo from "../resuable/Logo";
import { BoxRow } from "../style";
import NavbarList from "./NavbarList";
import NavIcon from "./navIcon";

function index() {
  return (
    <BoxRow>
      <Logo />
      <NavbarList />
      <NavIcon />
    </BoxRow>
  );
}

export default index;
