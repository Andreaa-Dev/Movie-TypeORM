import React from "react";

import Logo from "../resuable/Logo";
import { Title, Text } from "../style";
import User from "../userLogIn/index";

function index() {
  return (
    <div>
      <Logo />
      <Title> Log in </Title>
      <Text> Please log in first to continue</Text>
      <User />
    </div>
  );
}

export default index;
