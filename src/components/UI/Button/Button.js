import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.disabled ? null : props.onPress}
      style={props.disabled ? styles.disabled : styles.button}
      disabled={props.disabled}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DE3905',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  disabled: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
