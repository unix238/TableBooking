import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import offer from "../static/img/res3.jpeg";

import { useAuth } from "../hooks/useAuth";
import { EvilIcons } from "@expo/vector-icons";

export const Search = ({ navigation }) => {
  const [input, setInput] = useState("");

  const [data, setData] = useState([
    {
      id: "1",
      name: "Restaurant 1",
      image: offer,
    },
    {
      id: "2",
      name: "Restaurant 2",
      image: offer,
    },
    {
      id: "3",
      name: "Restaurant 3",
      image: offer,
    },
    {
      id: "4",
      name: "Restaurant 4",
      image: offer,
    },
  ]);

  const [filteredData, setFilteredData] = useState([]);

  const findHandler = () => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  useEffect(() => {
    findHandler();
  }, [input]);

  const auth = useAuth();

  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Найти"
          value={input}
          onChange={(e) => {
            setInput(e.nativeEvent.text);
          }}
          // auto focus on load
          autoFocus={true}
        />
        <TouchableOpacity onPress={findHandler}>
          <EvilIcons name="search" size={40} color={"#DE3905"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        style={{height: "100%"}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("detail", { item });
              }}
            >
              <Image style={styles.card} source={item.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingLeft: 30,
    paddingRight: 40,
    paddingVertical: 65,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    width: "85%",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  card: {
    width: 340,
    height: 130,
    marginTop: 30,
    borderRadius: 10,
  },
});
