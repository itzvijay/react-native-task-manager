import { View, Text, StyleSheet, Pressable } from 'react-native';

function TaskItem(props) { //onpress makes it presseble so that when press detected do that or anything we ask can do that wecalled ondeleted where it is in the app,js it go there called the function as needed
  return ( 
    <Pressable onPress={props.onDeleteTask.bind(this,props.item.id)}> 
      <View style={styles.everyTaskItems} >
    <Text>
        {props.index + 1} : {props.item.text} and id : {props.item.id}
    </Text>
    </View>
    </Pressable>
    
  ); //bind is a method in JavaScript that returns a new function with the same body as the original function but with a fixed this value. //bind(this,id) it will bind the id with the function  so that we can get the id with this
}

const styles = StyleSheet.create({
everyTaskItems: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffe4e1",
},
});

export default TaskItem;
