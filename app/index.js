import { StyleSheet, Text, View } from "react-native";
import ToDoList from "../component/toDoList";
import ToDoForm from "../component/toDoForm";



export default function Index() {
  return (
    <View >
    
     <ToDoList/>
     <ToDoForm/>
    </View>
  )
}

