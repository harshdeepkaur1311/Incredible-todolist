import { StyleSheet, Text, View } from "react-native";
import ToDoList from "../component/toDoList";
import ToDoForm from "../component/toDoForm";
import { useState } from "react";



export default function Index() {
  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog']);
  
  return (
    <View >
    
     <ToDoList tasks={tasks}/>
     <ToDoForm/>
    </View>
  )
}

