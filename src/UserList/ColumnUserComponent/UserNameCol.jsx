import React from "react";

import { User } from "@nextui-org/react";

export const UserNameCol = ({ userName, phoneNumber }) => {
  return (
    <User
      src="https://steamavatar.io/img/1477742964sBxdJ.jpg"
      name={userName}
      squared
      css={{ p: 0 }}
      className="title"
    >
      <User.Link href="tel:" className="text">
        {phoneNumber}
      </User.Link>
    </User>
  );
};
