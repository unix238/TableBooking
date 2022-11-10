import { useState, useCallback, useEffect, useMemo } from 'react';
import UserService from '../api/userService';
import { AuthContext } from '../context';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setTokenData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const setToken = useCallback((tokenData) => {
    setTokenData(tokenData);
    console.log('setted');

    if (tokenData) {
      AsyncStorage.setItem('token', tokenData);
    } else {
      AsyncStorage.removeItem('token');
    }
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setToken]);

  const loadData = useCallback(async () => {
    const tokenData = await AsyncStorage.getItem('token');
    setTokenData(tokenData);

    try {
      if (tokenData) {
        const user = await UserService.getUser(tokenData);
        setUser(user);
      }
    } catch (e) {
      setToken(null);
    } finally {
      setIsLoaded(true);
    }
  }, [setToken]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const contextValue = useMemo(
    () => ({
      isLoaded,
      user,
      token,
      setUser,
      setToken,
      logOut,
    }),
    [isLoaded, user, token, setToken, logOut]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
