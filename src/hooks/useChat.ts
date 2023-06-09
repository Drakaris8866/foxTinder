import { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../store/store";
import { io } from "socket.io-client";
import { SERVER_URI } from "../constants/constants";
import { useLocation, useParams } from "react-router-dom";
import { IMessage, IMessageData } from "../components/ChatRoom/types/chatRoom.types";

export const useChat = () => {
  const user = useTypedSelector(({ auth }) => auth.data);

  const {userId: roomId} = useParams<string>()

  const [users, setUsers] = useState([]);

  const [messagesIsLoading, setMessagesIsLoading] = useState(false)
  const [messages, setMessages] = useState([]);
  console.log(messages);
  
  const [log, setLog] = useState(null);
  const { current: socket } = useRef(
    io(SERVER_URI, {
      query: {
        roomId: roomId,
        userName: user.username,
      },
    })
  );

  useEffect(() => {    
    setMessagesIsLoading(true)
    socket.emit("message:get");
    socket.emit("user:add", user);
    socket.on("log", (log) => {
      setLog(log);
    });

    socket.on("user_list:update", (users) => {
      setUsers(users);
    });

    socket.on("message_list:update", (messages) => {
      setMessages(messages);
      setMessagesIsLoading(false)
    });
  }, []);

  

  const sendMessage = (message: IMessageData) => {   
    socket.emit("message:add", message);
  };

  const removeMessage = (message: IMessageData) => {
    socket.emit("message:remove", message);
  };

  return { users, messages, log, sendMessage, removeMessage, roomId, loading: {
    messagesIsLoading
  } };
};
