import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Ближайшие заведения',
    text: 'Забронируйте столик в любимом ресторане, кафе или баре',
    image: require('../../static/img/welcome1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'Закажите еду заранее',
    text: 'Закажите еду через приложение чтобы не ждать официанта',
    image: require('../../static/img/welcome2.png'),
    backgroundColor: '#fff',
  },
  {
    key: 3,
    title: 'Вкусная еда',
    text: 'Только вкусная еда, которая вам понравится',
    image: require('../../static/img/welcome3.png'),
    backgroundColor: '#fff',
  },
];

export const WelcomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Готово</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>-{'>'}</Text>
      </View>
    );
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={navigateToLogin}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        doneLabel='Войти'
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    marginTop: 16,
  },
  dot: {
    backgroundColor: '#000',
  },
  activeDot: {
    backgroundColor: '#DE3905',
  },
  buttonCircle: {
    width: 80,
    height: 40,
    backgroundColor: '#DE3905',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
