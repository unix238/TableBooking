import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';

import ScanScreen from "../screens/ScanScreen";
import { RestaurantDetail } from "../screens/Items/RestourantDetail";
import MenuStack from "./MenuStack";

const ScanStackNav = createNativeStackNavigator();

export default function ScanStack() {
  return (
    <ScanStackNav.Navigator>
      <ScanStackNav.Screen
        name="QRScan"
        component={ScanScreen}
        options={{
        }}
      />
      <ScanStackNav.Screen
        name="menu"
        component={MenuStack}
        options={{
          headerShown: false,
        }}
      />
    </ScanStackNav.Navigator>
  );
}
