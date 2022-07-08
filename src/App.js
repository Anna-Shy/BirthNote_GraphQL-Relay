import React, { useState, useEffect } from "react";
import fetchGraphQL from "./fetchGraphQL";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query {
        firstName
        lastName
      }
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        setUser(response.data);

        // setName(response.data.firstName);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>List user:</p>
        <ul>
          {user.map((userInfo, id) => {
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

export default App;
