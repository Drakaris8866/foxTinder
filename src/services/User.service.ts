import {interseptor as axios} from "../api/interseptors";
import {
  IImageForDeleteInfo, IUpdatedUserRes,
  IUser,
  IUserInfo,
} from "../store/user/user.types";
import {IUserForCard} from "../components/ui/userCard/UserCard";


class UserService {
  async updateUserInfo({ about, interests, gender, _id, images }: IUserInfo) {
    const response =  await axios.put<IUpdatedUserRes>("/user/updateInfo", {
      about,
      interests,
      gender,
      _id,
    });

    localStorage.setItem("user", JSON.stringify(response.data.updatedUser));

    return response
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
    return await axios.delete<{ updatedUser: IUser }>(
      `/user/deleteImg/${_id}/${imageId}`
    );
  }
  async getUsers() {
    return await axios.get<IUserForCard[]>("/user/getUsers");
  }
}

export default new UserService()