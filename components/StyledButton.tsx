import COLORS from "@/constants/ui";
import AntDesign from "@expo/vector-icons/AntDesign";

import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  size?: "default" | "large" | "small";
  variant?: "default" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant = "default",
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        size === "small" ? styles.small : null,
        variant === "delete" ? styles.delete : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && <AntDesign name={icon} size={20} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0,
  },

  small: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyledButton;
