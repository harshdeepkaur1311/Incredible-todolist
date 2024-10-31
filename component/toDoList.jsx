

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


const ToDoList=({tasks})=> {
  return (
    <SafeAreaView>
      <ScrollView> 
        {tasks.map((task, index)=>(
           <Pressable key={index}>
            <View>
             <Text >{task}</Text>
            </View>
           </Pressable>
        ))}
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  
});

export default ToDoList;
