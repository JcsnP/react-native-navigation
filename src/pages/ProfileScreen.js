import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// import components
import Card from "../components/Card";
import Button from "../components/Button";

export default function ProfileScreen() {
  return(
    <View style={styles.container}>
      <Card message="แอปนี้อยู่ในขั้นตอนการพัฒนา รายละเอียดต่อไปนี้เป็นรายละเอียดสำหรับการทดสอบเบื้องต้นของแอปพลิเคชัน" />
      <Button title="LOGOUT" onPress={() => {alert('thanks')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
