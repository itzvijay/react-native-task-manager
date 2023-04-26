import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

function AddNewTask(props){

    const [task, setTask] = useState("");
    function everyInputChange(inputText) {
        setTask(inputText);
      }

      function addTask(){
        if(task){  //user enter data or text input then this will trigger and add that dala else it will show us the alert Message
        props.addTaskValues(task);  //here we parsing the task to the addtaskVslues located in the app.js and called it with the task present there
        setTask("");
       }else{
        Alert.alert("This Field Requires")
      }
    }

    

    return (
    <View style={styles.inputAndButton}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        placeholder="Enter Your Task"
        style={{
          borderColor: "#20b2aa",
          borderWidth: 2,
          borderRadius: 20,
          padding: 10,
        }}
        value={task}
        onChangeText={everyInputChange}
      />
      <View
        style={{
          marginTop: 10,
          width: "40%",
          position: "relative",
          left: "60%",
        }}
      >
        <Button title="Add Task" onPress={addTask} />
      </View>
      <View
        style={{
          marginTop: 10,
          width: "40%",
          position: "relative",
          left: "60%",
        }}
      >
        <Button title="Cancel" onPress={props.cancelTask} />
      </View>
    </View>
    ) 
}

const styles = StyleSheet.create({
    inputAndButton: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 20,
      },
    });

export default AddNewTask;