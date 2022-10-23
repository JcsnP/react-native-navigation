import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({message}) {
  return(
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#343436',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '600'
  }
});
