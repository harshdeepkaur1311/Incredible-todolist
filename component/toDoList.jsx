

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
    <SafeAreaView style = {styles.listContainer}>
      <ScrollView> 
        {tasks.map((task, index)=>(
           <Pressable key={index}>
            <View style = {[styles.completed, styles.task]}>
             <Text style = {styles.taskText} >{task}</Text>
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
    borderBottomWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 8,
    marginRight: 800,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  
  },
  listContainer: {
    flex: 1,
    margin: 20,

  },

  
});

export default ToDoList;
