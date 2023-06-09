import React, { useState } from "react";
import { IMessageData } from "../types/chatRoom.types";
import { FC } from "react";
import { useTypedSelector } from "../../../store/store";
import styles from "./MessageInput.module.scss";
import { CaretRightOutlined } from "@ant-design/icons";

interface IMessageInputProps {
  sendMessage: (message: IMessageData) => void;
  roomId: string;
}

export const MessageInput: FC<IMessageInputProps> = ({
  sendMessage,
  roomId,
}) => {
  const { data: user } = useTypedSelector(({ auth }) => auth);

  const { _id, username } = user;

  const [text, setText] = useState("");
  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let message = {
      userId: _id,
      userName: username,
      roomId: roomId,
      messageType: "text",
      textOrPathToFile: text,
    };
    sendMessage(message);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <input
          placeholder="Написать сообщение..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </div>
      <button className={styles.send} onClick={(e) => onSubmit(e)}>
        <CaretRightOutlined />
      </button>
    </div>
  );
};
