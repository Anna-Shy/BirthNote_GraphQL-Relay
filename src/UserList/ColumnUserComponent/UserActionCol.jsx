import React from "react";

import { Row, Col } from "@nextui-org/react";

import { UpdateUser } from "../UpdateUser";
import { DeleteUser } from "../DeleteUser";

export const UserActionCol = ({userInfo, id}) => {
  return (
    <Row justify="center" align="center">
      <Col css={{ d: "flex" }}>
        <UpdateUser userInfo={userInfo} />
      </Col>
      <Col css={{ d: "flex" }}>
        <DeleteUser id={id} />
      </Col>
    </Row>
  );
};
