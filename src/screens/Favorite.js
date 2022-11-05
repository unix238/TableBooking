import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import offer from "../static/img/res3.jpeg";
import { SearchBar } from "../components/UI/SearchBar/SearchBar";

export const Favorite = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <SearchBar
        onPress={() => {
          navigation.navigate("Search");
        }}
      />

      <View style={styles.offer}>
        <FlatList
          style={{ height: "100%" }}
          data={[
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
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("detail", { item });
              }}
            >
              <Image style={styles.image} source={item.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingLeft: 30,
    paddingRight: 40,
    paddingVertical: 65,
  },
  offer: {},
  image: {
    width: 340,
    height: 130,
    marginTop: 30,
    borderRadius: 10,
  },
  scroll: {
    height: "100%",
  },
});
