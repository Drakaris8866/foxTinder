import React, { useEffect } from "react";
import { MessageList } from "./MessageList/MessageList";
import { MessageInput } from "./MessageInput/MessageInput";
import { useChat } from "../../hooks/useChat";
import styles from './ChatRoom.module.scss'

export const ChatRoom = () => {
  const { sendMessage, log, messages, users, removeMessage, roomId, loading } = useChat();


  return (
    <div className={styles.room}>
      <MessageList
        log={log}
        messages={messages}
        removeMessage={removeMessage}
        messagesIsLoading={loading.messagesIsLoading}
      />
      <MessageInput roomId={roomId!} sendMessage={sendMessage} />
    </div>
  );
};
