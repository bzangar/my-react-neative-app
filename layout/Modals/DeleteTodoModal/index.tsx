import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

type DeleteTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="header">Delete Todo</StyledText>
        <StyledText variant="subTitle">
          Are you sure you want to delete?
        </StyledText>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton label="Cancel" onPress={onClose} variant="secondary" />
        <StyledButton label="Delete" onPress={onDelete} />
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    paddingTop: 20,
    gap: 10,
  },
});

export default DeleteTodoModal;
