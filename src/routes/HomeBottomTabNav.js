import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Settings } from "../screens/Settings";

import HomeStack from "./HomeStack";
import RestStack from "./RestaurantsStack";
import SettingsStack from "./SettingsStack";
import ScanStack from "./ScanStack";
import FavStack from "./FavoriteStack"

const Tab = createBottomTabNavigator();

const options = {
  animationEnabled: false,
  headerShown: false,
  animation: "none",
};

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Главная") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Рестораны") {
              iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
            } else if (route.name === "Избранное") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            } else if (route.name === "QR") {
              iconName = focused ? "ios-qr-code" : "ios-qr-code";
            } else if (route.name === "Прочее") {
              iconName = focused ? "ios-menu" : "ios-menu-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#DE3905",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Главная" component={HomeStack} options={options} />
        <Tab.Screen name="Избранное" component={FavStack} options={options} />
        <Tab.Screen name="QR" component={ScanStack} options={options} />
        <Tab.Screen name="Рестораны" component={RestStack} options={options} />
        <Tab.Screen name="Прочее" component={SettingsStack} options={options} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
