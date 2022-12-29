import RestaurantsService from '../api/restaurantService';

export const useRestaurants = async (setRestaurants, setIsLoading) => {
  const loadData = async () => {
    const restaurants = await RestaurantsService.getRestaurants();
    if (restaurants) {
      setRestaurants(restaurants);
      setIsLoading(false);
    }
  };
  loadData();
};
