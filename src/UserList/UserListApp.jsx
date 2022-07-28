import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { renderCell } from "./renderCell";
import { searchUser } from "./searchUser";

import { useAsyncList, useCollator, Table } from "@nextui-org/react";

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
  const list = useAsyncList({ usersList, sort });

  const searchUserLists = searchUser(usersList, searchField);

  const columns = [
    { name: "Name", id: "userName" },
    { name: "Birth", id: "dateBirth" },
    { name: "Preferences", id: "userPreferences" },
    { name: "About", id: "userAbout" },
    { name: "actions", id: "actions" },
  ];

  async function sort({ sortDescriptor }) {
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

  return (
    <div className="container">
      <div className="userlist__wrap">
        <Table
          aria-label="Table of users"
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
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
                  <Table.Cell>
                    {renderCell(usersList, item, columnKey)}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
          <Table.Pagination shadow noMargin align="center" rowsPerPage={6} />
        </Table>
      </div>
    </div>
  );
};
