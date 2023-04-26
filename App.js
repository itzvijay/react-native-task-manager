import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AddNewTask from "./components/AddNewTask";
import TaskItem from "./components/TaskItem";


export default function App() {
  const [taskArray,setTaskArray] = useState([]);
  const [model,setModel] = useState(false);

  function addTasks(values){ //here we got the addTasks and now the task is parsed as the Values and we are updating the setTaskArrat as the new Task in it
    setTaskArray(() => 
      [...taskArray,{text:values,id: Math.random().toString()}]
    );
    
  }

  function deleteTask(id) {
    setTaskArray(taskArray.filter((task) => task.id !== id));
  } //In this updated function, we use the filter method to create a new array that excludes the task with the specified id. We then update the taskArray state with this new array using the setTaskArray function.
  //So, the filter() method returns a new array that contains all the tasks except the one with the given id. The new array is then set as the new state using the setTaskArray() method. This effectively removes the task with the given id from the taskArray state.
  
  function modelCreate(){
    setModel(true);
  }

  function hideTask(){ //when press on cancel then AddNewTask addTaskValues={addTasks} this will not show
    setModel(false)
  }

  return ( //if model becomes the true then show <AddNewTask addTaskValues={addTasks} /> onPress this function will trigger //In this updated code, we are using a ternary operator to conditionally render either the AddNewTask component or the "Add New Task" button based on the value of the model state. If model is true, then we show the AddNewTask component, otherwise we show the button.
    <View style={styles.inputAndButton}>
      {model ? <AddNewTask addTaskValues={addTasks} cancelTask = {hideTask}/> : <Button title="Add New Task" onPress={modelCreate} /> } 
      <View style={styles.SecondPartTasks}>
        {taskArray.length > 0 ? (
          <Text style={styles.YourTaskCss}>Your Tasks!</Text>
        ) : null}

        {/*model && <AddNewTask addTaskValues={addTasks} its like an ternary operatory without the second value here if model is true then show that as  <AddNewTask addTaskValues={addTasks} />
        <ScrollView>
         {taskArray.map((TaskItems,index) => {
          return (
            <View key={index} style={styles.everyTaskItems}>
              <Text>{index+1} : {TaskItems.text}  {TaskItems.id}</Text>
            </View>
          )
        })}
        </ScrollView> */}

        <FlatList
          data={taskArray}
          renderItem={({item,index}) => {
            return <TaskItem item={item} index ={index} onDeleteTask = {deleteTask}/>
          } }
        /> 
      </View>
    </View>
  ); //flatList component have the data as we have taskarrray and renderItem as item and index is nothing but the index no for that
}

const styles = StyleSheet.create({
  inputAndButton: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
  },
  SecondPartTasks: {
    flex: 2,
    marginVertical: 10,
  },
  YourTaskCss: {
    fontSize: 22,
    fontWeight: "bold",
  },
});


