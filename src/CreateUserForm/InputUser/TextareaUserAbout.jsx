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
      placeholder="About"
      aria-label='About user' 
      css={{
        marginTop: "20px",
        width: "100%",
      }}
      bordered
    />
  );
};
