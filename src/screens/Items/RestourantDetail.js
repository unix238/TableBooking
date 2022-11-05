import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {Link} from '../../components/UI/Link/Link'

export const RestaurantDetail = ({ navigation, route }) => {
  const [item, setItem] = useState(route.params.item);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.resCard}>
        <View style={styles.resInfo}>
          <Text style={styles.resTitle}>{item.name}</Text>
          <Text style={styles.resSubTitle}>
            <Ionicons
              name="ios-location-sharp"
              size={16}
              color="#DE3905"
              style={{ marginRight: 5 }}
            />
            {item.location}
          </Text>
        </View>
        <View style={styles.resCardImageView}>
          <Image style={styles.resCardImage} source={item.image} />
        </View>
        <View style={styles.resCardAdditionalInfo}>
          <View style={styles.resCardAdditionalInfoLeft}>
            <Text style={styles.resCardAdditionalInfoTitle}>10:00 AM - 12:00 PM</Text>
          </View>
          <View style={styles.resCardAdditionalInfoRight}>
            <Link style={styles.resCardAdditionalInfoRightLink}>Показать на карте</Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
  },
  resCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 15,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  resInfo:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  resSubTitle: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
    paddingBottom: 20
  },
  resTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },  
  resCardImageView:{
    width: "100%",
    height: 180,
  },
  resCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 14
  },
  resCardAdditionalInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },
  resCardAdditionalInfoLeft: {
    paddingBottom: 20
  },
  resCardAdditionalInfoTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  resCardAdditionalInfoRight: {
    paddingBottom: 20
  },
  resCardAdditionalInfoRightLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#DE3905",
    paddingRight: 20,
  }
});
