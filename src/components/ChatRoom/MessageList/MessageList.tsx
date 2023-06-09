import React from "react";
import { IMessage } from "../types/chatRoom.types";
import { FC } from "react";
import { useTypedSelector } from "../../../store/store";

import styles from "./MessageList.module.scss";
import { MessagesListPreloader } from "./MessagesListPreloader";
import { MessageItem } from "./MessageItem";

interface IMessageListProps {
  log: null | string;
  messages: IMessage[];
  messagesIsLoading: boolean;
  removeMessage: (message: IMessage) => void;
}

export const MessageList: FC<IMessageListProps> = ({
  messages,
  messagesIsLoading,
  removeMessage
}) => {

  if (messagesIsLoading) {
    return <MessagesListPreloader />;
  }

  return (
    <div className={styles.messages}>
      {messages.map((message, idx) => (
        <MessageItem removeMessage={removeMessage} key={idx} message={message} />
      ))}
    </div>
  );
};
