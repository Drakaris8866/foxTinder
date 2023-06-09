export interface IMessageData {
  messageType: string;
  textOrPathToFile: string;
  roomId: string;
  userId: string;
  userName: string;
  _id?: string;
}
export interface IMessage {
  messageType: string;
  textOrPathToFile: string;
  roomId: string;
  userId: string;
  userName: string;
  _id?: string;
  createdAt: string;
  updatedAt: string;
}
