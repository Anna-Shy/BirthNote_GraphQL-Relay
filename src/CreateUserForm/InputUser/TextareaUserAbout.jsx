import React from "react";

import { Textarea } from "@nextui-org/react";

export const TextareaUserAbout = ({
  UserAboutInputValue,
  setUserAboutInputValue,
}) => {
  return (
    <Textarea
      value={UserAboutInputValue}
      onChange={(event) => {
        setUserAboutInputValue(event.target.value);
      }}
      labelPlaceholder="About"
      aria-label='About user'
      css={{
        fontFamily: "Shadows Into Light, cursive",
        marginTop: "20px",
        width: "100%",
      }}
      underlined
    />
  );
};
