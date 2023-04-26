import { useState } from "react";
import { StyleSheet } from "react-native"

function InputTasks(props){

    const [taskArray, setTaskArray] = useState([]);
    function addTasks() {
        setTaskArray([...taskArray, { text: props.task, id: Math.random().toString() }]);
        setTask("");
      }

    return(
        <View style={styles.SecondPartTasks}>
        {taskArray.length > 0 ? (
          <Text style={styles.YourTaskCss}>Your Tasks!</Text>
        ) : null}

        {/* <ScrollView>
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
            return (
              <View style={styles.everyTaskItems} >
                <Text>
                  {index + 1} : {item.text} and id : {item.id}
                </Text>
              </View>
            )
          } }
        />
      </View>
    )
}

const styles = StyleSheet.create({
  SecondPartTasks: {
    flex: 5,
    marginVertical: 10,
  },
  YourTaskCss: {
    fontSize: 22,
    fontWeight: "bold",
  },
  everyTaskItems: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffe4e1",
  }
});

export default InputTasks;