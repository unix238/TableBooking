import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Favorite } from "../screens/Favorite";
import { RestaurantDetail } from "../screens/Items/RestourantDetail";

const FavStackNav = createNativeStackNavigator();

export default function FavStack() {
  return (
    <FavStackNav.Navigator>
      <FavStackNav.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <FavStackNav.Screen
        name="detail"
        component={RestaurantDetail}
        options={{
          headerShown: false,
        }}
      />
    </FavStackNav.Navigator>
  );
}
