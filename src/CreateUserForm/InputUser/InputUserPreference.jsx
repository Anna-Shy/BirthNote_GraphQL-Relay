import React from "react";

import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

const preference = [
  "flower",
  "cake",
  "party",
  "chocolate",
  "balloons",
  "concert",
  "travelling",
  "picnic",
];

export const InputUserPreference = ({
  UserPreferenceInputValue,
  setUserPreferenceInputValue,
}) => {
  return (
    <TextInput
      options={preference}
      value={UserPreferenceInputValue}
      onChange={(event) => {
        setUserPreferenceInputValue(event);
      }}
      //defaut @
      trigger={" "}
      placeholder="Preference"
      style={{
        width: "100%",
        height: "60px",
        marginTop: "20px",
        padding: "5px 15px",
        border: "2px solid #dbdbdb",
        backgroundColor: "#f4f6f9",
        resize: "none",
        borderRadius: "10px",
      }}
    />
  );
};
