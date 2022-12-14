import axios from 'axios';
import { URL } from '../config/index';

export default class RestaurantsService {
  static async getRestaurants() {
    try {
      const response = await axios.get(`${URL}/restaurant/getRestaurants`);
      if (response?.status === 200) {
        return response.data;
      } else {
        return [];
      }
    } catch (e) {
      console.log(e);
    }
  }

  static async getFoodItems(restaurant) {
    try {
      const response = await axios.get(`${URL}/food/getRestaurantFood`, {
        params: { restaurant },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
