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
import { Pagination } from "./UserList/Pagination/Pagination";
import { FooterApp } from "./Footer/FooterApp";

import { Container } from "@nextui-org/react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.users.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <HeaderApp />

      <main className="App-main">
        <Container className="user-list__container">
          <Container className="userlist__wrap">
            <UserListApp usersList={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data.users.length}
              paginate={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </Container>
        </Container>

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
