import { IUser } from "../../shared/types/user.interface";

export type IUserForCard = Omit<IUser, "password" | "roomId" | "liked"> & {
    index: number;
  } & {
    dislike: (_id: string) => void;
    like: (_id: string) => void;
    disliked?: string[];
  };