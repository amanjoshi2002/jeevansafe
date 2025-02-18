import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' }, // Change background to white
        tabBarActiveTintColor: '#000', // Active icon color to black
        tabBarInactiveTintColor: '#888', // Inactive icon color to gray
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color="#000" /> // Change icon color to black
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color="#000" /> // Change icon color to black
          ),
        }}
      />
    </Tabs>
  );
}
