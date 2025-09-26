import { Todo } from "@/types/todo";
import { View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator = () => {
  return <View></View>;
};
