import axios, { AxiosResponse } from "axios";
import { IContact } from "../models/IContact";

export default class ContactsService {
  static async getContacts(): Promise<AxiosResponse<IContact[]>> {
    return axios.get<IContact[]>(
      "https://62fb4e1eabd610251c055ec8.mockapi.io/api/contacts"
    );
  }
}
