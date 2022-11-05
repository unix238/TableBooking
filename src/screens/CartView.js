import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "../components/UI/SearchBar/SearchBar";
import { AntDesign } from "@expo/vector-icons";

import res1 from "../static/img/res1.jpeg";
import res2 from "../static/img/res2.jpeg";
import res3 from "../static/img/res3.jpeg";
import food1 from "../static/img/food1.png";
import food2 from "../static/img/food2.png";

import offer from "../static/img/offer.jpeg";
import { TextInput } from "react-native-gesture-handler";
const resData = [
  {
    id: "1",
    name: "The FLoat",
    image: res1,
    location: "Центральный парк отдыха",
  },
  {
    id: "2",
    name: "Mama's Kitchen",
    image: res2,
    location: "ул. Ауэзова, 109",
  },
  {
    id: "3",
    name: "Turandot",
    image: res3,
    location: "пр. Абая, 157 А, уг. ул. Розыбакиева",
  },
];
const foodData = [
  {
    id: "1",
    name: "Chicken Biryani",
    image: food1,
    price: "1500",
    desc: "Chicken, rice, curry, salad",
    rest: "The FLoat",
  },
  {
    id: "2",
    name: "Sauce Tonkatsu",
    image: food2,
    price: "1200",
    desc: "Chicken, rice, curry, salad",
    rest: "Mama's Kitchen",
  },
  {
    id: "3",
    name: "Chicken Sauce",
    image: food1,
    price: "1600",
    desc: "Chicken, rice, curry, salad",
    rest: "Turandot",
  },
];
const foodData2 = [
  {
    id: "4",
    name: "Sauce Biryani",
    image: food2,
    price: "1800",
    desc: "Chicken, rice, curry, salad",
    rest: "The FLoat",
  },
  {
    id: "5",
    name: "Sauce Tonkatsu",
    image: food1,
    price: "1400",
    desc: "Chicken, rice, curry, salad",
    rest: "Mama's Kitchen",
  },
  {
    id: "6",
    name: "Chicken Tonkatsu",
    image: food2,
    price: "1600",
    desc: "Chicken, rice, curry, salad",
    rest: "Turandot",
  },
  {
    id: "7",
    name: "Sauce Biryani",
    image: food2,
    price: "1800",
    desc: "Chicken, rice, curry, salad",
    rest: "The FLoat",
  },
  {
    id: "8",
    name: "Sauce Tonkatsu",
    image: food1,
    price: "1400",
    desc: "Chicken, rice, curry, salad",
    rest: "Mama's Kitchen",
  },
  {
    id: "9",
    name: "Chicken Tonkatsu",
    image: food2,
    price: "1600",
    desc: "Chicken, rice, curry, salad",
    rest: "Turandot",
  },
];
const foodData3 = [
  {
    id: "10",
    name: "Sauce Biryani",
    image: food2,
    price: "1800",
    desc: "Chicken, rice, curry, salad",
    rest: "The FLoat",
  },
  {
    id: "11",
    name: "Chicken Tonkatsu",
    image: food2,
    price: "1600",
    desc: "Chicken, rice, curry, salad",
    rest: "Turandot",
  },
  {
    id: "12",
    name: "Sauce Tonkatsu",
    image: food1,
    price: "1400",
    desc: "Chicken, rice, curry, salad",
    rest: "Mama's Kitchen",
  },
];

const foodCategories = [
  {
    id: "q",
    name: "Комбо",
    foodList: foodData,
  },
  {
    id: "qs",
    name: "Супы",
    foodList: foodData2,
  },
  {
    id: "qsw",
    name: "Горячие блюда",
    foodList: foodData3,
  },
];
export const CartView = ({ navigation, route }) => {
  const [basket, setBasket] = useState(route.params.basket);
  const allFood = foodData.concat(foodData2).concat(foodData3);
  const [newBasket, setNewBasket] = useState(route.params.basket);

  const add = (food) => {
    setNewBasket([...newBasket, food]);
  };
  const remove = (id) => {
    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === id) {
        setNewBasket(newBasket.filter((item, j) => j !== i));
        return;
      }
    }
  };

  const getCount = (id = "first") => {
    let count = 0;
    console.log(id);
    if (id === "first") {
      return 1;
    }
    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === id) {
        count++;
      }
    }
    return count;
  };
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Подтверждение заказа</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={basket}
        renderItem={({ item: food }) => (
          <View style={styles.sectionFoodItem} key={food.id}>
            <View style={styles.sectionFoodItemImageView}>
              <Image source={food.image} style={styles.sectionFoodItemImage} />
            </View>
            <View style={styles.sectionFoodItemInfo}>
              <View style={styles.sectionFoodItemInfoTitle}>
                <Text style={styles.sectionFoodItemInfoTitleText}>
                  {food.name}
                </Text>
              </View>
              <View style={styles.sectionFoodItemInfoSubTitle}>
                <TouchableOpacity
                  style={styles.minus}
                  onPress={() => {
                    remove(food.id);
                  }}
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text>{getCount(food.id)}</Text>
                <TouchableOpacity
                  style={styles.plus}
                  onPress={() => {
                    add(food);
                  }}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.sectionFoodItemActiveSide}>
              <View style={styles.sectionFoodItemPrice}>
                <Text style={styles.sectionFoodItemPriceText}>
                  {food.price}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={styles.sectionFoodItemAddButton}
              >
                <Ionicons name="ios-add-circle" size={24} color="#DE3905" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.payButton} onPress={() => {}}>
        <Text style={styles.payButtonText}>
          Оплатить $
          {newBasket.reduce((state, current) => {
            return state + parseInt(current.price);
          }, 0)}
          ₸
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    paddingVertical: 65,
  },
  title: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DE3905",
  },
  flatList: {
    height: "100%",
  },
  sectionFoodItem: {
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  sectionFoodItemImageView: {
    width: 85,
    height: 70,
  },
  sectionFoodItemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  sectionFoodItemInfo: {
    width: "60%",
    height: "100%",
    paddingVertical: 10,
  },
  sectionFoodItemInfoTitle: {
    marginBottom: 5,
  },
  sectionFoodItemInfoTitleText: {
    fontSize: 14,
    fontWeight: "400",
  },
  sectionFoodItemInfoSubTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  plus: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ddd",
    marginLeft: 5,
  },
  minus: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 5,
  },
  sectionFoodItemInfoSubTitleText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8E8E93",
  },
  sectionFoodItemActiveSide: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionFoodItemPrice: {},
  sectionFoodItemPriceText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#DE3905",
  },
  sectionFoodItemAddButton: {
    paddingBottom: 20,
  },
  payButton: {
    backgroundColor: "#DE3905",
    position: "absolute",
    height: 40,
    width: 150,
    top: "90%",
    left: "35%",
    textAlign: "center",
    borderRadius: 10,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 10,
    textAlign: "center",
  },
});
