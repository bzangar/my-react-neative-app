import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
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
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [inputError, setInputError] = useState(false);

  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);
      return;
    }
    onUpdate(updatedTitle);
    onClose();
  };

  useEffect(() => {
    if (inputError && updatedTitle) {
      setInputError(false);
    }
  }, [updatedTitle]);

  useEffect(() => {
    setUpdatedTitle(title);
  }, [isOpen]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="header">Edit Todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder="Edit todo..."
            isError={inputError}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Отмена" onPress={onClose} variant="secondary" />
          <StyledButton
            label="Сохранить"
            onPress={onPressSave}
            disabled={inputError}
          />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 20,
    gap: 10,
  },
});

export default EditTodoModal;
