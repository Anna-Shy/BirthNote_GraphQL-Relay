import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import "./App.css";

const { Suspense } = React;

const PersonQuery = graphql`
  query AppQuery {
    users {
      firstName
      lastName
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PersonQuery, {});

function App(props) {
  const data = usePreloadedQuery(PersonQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>List user:</p>
        <ul>
          {data.users.map((userInfo, id) => {
            return (
              <li key={id}>
                {userInfo.firstName} - {userInfo.lastName}
              </li>
            );
          })}
        </ul>
      </header>
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
