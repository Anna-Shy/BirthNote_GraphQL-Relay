import React from "react";

import { Row, Col } from "@nextui-org/react";

import { UpdateUser } from "../UpdateUser";
import { DeleteUser } from "../DeleteUser";
import { ShowUserInfo } from "../ShowUserInfo";

export const UserActionCol = ({ userInfo, id }) => {
  return (
    <Row justify="center" align="center">
      <div style={{ display: "flex" }}>
        <Col css={{ d: "flex" }}>
          <ShowUserInfo userInfo={userInfo} />
        </Col>
        <Col css={{ d: "flex" }}>
          <UpdateUser userInfo={userInfo} />
        </Col>
        <Col css={{ d: "flex" }}>
          <DeleteUser id={id} />
        </Col>
      </div>
    </Row>
  );
};
