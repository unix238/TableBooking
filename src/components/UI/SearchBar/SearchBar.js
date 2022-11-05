import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export const SearchBar = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.TOpacity}>
      <View style={styles.searchBar}>
        <View style={styles.searchText}>
          <Text style={styles.TextSearch}>Найти</Text>
        </View>
      </View>
      <EvilIcons name="search" size={40} color={"#DE3905"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TOpacity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    width: "85%",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchText: {
    marginLeft: 10,
  },
  TextSearch: {
    color: "#999999",
  },
});
