import React from "react";

import { Input } from "@nextui-org/react";

export const InputDataBirth = ({
  DataBirthInputValue,
  setDataBirthInputValue,
}) => {
  return (
    <Input
      type="date"
      value={DataBirthInputValue}
      onChange={(event) => {
        setDataBirthInputValue(event.target.value);
      }}
      labelLeft="Birthday*"
      aria-label="Birthday input"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
