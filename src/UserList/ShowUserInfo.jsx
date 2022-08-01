import React from "react";

import { calculateAge } from "./calculateAge";

import {
  Button,
  Modal,
  useModal,
  Text,
  Input,
  Textarea,
} from "@nextui-org/react";

export const ShowUserInfo = ({ userInfo }) => {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        css={{ backgroundColor: "transparent", color: "black" }}
        auto
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
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
          <Text size={30} css={{ fontFamily: "Dancing Script, cursive" }}>
            User Info
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            type="text"
            value={userInfo.userName}
            labelLeft="Name"
            aria-label="User name input"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "15px",
              width: "100%",
            }}
            underlined
            readOnly
          />
          <Input
            type="text"
            value={userInfo.dateBirth}
            labelLeft="Birthday"
            aria-label="User birthday input"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "15px",
              width: "100%",
            }}
            underlined
            readOnly
          />
          <Input
            type="text"
            value={calculateAge(new Date(userInfo.dateBirth))}
            labelLeft="Age"
            aria-label="User age input"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "15px",
              width: "100%",
            }}
            underlined
            readOnly
          />
          <Input
            type="text"
            value={userInfo.phoneNumber}
            labelLeft="Phone"
            aria-label="User phone number input"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "15px",
              width: "100%",
            }}
            underlined
            readOnly
          />
          <Textarea
            value={userInfo.userPreferences}
            labelPlaceholder="Preference"
            aria-label="User preference user"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "20px",
              width: "100%",
            }}
            underlined
            readOnly
          />
          <Textarea
            value={userInfo.userAbout}
            labelPlaceholder="About"
            aria-label="About user"
            css={{
              fontFamily: "Shadows Into Light, cursive",
              marginTop: "20px",
              width: "100%",
            }}
            underlined
            readOnly
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
