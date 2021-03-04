import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos,myfunction1]=useState([
    {text:'buy a coffe', key:1},
    {text:'buy a coffe2', key:2},
    {text:'buy a coffe3', key:3}
  ]);

  const pressHandler = (key)=>{
    myfunction1((prevTodos)=>{
      return prevTodos.filter(item=>item.key!=key);
    })
  } 

  const sumbitHandler = (text) =>{
    myfunction1((prevTodos)=>{
      return [
        {text:text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>   
        <AddTodo submitHandler={sumbitHandler}/>     
        <View style={styles.list}>
          <FlatList
            data={todos} 
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
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
