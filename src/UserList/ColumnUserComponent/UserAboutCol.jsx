import React from "react";

import { Text } from "@nextui-org/react";

export const UserAboutCol = ({ userAbout }) => {
  return (
    <Text
      className="text"
      css={{
        maxWidth: "150px",
        maxHeight: "75px",
        overflow: "auto",
        whiteSpace: "normal",
      }}
    >
      {userAbout ? userAbout : "-"}
    </Text>
  );
};
