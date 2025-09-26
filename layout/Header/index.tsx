import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  completedTodos: number;
  totalTodos: number;
};

const Header: React.FC<HeaderProps> = ({ completedTodos, totalTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>Header</StyledText>
        <StyledText>September 12, 2025</StyledText>
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
});

export default Header;
