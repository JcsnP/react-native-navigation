import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

// pages
import ProfileScreen from './src/pages/ProfileScreen';
import LeaderboardScreen from './src/pages/LeaderboardScreen';

const Feed = () => {
  return(
    <View style={styles.container}>
      <Text>Feed!</Text>
    </View>
  );
}

const Report = () => {
  return(
    <View style={styles.container}>
      <Text>Report!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return(
    <Tab.Navigator
      initialRouteName='Feed'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#000000',
          borderTopWidth: 1
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Report'
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="badge-account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Leaderboard'
        component={LeaderboardScreen}
        options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
