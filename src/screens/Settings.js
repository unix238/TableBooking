import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Link } from "../components/UI/Link/Link";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Settings = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Settings");
  };

  const auth = useAuth();

  const logout = () => {
    auth.logOut();
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.headerTitle}>
        <Text style={styles.header_text}>Настройки</Text>
      </View>
      <View style={styles.list}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Ionicons
              name="ios-person-circle-outline"
              size={30}
              color="black"
            />
            <Text style={styles.text}>Редактировать профиль</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Ionicons
              name="ios-notifications-circle-outline"
              size={30}
              color="black"
            />
            <Text style={styles.text}>Уведомления</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Ionicons
              name="arrow-undo-circle-outline"
              size={30}
              color="black"
            />
            <Text style={styles.text}>Обратная связь</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Ionicons name="ios-help-circle-outline" size={30} color="black" />
            <Text style={styles.text}>Помощь</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionLogout}
          onPress={() => {
            logout();
          }}
        >
          <Text style={styles.logout}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingLeft: 30,
    paddingRight: 40,
    paddingVertical: 65,
  },
  header: {
    padding: 10,
    backgroundColor: "#000",
    height: 200,
  },
  header_text: {
    textAlign: "center",
    fontSize: 20,
  },
  headerTitle: {
    marginTop: 30,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  option: {
    marginBottom: 10,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionLogout: {
    marginTop: 40,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    color: "red",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
});
