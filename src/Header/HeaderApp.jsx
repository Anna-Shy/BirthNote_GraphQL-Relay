import React from "react";

import { Link, Text } from "@nextui-org/react";

import { SearchInput } from "./SearchInput";

import "./HeaderApp.css";

export const HeaderApp = ({ searchChange }) => {
  return (
    <div className="container">
      <div className="header__wrap">
        <Link href="#top">
          <Text h1 className="logo">
            BirthNote
          </Text>
        </Link>

        <SearchInput searchChange={searchChange} />
      </div>
    </div>
  );
};
