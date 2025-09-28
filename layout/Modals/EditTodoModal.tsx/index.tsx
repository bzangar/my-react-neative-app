import COLORS from "@/constants/ui";
import { Todo } from "@/types/todo";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  title,
}) => {
  return <View></View>;
};

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
