import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import { useRestaurants } from '../hooks/useRestaurants';

import { useAuth } from '../hooks/useAuth';
import { EvilIcons } from '@expo/vector-icons';
import { Loader } from '../components/UI/Loader/Loader';

export const Search = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const findHandler = () => {
    setFilteredData(
      restaurants.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  useEffect(() => {
    useRestaurants(setRestaurants, setIsLoading);
  }, []);

  useEffect(() => {
    findHandler();
  }, [input]);

  const auth = useAuth();

  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder='Найти'
          value={input}
          autoCompleteType='off'
          autoComplete='off'
          autoCorrect={false}
          onChange={(e) => {
            setInput(e.nativeEvent.text);
          }}
          // auto focus on load
          autoFocus={true}
        />
        <TouchableOpacity onPress={findHandler}>
          <EvilIcons name='search' size={40} color={'#DE3905'} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loader />
      ) : filteredData.length === 0 ? (
        <Text style={styles.notFound}>Ничего не найдено</Text>
      ) : (
        <FlatList
          data={filteredData}
          style={{ height: '100%' }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', { item });
                }}
              >
                <Image style={styles.card} source={{ uri: item.images[0] }} />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    width: '85%',
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
  notFound: {
    fontSize: 20,
    color: '#DE3905',
    marginTop: 30,
    textAlign: 'center',
  },
});
