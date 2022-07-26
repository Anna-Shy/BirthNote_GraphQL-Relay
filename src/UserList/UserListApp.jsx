import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { useAsyncList, useCollator, Table } from "@nextui-org/react";

import { UserNameCol } from "./ColumnUserComponent/UserNameCol";
import { UserPreferencesCol } from "./ColumnUserComponent/UserPreferencesCol";
import { UserAboutCol } from "./ColumnUserComponent/UserAboutCol";
import { UserActionCol } from "./ColumnUserComponent/UserActionCol";
import { DateBirthCol } from "./ColumnUserComponent/DateBirthCol";

import "./UserListApp.css";

export const UserListApp = ({ usersList: usersListRef, searchField }) => {
  const usersList = useFragment(
    graphql`
      fragment UserListApp_userData on User @relay(plural: true) {
        id
        userName
        dateBirth
        phoneNumber
        userPreferences
        userAbout
      }
    `,
    usersListRef
  );

  const collator = useCollator({ numeric: true });
  const list = useAsyncList({ usersList, sortCol });
  const searchUserLists = usersList.filter((person) => {
    return (
      person.userName.toLowerCase().includes(searchField.toLowerCase()) ||
      person.dateBirth.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const columns = [
    { name: "Name", id: "userName" },
    { name: "Birth", id: "dateBirth" },
    { name: "Preferences", id: "userPreferences" },
    { name: "About", id: "userAbout" },
    { name: "actions", id: "actions" },
  ];

  async function sortCol({ sortDescriptor }) {
    return {
      items: usersList.sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }

  const renderCell = (user, columnKey) => {
    const cellValue = usersList[columnKey];
    switch (columnKey) {
      case "userName":
        return (
          <UserNameCol
            userName={user.userName}
            phoneNumber={user.phoneNumber}
          />
        );
      case "dateBirth":
        return <DateBirthCol dateBirth={user.dateBirth} />;
      case "userPreferences":
        return <UserPreferencesCol userPreferences={user.userPreferences} />;
      case "userAbout":
        return <UserAboutCol userAbout={user.userAbout} />;
      case "actions":
        return <UserActionCol userInfo={user} id={user.id} />;
      default:
        return cellValue;
    }
  };

  return (
    <div className="container">
      <Table
        aria-label="Table of users"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sortCol}
        lined
        headerLined
        shadow={false}
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              allowsSorting
              key={column.id}
              hideHeader={column.id === "actions"}
              align={column.id === "actions" ? "center" : "start"}
              className="title"
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={searchUserLists} loadingState={list.loadingState}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={6} />
      </Table>
    </div>
  );
};
