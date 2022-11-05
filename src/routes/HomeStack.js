import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { RestaurantDetail } from "../screens/Items/RestourantDetail";

const HomeStackNav = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animationEnabled: false,
          animation: "none",
        }}
      />
      <HomeStackNav.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNav.Screen
        name="detail"
        component={RestaurantDetail}
        options={{
          headerStyle: {
            backgroundColor: "#DE3905",
            shadowColor: "transparent",
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
          },
          headerTintColor: "#fff",
          headerTitle: "Ресторан",
        }}
      />
    </HomeStackNav.Navigator>
  );
}
