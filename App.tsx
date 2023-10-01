import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text className='text-red-700'>Open up App.tsx to start working on your app!</Text>
      <StatusBar/>
    </SafeAreaView>
  );
}

