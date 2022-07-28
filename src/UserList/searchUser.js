export const searchUser = (usersInfo, searchField) => {
  return usersInfo.filter((person) => {
    return (
      person.userName.toLowerCase().includes(searchField.toLowerCase()) ||
      person.dateBirth.toLowerCase().includes(searchField.toLowerCase())
    );
  });
};
