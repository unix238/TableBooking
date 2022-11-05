import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import UserService from "../../api/userService";
import { Link } from "../../components/UI/Link/Link";
import { Button } from "../../components/UI/Button/Button";
import { styles } from "../../style/authStyles";

export const Register = ({ navigation }) => {
  const pressHandler = async () => {
    try {
      const response = await UserService.register(password, email, name, phone);
      if (response.status == 200) {
        console.log(response.data);
        navigation.navigate("Login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.menu}>
        <View style={styles.links}>
          <View>
            <Link
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Вход
            </Link>
          </View>
          <View style={styles.active}>
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
            <Text style={styles.textInput}>Имя</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChange={(e) => {
                setName(e.nativeEvent.text);
              }}
              placeholder="Ваше имя"
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.textInput}>Номер Телефона</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChange={(e) => {
                setPhone(e.nativeEvent.text);
              }}
              placeholder="Ваш номер телефона"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChange={(e) => {
                setEmail(e.nativeEvent.text);
              }}
              placeholder="Ваш email"
              autoCapitalize="none"
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
            />
          </View>
          <View style={styles.forgotPassword}>
            <Link style={styles.forgotPasswordText}>Забыли пароль ?</Link>
          </View>
          <View style={styles.loginButton}>
            <Button>Зарегистрироваться</Button>
          </View>
        </View>
      </View>
    </View>
  );
};
