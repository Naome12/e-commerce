import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SpalshScreen from "expo-splash-screen";
import { useCallback } from 'react';

export default function App() {
  const [fontsload] = useFonts({
    
  })
  return (
    <View style={styles.container}>
      <Text>to start work on your app</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent:'center',
  },
});