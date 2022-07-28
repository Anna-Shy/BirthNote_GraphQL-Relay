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
        if (event.target.value === '' || (event.target.value).match(/^[0-9\b+()]+$/)) {
          setPhoneNumberInputValue(event.target.value);
        }
      }}
      labelLeft="Phone number"
      aria-label="Phone number input"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
