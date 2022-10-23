import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button({title, onPress}) {
  return(
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 7,
    borderRadius: 10,
    backgroundColor: '#BF5BF2'
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    alignSelf: 'center',
  }
});