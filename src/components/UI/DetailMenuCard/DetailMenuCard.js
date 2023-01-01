import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import foodImg from '../../../static/img/food1.png';

export default function DetailMenuCard({ item }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={foodImg} style={styles.image} />
      </View>
      <View style={styles.foodTexts}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 15,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  foodTexts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 100,
  },
});
