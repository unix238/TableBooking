import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Restaurants } from "../screens/Restaurants";
import { RestaurantDetail } from "../screens/Items/RestourantDetail";

const RestStackNav = createNativeStackNavigator();

export default function RestStack() {
  return (
    <RestStackNav.Navigator>
      <RestStackNav.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          headerShown: false,
        }}
      />
      <RestStackNav.Screen
        name="detail"
        component={RestaurantDetail}
        options={{

        }}
      />
    </RestStackNav.Navigator>
  );
}
