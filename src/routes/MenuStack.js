import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Menu } from "../screens/Menu";
import { CartView } from "../screens/CartView";
import { RestaurantDetail } from "../screens/Items/RestourantDetail";

const MenuStackNav = createNativeStackNavigator();

export default function MenuStack() {
  return (
    <MenuStackNav.Navigator>
      <MenuStackNav.Screen
        name="Menu"
        component={Menu}
        options={{
            headerShown: false,
        }}
      />
      <MenuStackNav.Screen
        name="cart"
        component={CartView}
        options={{
          headerShown: false,
        }}
      />
    </MenuStackNav.Navigator>
  );
}
