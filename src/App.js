import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";

import RelayEnvironment from "./RelayEnvironment";

import { HeaderApp } from "./Header/HeaderApp";
import { UserListApp } from "./UserList/UserListApp";
import { CreateUserFormApp } from "./CreateUserForm/CreateUserFormApp";
import { FooterApp } from "./Footer/FooterApp";

import "./App.css";

const { Suspense } = React;

const PersonQuery = graphql`
  query AppQuery {
    users {
      ...UserListApp_userData
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PersonQuery, {});

function App(props) {
  const data = usePreloadedQuery(PersonQuery, props.preloadedQuery);

  const [searchField, setSearchField] = useState("");

  const searchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <HeaderApp usersList={data.users} searchChange={searchChange} />

      <main className="App-main">
        <UserListApp usersList={data.users} searchField={searchField} />
        <CreateUserFormApp />
      </main>

      <FooterApp />
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
