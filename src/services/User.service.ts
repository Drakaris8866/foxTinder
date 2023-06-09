import { interseptor as axios } from "../api/interseptors";
import { IUser } from "../shared/types/user.interface";
import {
  IImageForDeleteInfo,
  IUpdatedUserRes,
  IUserInfo,
} from "../store/user/user.types";
import { IUserForCard } from "../store/users/users.types";

class UserService {
  async updateUserInfo({ about, interests, gender, _id, images }: IUserInfo) {
    const response = await axios.put<IUpdatedUserRes>("/user/updateInfo", {
      about,
      interests,
      gender,
      _id,
    });

    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));

    return response;
  }

  async dislike(usersId: string[], userId: string) {
    const response = await axios.put(`/user/updateDislikedInfo/${userId}`, {
      usersId,
    });
    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));

    return response;
  }

  async like(usersId: string[], userId: string) {
    const response = await axios.put(`/user/updateLikedInfo/${userId}`, {
      usersId,
    });
    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));

    return response;
  }

  async getRandomImg(_id: { _id: string }) {
    const response = await axios.post<{ updatedUser: IUser }>(
      "/user/getImage",
      {
        _id,
      }
    );

    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));

    return response;
  }

  async deleteImg({ _id, imageId }: IImageForDeleteInfo) {
    const response = await axios.delete<{ updatedUser: IUser }>(
      `/user/deleteImg/${_id}/${imageId}`
    );
    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));
    return response;
  }

  async getUsers(_id: string) {
    return await axios.get<IUserForCard[]>(`/user/getUsers/${_id}`);
  }
}

export default new UserService();
