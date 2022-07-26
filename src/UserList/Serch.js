import React, { useState } from "react";
// export const SearchInput = ({ usersList }) => {

const [searchField, setSearchField] = useState("j");
// const [searchShow, setSearchShow] = useState(false);

export const filteredPersons = (user) =>
  user.filter((person) => {
    return (
      person.userName.toLowerCase().includes(searchField.toLowerCase()) 
    //   person.dateBirth.toLowerCase().includes(searchField.toLowerCase())
    );
  });

// export const handleChange = (e) => {
//   setSearchField(e.target.value);
//   if (e.target.value === "") {
//     setSearchShow(false);
//   } else {
//     setSearchShow(true);
//   }
// };

//   console.log(filteredPersons);
// };
