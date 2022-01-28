import React from "react";

import Search from "./Search";
import Notification from "./Notification";
import { BoxRow } from "../../style";
import UserAccount from "./UserAccount";

function index() {
  return (
    <BoxRow>
      <Search />
      <Notification />
      <UserAccount />
    </BoxRow>
  );
}

export default index;
