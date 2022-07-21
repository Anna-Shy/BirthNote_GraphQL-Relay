import React, { useState, useMemo } from "react";

import { Dropdown } from "@nextui-org/react";

export const DropdownSort = () => {

  const [selectedSort, setSelectedSort] = useState(new Set(["Sort"]));

  const selectedSortValue = useMemo(
    () =>
      Array.from(selectedSort)
        .join(", ")
        .replaceAll("_", " "),
    [selectedSort]
  );

  // const userNameAscending = [...].sort((a, b) =>
  //   a.name > b.name ? 1 : -1
  // );

  // const userNameDescending = [...data.users].sort((a, b) =>
  //   a.name > b.name ? -1 : 1
  // );

  return (
    <Dropdown>
      <Dropdown.Button
        light
        css={{
          tt: "capitalize",
          fontFamily: "Shadows Into Light",
          fontSize: "16px",
        }}
      >
        {selectedSortValue}
      </Dropdown.Button>
      <Dropdown.Menu
        css={{
          fontFamily: "Shadows Into Light",
        }}
        aria-label="Single selection actions"
        selectionMode="single"
        selectedKeys={selectedSort}
        onSelectionChange={setSelectedSort}
      >
        <Dropdown.Item key="By name (A - Z)">By name (A - Z)</Dropdown.Item>
        <Dropdown.Item key="By name (Z - A)">By name (Z - A)</Dropdown.Item>
        <Dropdown.Item key="By nearest date">By nearest date</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
