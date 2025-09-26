import COLORS from "@/constants/ui";
import Header from "@/layout/Header";
import TodoList from "@/layout/ToDoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "WorkOut",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Shopping",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Chores",
    isCompleted: false,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const completedTodos = todos.filter((todos) => todos.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoList todos={defaultTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
