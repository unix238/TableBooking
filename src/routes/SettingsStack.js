import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {Settings} from "../screens/Settings";

const SettingsStackNav = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <SettingsStackNav.Navigator>
      <SettingsStackNav.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
       <SettingsStackNav.Screen
        name="Profile"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStackNav.Screen
        name="Notifications"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStackNav.Screen
        name="Feedback"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStackNav.Screen
        name="Help"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStackNav.Navigator>
  );
}
