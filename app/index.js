import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import ToDoList from "./toDoList";
import ToDoForm from "./toDoForm";
import { useState } from "react";



const App = () => {
  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog']);


  const addTask = (taskText) => {
    if (tasks.includes(taskText)) {
      alert('This Task already exists!');
      return;
    }
    setTasks([...tasks, taskText]);
  }
  
  return (
    <SafeAreaView >
    
     <ToDoList tasks={tasks}/>
     <ToDoForm addTask = {addTask}/>
    </SafeAreaView>
  )
}
export default App;

