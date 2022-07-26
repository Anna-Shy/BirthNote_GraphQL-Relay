import React from "react";

import { Text } from "@nextui-org/react";

export const UserPreferencesCol = ({ userPreferences }) => {
  return (
    <Text
      className="text"
      css={{
        width: "150px",
        maxHeight: "100px",
        overflow: "auto",
        whiteSpace: "normal",
      }}
    >
      {userPreferences ? userPreferences.join("·") : "-"}
    </Text>
  );
};
