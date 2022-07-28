import React from "react";

import { Input } from "@nextui-org/react";

export const SearchInput = ({ searchChange }) => {
  // const [searchField, setSearchField] = useState("");
  // const [searchShow, setSearchShow] = useState(false);

  // const handleChange = (e) => {
  //   setSearchField(e.target.value);
  // if (e.target.value === "") {
  //   setSearchShow(false);
  // } else {
  //   setSearchShow(true);
  // }
  // };

  // const filteredPersons = usersList.filter((person) => {
  //   return (
  //     person.userName.toLowerCase().includes(searchField.toLowerCase()) ||
  //     person.dateBirth.toLowerCase().includes(searchField.toLowerCase())
  //   );
  // });

  return (
    <Input
      onChange={searchChange}
      bordered
      labelLeft="Search"
      aria-label="Search input"
    />
  );
};
