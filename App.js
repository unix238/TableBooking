import { AuthProvider } from "./src/providers/authProvider";
import { AppRouter } from "./src/components/AppRouter";
import { useState, useEffect } from "react";
import { useAuth } from "./src/hooks/useAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [auth, setAuth] = useState(useAuth());

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        auth.setToken(token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
