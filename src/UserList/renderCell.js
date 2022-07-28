import React from "react";

import { UserNameCol } from "./ColumnUserComponent/UserNameCol";
import { UserPreferencesCol } from "./ColumnUserComponent/UserPreferencesCol";
import { UserAboutCol } from "./ColumnUserComponent/UserAboutCol";
import { UserActionCol } from "./ColumnUserComponent/UserActionCol";
import { DateBirthCol } from "./ColumnUserComponent/DateBirthCol";

export const renderCell = (usersList, user, columnKey) => {
  const cellValue = usersList[columnKey];
  switch (columnKey) {
    case "userName":
      return (
        <UserNameCol userName={user.userName} phoneNumber={user.phoneNumber} />
      );
    case "dateBirth":
      return <DateBirthCol dateBirth={user.dateBirth} />;
    case "userPreferences":
      return <UserPreferencesCol userPreferences={user.userPreferences} />;
    case "userAbout":
      return <UserAboutCol userAbout={user.userAbout} />;
    case "actions":
      return <UserActionCol userInfo={user} id={user.id} />;
    default:
      return cellValue;
  }
};
