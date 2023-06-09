export interface IUser {
    username: string;
    password: string;
    _id: string;
    personalization: IPersonalization;
    disliked?: string[];
    liked: string[];
    roomId: string;
  }
  
  export interface IPersonalization {
    images?: string[];
    interests?: string[];
    about?: string;
    gender?: string;
  }