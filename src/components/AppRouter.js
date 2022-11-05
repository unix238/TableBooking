import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "react-native";

import AuthStack from "../routes/authStack";
import { useAuth } from "../hooks/useAuth";

import TabNav from "../routes/HomeBottomTabNav";

export const AppRouter = () => {
  const auth = useAuth();
  const [routes, setRoutes] = useState("");

  useEffect(() => {});

  return (
    <>
      {!auth.token ? <AuthStack /> : <TabNav />}
      <StatusBar
        backgroundColor="#61dafb"
        barStyle="dark-content"
      />
    </>
  );
};
