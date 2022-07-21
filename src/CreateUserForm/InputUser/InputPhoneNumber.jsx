import React from "react";

import { Input } from "@nextui-org/react";

export const InputPhoneNumber = ({
  PhoneNumberInputValue,
  setPhoneNumberInputValue,
}) => {
  return (
    <Input
      type="text"
      value={PhoneNumberInputValue}
      onChange={(event) => {
        setPhoneNumberInputValue(event.target.value);
      }}
      labelLeft="Phone number"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
