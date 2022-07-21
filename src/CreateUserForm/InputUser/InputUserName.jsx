import React from "react";

import { Input } from "@nextui-org/react";

export const InputUserName = ({
  UserNameInputValue,
  setUserNameInputValue,
}) => {
  return (
    <Input
      type="text"
      value={UserNameInputValue}
      onChange={(event) => {
        setUserNameInputValue(event.target.value);
      }}
      labelLeft="Name"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
