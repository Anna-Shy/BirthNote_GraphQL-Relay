import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { Container, Card, Text, Link } from "@nextui-org/react";

import "./UserListApp.css";
import { DeleteUser } from "./DeleteUser";
import { UpdateUser } from "./UpdateUser";

export const UserListApp = ({ usersList: usersListRef }) => {
  const usersList = useFragment(
    graphql`
      fragment UserListApp_userData on User @relay(plural: true) {
        userId
        userName
        dateBirth
        phoneNumber
        userPreferences
        userAbout
      }
    `,
    usersListRef
  );

  return (
    <>
      {usersList.map((userInfo, id) => {
        return (
          <Card key={id}>
            <Card.Header>
              <Container className="title">
                <Text b>{userInfo.userName}</Text>
                <br />
              </Container>
              <Text b className="header__text-birthday">
                {userInfo.dateBirth}
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body
              css={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                fontFamily: "Shadows Into Light, cursive",
              }}
            >
              <Container>
                <Link href="tel:" css={{ justifyContent: "center" }}>
                  <Text>
                    {" "}
                    {userInfo.phoneNumber ? userInfo.phoneNumber : null}
                  </Text>
                </Link>
                <Text>
                  {" "}
                  {userInfo.userPreferences
                    ? userInfo.userPreferences.join("·")
                    : null}
                </Text>
                <Text css={{ wordBreak: "break-all", fontSize: "16px" }}>
                  {" "}
                  {userInfo.userAbout ? userInfo.userAbout : null}
                </Text>
              </Container>
              <div>
                <UpdateUser userInfo={userInfo} />
                <DeleteUser userId={userInfo.userId} />
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
