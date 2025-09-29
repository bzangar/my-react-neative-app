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
  variant?: "default" | "secondary" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant = "default",
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === "large") return "header";
    return "small";
  })();
  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        variant === "secondary" ? styles.secondary : null,
        variant === "delete" ? styles.delete : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText variant={textVariant}>{label}</StyledText>}
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

  disabled: {
    opacity: 0.5,
  },

  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  large: {
    paddingHorizontal: 30,
  },

  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    borderWidth: 1.5,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyledButton;
