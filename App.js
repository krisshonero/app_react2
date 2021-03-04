import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos,myfunction1]=useState([
    {text:'buy a coffe', key:1},
    {text:'buy a coffe2', key:2},
    {text:'buy a coffe3', key:3}
  ]);
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>        
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:40
  },
  list:{
    padding:40
  }
});
