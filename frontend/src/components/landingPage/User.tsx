import React from "react";
import { profileIcon } from "../list/profileIcon";

import { BoxColumn, BoxRow, Text } from "../style";

function User() {
  return (
    <BoxRow>
      {profileIcon.map((item) => {
        return (
          <BoxColumn>
            <img src={item.link} alt={item.name} height="144px" width="144px" />
            <Text>{item.name}</Text>
          </BoxColumn>
        );
      })}
    </BoxRow>
  );
}

export default User;
