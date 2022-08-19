import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>(
      "https://62fb4e1eabd610251c055ec8.mockapi.io/api/users"
    );
  }
}
