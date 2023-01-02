import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { SearchBar } from '../components/UI/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { useRestaurants } from '../hooks/useRestaurants';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export const Restaurants = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    useRestaurants(setRestaurants, setIsLoading);
  }, []);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    useRestaurants(setRestaurants, setIsLoading);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.root}>
      <SearchBar
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
      <View style={styles.offer}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#DE3905' />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', { item });
                }}
              >
                <Image style={styles.image} source={{ uri: item.images[0] }} />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            style={{ height: '100%' }}
          />
        )}
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
    height: '100%',
  },
});
