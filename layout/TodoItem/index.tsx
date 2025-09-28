import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import COLORS from "@/constants/ui";
import { Todo } from "@/types/todo";
import { StyleSheet, View } from "react-native";

type TodoItemProps = Todo & {
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  onCheck,
  onDelete,
  onUpdateTitle,
}) => {
  const onPressCheck = () => {
    onCheck(id);
  };

  const onPressDelete = () => {
    onDelete(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckBox
          checked={isCompleted}
          onCheck={onPressCheck}
        ></StyledCheckBox>
        <StyledText
          style={[
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {" "}
          {title}
        </StyledText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon="edit" size="small" />
        <StyledButton
          icon="delete"
          size="small"
          variant="delete"
          onPress={onPressDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    padding: 15,
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  checkTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default TodoItem;
