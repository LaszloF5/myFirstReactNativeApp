import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type TodoItem = {
  text: string;
  done: boolean;
};

const Todo = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push("/(tabs)");
  };

  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const [todoValue, setTodoValue] = useState<string>("");

  const addtodo = () => {
    let trimmedtodo = todoValue.trim();

    if (trimmedtodo.length === 0) {
      Alert.alert("Alert", "Fill out this field!", [{ text: "OK" }]);
      return;
    }
    setTodoList([...todoList, { text: trimmedtodo, done: false }]);
    setTodoValue("");
  };

  const deleteItem = (index: number) => {
    let updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const doneItem = (index: number) => {
    let updatedList = [...todoList];
    updatedList[index].done = !updatedList[index].done;
    setTodoList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo list</Text>
      <View>
        <TextInput
        style={[styles.text, styles.input]}
          placeholder="Type your todo"
          placeholderTextColor='red'
          value={todoValue}
          onChangeText={setTodoValue}
        />
        <TouchableOpacity style={styles.button} onPress={addtodo}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        {todoList.map((todo, index) => (
          <View key={index} style={styles.todoList}>
            <Text
              style={[
                styles.text,
                styles.todoListText,
                todo.done && styles.todoListTextDone,
              ]}
            >
              {todo.text}
            </Text>
            <TouchableOpacity onPress={() => doneItem(index)}>
              <Text style={[styles.text, styles.itemDone]}>{todo.done ? "✅" : "✔️"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(index)}>
              <Text style={styles.itemDelete}>❌</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={goToMainPage}>
        <Text style={styles.buttonText}>Go to main page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  },
  text: {
    color: 'white',
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#fff",
    marginTop: 16,
    marginBottom: 8,
  },
  todoList: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  todoListText: {
    fontSize: 18,
  },
  itemDelete: {
    justifyContent: "center",
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: "red",
    color: "white",
    fontSize: 18,
    borderRadius: 10,
  },
  todoListTextDone: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  itemDone: {
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: "green",
    color: "white",
    fontSize: 18,
    borderRadius: 10,
  },
});

export default Todo;


