import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import COLORS from "@/constants/ui";
import { StyleSheet, View } from "react-native";

type TodoItemProps = {
  title: string;
  iscompleted: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ title, iscompleted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckBox
          checked={iscompleted}
          onCheck={() => {}}
        ></StyledCheckBox>
        <StyledText
          style={[
            { textDecorationLine: iscompleted ? "line-through" : "none" },
          ]}
        >
          {" "}
          {title}
        </StyledText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon="edit" size="small" />
        <StyledButton icon="delete" size="small" variant="delete" />
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
