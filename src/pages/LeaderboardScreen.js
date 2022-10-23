import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// import components
import Card from "../components/Card";
import Button from "../components/Button";

const Mockup = [
  {name: 'โกบาส นักเลงท่าเรือ', total: 10230},
  {name: 'โกบาส นักเลงท่าเรือ', total: 10230},
  {name: 'โกบาส นักเลงท่าเรือ', total: 10230},
  {name: 'โกบาส นักเลงท่าเรือ', total: 10230},
  {name: 'โกบาส นักเลงท่าเรือ', total: 10230},
];

const UserCard = (props) => {
  console.log(props.rank);
  return(
    <View style={styles.flexContainer}>
      <View style={styles.rankBackground}>
        <Text style={styles.rank}>{props.rank+1}</Text>
      </View>
      <Text style={styles.user_name}>{props.user.name}</Text>
      <Text style={styles.user_name}>{props.user.total}</Text>
    </View>
  );
}

export default function LeaderboardScreen() {
  return(
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 35, fontWeight: '900', alignSelf: 'flex-start'}}>Leaderboard</Text>
      <Text style={{color: '#F81250', fontWeight: '900', fontSize: 25, alignSelf: 'flex-end'}}>TOTAL</Text>
      {

        Mockup.map((user, index) => {
          return(
            <UserCard user={user} rank={index} key={index} />
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    paddingTop: 90,
    width: '100%',
    paddingHorizontal: 20
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    borderRadius: 7,
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#565658',
    shadowColor: '#151515',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 1
  },
  user_name: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    alignSelf: 'center'
  },
  rankBackground: {
    borderRadius: 100,
    backgroundColor: '#F81250',
  },
  rank: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})