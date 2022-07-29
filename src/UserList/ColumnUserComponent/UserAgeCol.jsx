import React from "react";

import { calculateAge } from "../calculateAge";

import { Text } from "@nextui-org/react";

export const UserAgeCol = ({ dateBirth }) => {
  return <Text>{calculateAge(new Date(dateBirth))}</Text>;
};
