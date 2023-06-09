import React, { FC } from "react";
import styles from "./MessageList.module.scss";
import { useTypedSelector } from "../../../store/store";
import { IMessage } from "../types/chatRoom.types";
import { Dropdown, MenuProps, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface IMessageItemProps {
  message: IMessage;
  removeMessage: (message: IMessage) => void;
}

export const MessageItem: FC<IMessageItemProps> = ({
  message,
  removeMessage,
}) => {
  const { username } = useTypedSelector(({ auth }) => auth.data);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={() => removeMessage(message)} className={styles.items}>
          <span>Удалить</span>
          <DeleteOutlined />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className={styles.items}>
          <span>Редактировать</span>
          <EditOutlined />
        </div>
      ),
    },
  ];
  return (
    <div
      className={`${
        username === message.userName ? `${styles.user}` : `${styles.nuser}`
      } ${styles.message}`}
    >
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.username}>{message.userName}</span>
          <span className={styles.date}>
            {new Date(message.createdAt).toLocaleTimeString().slice(0, -3)}
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.inner}>{message.textOrPathToFile}</div>
          <Dropdown menu={{ items }} placement="bottomRight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M5 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Dropdown>
        </div>
      </div>
      <hr />
    </div>
  );
};
