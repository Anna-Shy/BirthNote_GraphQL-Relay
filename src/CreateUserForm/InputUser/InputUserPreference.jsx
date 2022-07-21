import React from "react";

import { Input } from "@nextui-org/react";

export const InputUserPreference = ({
  UserPreferenceInputValue,
  setUserPreferenceInputValue,
}) => {
  return (
    <Input
      type="text"
      value={UserPreferenceInputValue}
      onChange={(event) => {
        setUserPreferenceInputValue(event.target.value);
      }}
      labelLeft="Preferences"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
