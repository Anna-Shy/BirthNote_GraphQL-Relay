import React, { useState } from "react";
import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { Button, Modal, useModal, Text } from "@nextui-org/react";
import { InputUserName } from "../CreateUserForm/InputUser/InputUserName";
import { InputDataBirth } from "../CreateUserForm/InputUser/InputDateBirth";
import { InputPhoneNumber } from "../CreateUserForm/InputUser/InputPhoneNumber";
import { InputUserPreference } from "../CreateUserForm/InputUser/InputUserPreference";
import { TextareaUserAbout } from "../CreateUserForm/InputUser/TextareaUserAbout";

export const UpdateUser = ({ userInfo }) => {
  const [updateUser] = useMutation(
    graphql`
      mutation UpdateUserMutation(
        $userId: ID!
        $userName: String
        $dateBirth: String
        $phoneNumber: String
        $userPreferences: [String]
        $userAbout: String
      ) {
        updateUser(
          userId: $userId
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
  const { setVisible, bindings } = useModal();

  const [UserNameInput, setUserNameInput] = useState();
  const [UserDateBirthInput, setUserDateBirthInput] = useState();
  const [UserPhoneNumberInput, setUserPhoneNumberInput] = useState();
  const [UserPreferenceInput, setUserPreferenceInput] = useState([]);
  const [UserAboutInput, setUserAboutInput] = useState();

  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        css={{ backgroundColor: "white", color: "black" }}
        auto
        color="error"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        }
      ></Button>
      <Modal
        scroll
        width="550px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text size={30} css={{ fontFamily: "Dancing Script, cursive"}}>Update User</Text>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              updateUser({
                variables: {
                  userId: userInfo.userId,
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
