import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from '../../components/UI/Link/Link';
import RestaurantsService from '../../api/restaurantService';
import DetailMenuCard from '../../components/UI/DetailMenuCard/DetailMenuCard';
import { Loader } from '../../components/UI/Loader/Loader';

export const RestaurantDetail = ({ navigation, route }) => {
  const [item, setItem] = useState(route.params.item);
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const loadFood = async () => {
    try {
      let response = await RestaurantsService.getFoodItems(item._id);
      setFoods(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFood();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.root}>
          <View style={styles.resCard}>
            <View style={styles.resInfo}>
              <Text style={styles.resTitle}>{item.title}</Text>
              <Text style={styles.resSubTitle}>
                <Ionicons
                  name='ios-location-sharp'
                  size={16}
                  color='#DE3905'
                  style={{ marginRight: 5 }}
                />
                {item.location}
              </Text>
            </View>
            <View style={styles.resCardImageView}>
              <Image
                style={styles.resCardImage}
                source={{ uri: item.images[0] }}
              />
            </View>
            <View style={styles.resCardAdditionalInfo}>
              <View style={styles.resCardAdditionalInfoLeft}>
                <Text style={styles.resCardAdditionalInfoTitle}>
                  10:00 AM - 12:00 PM
                </Text>
              </View>
              <View style={styles.resCardAdditionalInfoRight}>
                <Link style={styles.resCardAdditionalInfoRightLink}>
                  Показать на карте
                </Link>
              </View>
            </View>
          </View>
          <View style={styles.resCard}>
            <View style={styles.resInfo}>
              <Text style={styles.resTitle}>Бронь</Text>
            </View>
          </View>
          <View style={styles.resCard}>
            <View style={styles.resInfo}>
              <Text style={styles.resTitle}>Меню</Text>
            </View>
            <View style={styles.cardsView}>
              <View style={styles.card}>
                {foods.map((food) => (
                  <DetailMenuCard key={food._id} item={food} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  root: {},
  resCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 15,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  resInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  resSubTitle: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    paddingBottom: 20,
  },
  resTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resCardImageView: {
    width: '100%',
    height: 180,
  },
  resCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
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
    paddingBottom: 20,
  },
  resCardAdditionalInfoTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  resCardAdditionalInfoRight: {
    paddingBottom: 20,
  },
  resCardAdditionalInfoRightLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DE3905',
    paddingRight: 20,
  },
  cardsView: {
    paddingBottom: 20,
  },
});
