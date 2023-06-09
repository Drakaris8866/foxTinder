import { ICouple } from "../store/favorite/favorite.types";
import { interseptor as axios } from "../api/interseptors";
import { AxiosResponse } from "axios";

class FavoriteService {
  async getUserCouples(_id: string) {
    return await axios.get<{userCouples: ICouple[]}>(`/favorite/getUsers/${_id}`);
  }
}

export default new FavoriteService();
