import React from "react";

import { Text } from "@nextui-org/react";

export const DateBirthCol = ({ dateBirth }) => {
  dateBirth = new Date(dateBirth).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <Text className="text">{dateBirth ? dateBirth : "-"}</Text>;
};
