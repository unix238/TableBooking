import axios from "axios";
import { URL } from "../config/index";

export default class UserService {
  static async login(username, password) {
    try {
      const response = await axios.post(`${URL}/auth/login`, {
        username,
        password,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getUser(token) {
    try {
      const response = await axios.get(`${URL}/auth/user`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async register(username, password, email, name, phone) {
    try {
      const response = await axios.post(`${URL}/auth/register`, {
        username,
        password,
        email,
        name,
        phone
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
