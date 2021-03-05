import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert , TouchableWithoutFeedback, Keyboard, Touchable} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [todos,myfunction1]=useState([
    {text:'buy a coffe', key:'1'},
    {text:'buy a coffe2', key:'2'},
    {text:'buy a coffe3', key:'3'}
  ]);

  const pressHandler = (key)=>{
    myfunction1((prevTodos)=>{
      return prevTodos.filter(item=>item.key!=key);
    })
  } 

  const sumbitHandler = (text) =>{

    if(text.length > 3){
      myfunction1((prevTodos)=>{
        return [
          {text:text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPS!', 'el texto debe ser mayor a 3',[
        {text:'Understood', onPress:()=>console.log('Alert closed')}
      ])
    }    
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dismiss keyboard');
      Keyboard.dismiss();
    }}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{
    padding:40
  }
});
