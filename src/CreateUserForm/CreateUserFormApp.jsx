import React, { useState } from "react";
import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { Container, Text, Button, Loading } from "@nextui-org/react";

import { InputUserName } from "./InputUser/InputUserName";
import { InputDataBirth } from "./InputUser/InputDateBirth";
import { InputPhoneNumber } from "./InputUser/InputPhoneNumber";
import { InputUserPreference } from "./InputUser/InputUserPreference";
import { TextareaUserAbout } from "./InputUser/TextareaUserAbout";

import "./CreateUserFormApp.css";

export const CreateUserFormApp = () => {
  const [user] = useMutation(
    graphql`
      mutation CreateUserFormAppMutation(
        $userName: String!
        $dateBirth: String!
        $phoneNumber: String
        $userPreferences: [String]
        $userAbout: String
      ) {
        createUser(
          userName: $userName
          dateBirth: $dateBirth
          phoneNumber: $phoneNumber
          userPreferences: $userPreferences
          userAbout: $userAbout
        ) {
          userName
          dateBirth
          phoneNumber
          userPreferences
          userAbout
        }
      }
    `
  );

  const [UserNameInput, setUserNameInput] = useState("");
  const [UserDateBirthInput, setUserDateBirthInput] = useState("");
  const [UserPhoneNumberInput, setUserPhoneNumberInput] = useState("");
  const [UserPreferenceInput, setUserPreferenceInput] = useState([]);
  const [UserAboutInput, setUserAboutInput] = useState("");

  return (
    <div className="container">
      <div className="form__wrap">
        <Text h2 className="title">
          Create user
        </Text>
        <Text className="text">Fill out all important info</Text>

        <Container className="form-container">
          <InputUserName
            UserNameInputValue={UserNameInput}
            setUserNameInputValue={setUserNameInput}
          />
          <InputDataBirth
            DataBirthInputValue={UserDateBirthInput}
            setDataBirthInputValue={setUserDateBirthInput}
          />
          <InputPhoneNumber
            PhoneNumberInputValue={UserPhoneNumberInput}
            setPhoneNumberInputValue={setUserPhoneNumberInput}
          />
          <InputUserPreference
            UserPreferenceInputValue={UserPreferenceInput}
            setUserPreferenceInputValue={setUserPreferenceInput}
          />
          <TextareaUserAbout
            UserAboutInputValue={UserAboutInput}
            setUserAboutInputValue={setUserAboutInput}
          />

          {UserNameInput && UserDateBirthInput ? (
            <Button
              onClick={() => {
                user({
                  variables: {
                    userName: UserNameInput,
                    dateBirth: UserDateBirthInput,
                    phoneNumber: UserPhoneNumberInput,
                    userPreferences: UserPreferenceInput,
                    userAbout: UserAboutInput,
                  },
                  onCompleted(data) {
                    console.log(data);
                  },
                });
              }}
              className="form__btn"
            >
              Create
            </Button>
          ) : (
            <Button disabled className="form__btn">
              <Loading type="gradient" color="currentColor" size="sm" />
            </Button>
          )}
        </Container>
      </div>
    </div>
  );
};
