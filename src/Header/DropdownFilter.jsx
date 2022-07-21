import React, { useState, useMemo } from "react";

import { Dropdown } from "@nextui-org/react";

export const DropdownFitter = () => {
  const [selectedFilter, setSelectedFilter] = useState(new Set(["Filter"]));

  const selectedFilterValue = useMemo(
    () =>
      Array.from(selectedFilter)
        .join(", ")
        .replaceAll("_", " "),
    [selectedFilter]
  );

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
        {selectedFilterValue}
      </Dropdown.Button>
      <Dropdown.Menu
        css={{
          fontFamily: "Shadows Into Light",
        }}
        aria-label="Multiple selection actions"
        selectionMode="multiple"
        selectedKeys={selectedFilter}
        onSelectionChange={setSelectedFilter}
      >
        <Dropdown.Item key="By age">By age</Dropdown.Item>
        <Dropdown.Item key="By preference">By preference</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
