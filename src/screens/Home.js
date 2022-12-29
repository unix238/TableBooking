import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../components/UI/SearchBar/SearchBar';
import { AntDesign } from '@expo/vector-icons';

import { useRestaurants } from '../hooks/useRestaurants';

export const Home = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useRestaurants(setRestaurants, setIsLoading);
  }, []);

  const auth = useAuth();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SearchBar
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
      </View>
      <ScrollView style={styles.main}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#DE3905' />
        ) : (
          <>
            <View style={styles.offerView}>
              <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.offerCard}
                    onPress={() => {
                      navigation.navigate('detail', { item });
                    }}
                  >
                    <Image
                      style={styles.offerImage}
                      source={{ uri: item.images[0] }}
                    />
                  </TouchableOpacity>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <TouchableOpacity style={styles.new}>
              <View style={styles.newText}>
                <Text style={styles.newTitle}>Новые Рестораны</Text>
                <Text style={styles.newSubTitle}>Новые рестораны</Text>
              </View>
              <View style={styles.newLink}>
                <Text>Все</Text>
                <AntDesign name='right' size={24} color='black' />
              </View>
            </TouchableOpacity>
            <View style={styles.newItems}>
              <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.newItem}
                    onPress={() => {
                      navigation.navigate('detail', { item });
                    }}
                  >
                    <View style={styles.newItemTop}>
                      <Image
                        style={styles.newItemImage}
                        source={{ uri: item.images[0] }}
                      />
                    </View>
                    <View style={styles.newItemBottom}>
                      <Text style={styles.newItemTitle}>{item.title}</Text>
                      <Text style={styles.newItemSubTitle}>
                        <Ionicons
                          name='ios-location-sharp'
                          size={16}
                          color='#DE3905'
                        />
                        {item.location}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <TouchableOpacity style={styles.new}>
              <View style={styles.newText}>
                <Text style={styles.newTitle}>Забронировать столик</Text>
                <Text style={styles.newSubTitle}>Заброниоовать столик</Text>
              </View>
              <View style={styles.newLink}>
                <Text>Все</Text>
                <AntDesign name='right' size={24} color='black' />
              </View>
            </TouchableOpacity>

            {restaurants.map((item) => {
              return (
                <View style={styles.resCard} key={`listmain${item._id}`}>
                  <View style={styles.resCardLeft}>
                    <Image
                      style={styles.resCardImage}
                      source={{ uri: item.images[0] }}
                    />
                  </View>
                  <View style={styles.resCardRight}>
                    <View style={styles.resCardTop}>
                      <Text style={styles.resCardTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.resCardBottom}>
                      <View style={styles.resCardBottomLeft}>
                        <Ionicons
                          name='ios-location-sharp'
                          size={16}
                          color='#DE3905'
                          style={{ marginRight: 5 }}
                        />
                        <Text>{item.location}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.resCardBottomRight}
                        onPress={() => {
                          navigation.navigate('detail', { item });
                        }}
                      >
                        <Text style={styles.buttonText}>Бронь</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 65,
  },
  header: {
    paddingRight: 40,
    marginBottom: 15,
    paddingLeft: 30,
  },
  offerCard: {
    width: 280,
    height: 120,
    marginLeft: 18,
    marginTop: 30,
  },
  offerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  new: {
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  newText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  newTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newSubTitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '400',
  },
  newLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newItems: {
    width: '100%',
    paddingTop: 20,
  },
  newItem: {
    width: 150,
    height: 185,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 18,
    borderRadius: 20,
  },
  newItemImage: {
    width: 150,
    height: 120,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  newItemBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
  },
  newItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
  },
  newItemSubTitle: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '400',
  },
  resCard: {
    marginLeft: 18,
    width: 380,
    height: 88,
    borderRadius: 20,
    padding: 12,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  resCardImage: {
    height: 64,
    width: 64,
    borderRadius: 10,
  },
  resCardRight: {
    marginLeft: 16,
  },
  resCardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  resCardBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resCardBottomLeft: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
  },
  resCardBottomRight: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#DE3905',
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
