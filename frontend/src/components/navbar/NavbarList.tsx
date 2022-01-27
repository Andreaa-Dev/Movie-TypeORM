import React from "react";
import { navList } from "../list/navList";
import { BoxRow } from "../style";

function NavbarList() {
  return (
    <BoxRow>
      {navList.map((item) => {
        return <>{item.name}</>;
      })}
    </BoxRow>
  );
}

export default NavbarList;
