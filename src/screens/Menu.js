import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "../components/UI/SearchBar/SearchBar";
import { AntDesign } from "@expo/vector-icons";

import food1 from "../static/img/food1.png";
import food2 from "../static/img/food2.png";

import res1 from "../static/img/res1.jpeg";
import res2 from "../static/img/res2.jpeg";
import res3 from "../static/img/res3.jpeg";

export const Menu = ({ navigation, route }) => {
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
  const [basket, setBasket] = useState([]);
  const [item, setItem] = useState(
    resData.find((item) => item.id === route.params.id)
  );
  const isAdded = (id) => {
    return basket.find((item) => item.id == id);
  };

  const addToBasket = (id, type = "card") => {
    if (type === "card") {
      if (isAdded(id)) {
        return;
      } else {
        const allFood = foodData.concat(foodData2, foodData3);
        setBasket([...basket, allFood.find((item) => item.id == id)]);
      }
    } else {
      const allFood = foodData.concat(foodData2, foodData3);
      setBasket([...basket, allFood.find((item) => item.id == id)]);
    }
  };
  const cart = () => {
    // navigation.navigate("cart", {
    //   basket: basket,
    //   allFood: foodData.concat(foodData2, foodData3),
    // });
  };

  const remove = (id) => {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === id) {
        setBasket(basket.filter((item, j) => j !== i));
        return;
      }
    }
  };

  const getCount = (id = "first") => {
    let count = 0;
    if (id === "first") {
      return 1;
    }
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === id) {
        count++;
      }
    }
    return count;
  };

  const isInList = (id) => {
    return basket.find((item) => item.id == id);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image source={item.image} style={styles.headerImage} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.contentTitleText}>{item.name}</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foodCategories}
          style={styles.contentList}
          renderItem={({ item: foodCategories }) => (
            <View style={styles.sectionFood}>
              <View style={styles.sectionFoodTitle}>
                <Text style={styles.sectionFoodTitleText}>
                  {foodCategories.name}
                </Text>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
                data={foodCategories.foodList}
                renderItem={({ item: food }) => (
                  <TouchableOpacity
                    style={styles.sectionFoodItem}
                    key={food.id}
                    onPress={() => {
                      addToBasket(food.id);
                    }}
                  >
                    <View style={styles.sectionFoodItemImageView}>
                      <Image
                        source={food.image}
                        style={styles.sectionFoodItemImage}
                      />
                    </View>
                    <View style={styles.sectionFoodItemInfo}>
                      <View style={styles.sectionFoodItemInfoTitle}>
                        <Text style={styles.sectionFoodItemInfoTitleText}>
                          {food.name}
                        </Text>
                      </View>
                      <View style={styles.sectionFoodItemInfoSubTitle}>
                        <Text style={styles.sectionFoodItemInfoSubTitleText}>
                          {food.desc}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionFoodItemActiveSide}>
                      <View style={styles.sectionFoodItemPrice}>
                        <Text style={styles.sectionFoodItemPriceText}>
                          {food.price}
                        </Text>
                      </View>
                      <View style={styles.buttons}>
                        {isInList(food.id) ? (
                          <>
                            <TouchableOpacity
                              onPress={() => {
                                remove(food.id);
                              }}
                              style={styles.sectionFoodItemAddButton}
                            >
                              <Ionicons
                                name="ios-remove-circle-outline"
                                size={30}
                                color="#DE3905"
                              />
                            </TouchableOpacity>
                            <View style={styles.count}>
                              <Text style={styles.countText}>
                                {getCount(food.id)}
                              </Text>
                            </View>
                          </>
                        ) : null}

                        <TouchableOpacity
                          onPress={() => {
                            addToBasket(food.id, "all");
                          }}
                          style={styles.sectionFoodItemAddButton}
                        >
                          <Ionicons
                            name="ios-add-circle"
                            size={30}
                            color="#DE3905"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        />
        {basket.length > 0 && (
          <TouchableOpacity style={styles.payButton} onPress={cart}>
            <Text style={styles.payButtonText}>
              {basket.length > 0
                ? `Оплатить ${basket.reduce((state, current) => {
                    return state + parseInt(current.price);
                  }, 0)}₸`
                : "Выберите блюдо"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {},
  content: {
    paddingHorizontal: 18,
  },
  flatList: {},
  header: {
    height: 180,
    width: "100%",
  },
  contentList: {
    height: "70%",
  },
  headerImage: {
    height: "100%",
    width: "100%",
  },
  contentTitle: {
    marginTop: 20,
    paddingVertical: 5,
  },
  contentTitleText: {
    fontSize: 24,
    fontWeight: "400",
  },
  sectionFood: {
    marginTop: 20,
  },
  sectionFoodTitle: {
    marginBottom: 5,
  },
  sectionFoodTitleText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#DE3905",
  },
  sectionFoodItem: {
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
  sectionFoodItemInfoSubTitle: {},
  sectionFoodItemInfoSubTitleText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8E8E93",
  },
  sectionFoodItemActiveSide: {
    width: "15%",
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
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "stretch",
  },
  count: {
    width: 12,
    display: "flex",
    paddingTop: 5,
  },
  countText: {
    fontSize: 16,
    fontWeight: "400",
  },
});
