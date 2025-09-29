import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { getFullFormattedDate } from "@/helpers/date";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  completedTodos: number;
  totalTodos: number;
};

const Header: React.FC<HeaderProps> = ({ completedTodos, totalTodos }) => {
  const dateNOW = getFullFormattedDate(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.sun}>
        <StyledButton icon="sun" />
      </View>
      <View style={styles.headerMainContent}>
        <StyledText variant="title">Todo App</StyledText>
        <StyledText variant="subTitle">{dateNOW}</StyledText>
      </View>
      <StyledText>
        Completed: {completedTodos} / {totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 30,
  },
  headerMainContent: {
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  sun: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default Header;
