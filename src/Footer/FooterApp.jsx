import React from "react";

import { Text } from "@nextui-org/react";

import "./FooterApp.css";

export const FooterApp = () => {
  return (
    <div className="container">
      <div className="footer__wrap">
        <Text h2 className="title">
          Ann Shylkina
        </Text>
        <Text className=" text">&copy; Crazy Smile 2022</Text>
      </div>
    </div>
  );
};
