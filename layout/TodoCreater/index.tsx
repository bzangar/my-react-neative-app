import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    Keyboard.dismiss();
    onAddTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError && text) {
      setInputError(false);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add todo..."
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <StyledButton
        label="+"
        onPress={onPressAdd}
        disabled={inputError}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    gap: 15,
    marginVertical: 30,
    paddingHorizontal: 10,
  },
});
export default TodoCreator;
