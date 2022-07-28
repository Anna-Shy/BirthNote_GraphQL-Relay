import React from "react";

import { Input } from "@nextui-org/react";

// const preference = [
//   { value: "flower", label: "Flower" },
//   { value: "cake", label: "Cake" },
//   { value: "party", label: "Party" },
//   { value: "chocolate", label: "Chocolate" },
//   { value: "balloons", label: "Balloons" },
//   { value: "concert", label: "Concert" },
//   { value: "travelling", label: "Travelling" },
//   { value: "picnic", label: "Picnic" },
// ];

export const InputUserPreference = ({
  UserPreferenceInputValue,
  setUserPreferenceInputValue,
}) => {
  return (
    <Input
      type="text"
      value={UserPreferenceInputValue}
      onChange={(event) => {
        setUserPreferenceInputValue(event.target.value.split(","));
      }}
      labelLeft="Preferences"
      aria-label="User preferences input"
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "15px",
        width: "100%",
      }}
      underlined
    />
  );
};
