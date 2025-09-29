import COLORS from "@/constants/ui";
import useTodo from "@/hooks/useTodo";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreater";
import TodoList from "@/layout/ToDoList";
import { StatusBar, StyleSheet, View } from "react-native";

// const defaultTodos: Todo[] = [
//   {
//     id: 1,
//     title: "WorkOut",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     title: "Shopping",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: "Chores",
//     isCompleted: false,
//   },
// ];

export default function Index() {
  const {
    defaultTodos,
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    todos,
    completedTodos,
  } = useTodo();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodoTitle={onUpdateTodoTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
