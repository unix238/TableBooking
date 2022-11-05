import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

export const Link = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.styleView}>
        <Text style={props.style}>{props.children}</Text>
    </TouchableOpacity>
  )
}
