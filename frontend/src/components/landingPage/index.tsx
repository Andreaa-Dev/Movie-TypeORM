import React from "react";

import Logo from "../resuable/Logo";
import { Background, Title } from "../style";
import ManageButton from "./ManageButton";
import User from "./User";

function index() {
  return (
    <Background>
      <Logo />
      <Title> Who's watching ?</Title>
      <User />
      <ManageButton />
    </Background>
  );
}

export default index;
