import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import COLORS from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, Vibration, View } from "react-native";
import DeleteTodoModal from "../Modals/DeleteTodoModal";
import EditTodoModal from "../Modals/EditTodoModal";

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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onPressCheck = () => {
    onCheck(id);
    Vibration.vibrate(10);
  };

  const onPressDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const onConfirmDelete = () => {
    Vibration.vibrate(50);
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
        <StyledButton
          icon="edit"
          size="small"
          onPress={() => setIsEditModalOpen(true)}
        />
        <EditTodoModal
          title={title}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={(title) => onUpdateTitle(id, title)}
        />
        <StyledButton
          icon="delete"
          size="small"
          variant="delete"
          onPress={onPressDelete}
        />
        <DeleteTodoModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={onConfirmDelete}
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
