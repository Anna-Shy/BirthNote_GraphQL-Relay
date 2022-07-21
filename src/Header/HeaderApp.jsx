import React from "react";

import { Container, Link, Text, Input } from "@nextui-org/react";

import { DropdownSort } from "./DropdownSort";
import { DropdownFitter } from "./DropdownFilter";

import "./HeaderApp.css";

export const HeaderApp = () => {
  return (
    <Container className="header__container">
      <Container className="header__wrap">
        <Link href="#top">
          <Text h1 className="logo">
            BirthNote
          </Text>
        </Link>

        <Container className="header__dropdown">
          {/* Sort */}
          <DropdownSort />

          {/* Filter */}
          <DropdownFitter />
        </Container>

        <Input bordered labelLeft="Search" />
      </Container>
    </Container>
  );
};
