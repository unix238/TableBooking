import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import UserService from "../../api/userService";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "../../style/authStyles";

import { Link } from "../../components/UI/Link/Link";
import { Button } from "../../components/UI/Button/Button";
import { Loader } from "../../components/UI/Loader/Loader";

export const Login = ({ navigation }) => {
  const auth = useAuth();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const pressHandler = async () => {
    try {
      setIsLoading(true);
      const response = await UserService.login(login, password);
      if (response.status == 200) {
        auth.setToken(response.data.token);
        auth.setUser(response.data.user);
      }
    } catch (e) {
      setError("Login error");
    }
  };

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.menu}>
        <View style={styles.links}>
          <View style={styles.active}>
            <Link
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Вход
            </Link>
          </View>
          <View>
            <Link
              style={styles.link}
              onPress={() => navigation.navigate("Register")}
            >
              Регистрация
            </Link>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.inputView}>
            <Text style={styles.textInput}>Номер Телефона</Text>
            <TextInput
              style={styles.input}
              value={login}
              onChange={(e) => {
                setLogin(e.nativeEvent.text);
              }}
              placeholder="Ваш номер телефона"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.textInput}>Пароль</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChange={(e) => {
                setPassword(e.nativeEvent.text);
              }}
              placeholder="Ваш пароль"
              textContentType="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.forgotPassword}>
            <Link style={styles.forgotPasswordText}>Забыли пароль ?</Link>
          </View>
          <View style={styles.loginButton}>
            <Button onPress={pressHandler}>Войти</Button>
          </View>
        </View>
        {isLoading && <Loader />}
        {error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
