import React from "react";

import { Container, Text} from "@nextui-org/react";

import "./FooterApp.css";

export const FooterApp = () => {
  return (
    <Container className="container">
      <Container className="footer__wrap">
        <Text h2 className="title">Ann Shylkina</Text>
        <Text className=" text">&copy; Crazy Smile 2022</Text>
      </Container>
    </Container>
  );
};
