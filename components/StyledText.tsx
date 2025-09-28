import COLORS from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
  variant?: "primary" | "title" | "subTitle" | "header" | "small";
};

const StyledText: React.FC<StyledTextProps> = ({
  style,
  variant = "primary",
  ...props
}) => {
  // нами созданный компонент
  return (
    <Text
      style={[
        styles.base,
        variant === "title" ? styles.title : null,
        variant === "subTitle" ? styles.subTitle : null,
        variant === "header" ? styles.header : null,
        variant === "small" ? styles.small : null,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "300",
  },
  header: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default StyledText;
