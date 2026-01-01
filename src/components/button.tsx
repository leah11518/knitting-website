// CustomButton.tsx
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

type VariantType = "primary" | "secondary" | "accent" | "destructive";

interface CustomButtonProps extends ButtonProps {
  variantType?: VariantType;
}

const variantColors: Record<
  VariantType,
  { bg: string; color: string; hoverBg?: string }
> = {
  primary: {
    bg: "var(--primary)",
    color: "var(--primary-fg)",
    hoverBg: "var(--muted)",
  },
  secondary: {
    bg: "var(--secondary)",
    color: "var(--secondary-fg)",
    hoverBg: "var(--secondary)/80",
  },
  accent: {
    bg: "var(--accent)",
    color: "var(--accent-fg)",
    hoverBg: "var(--accent)/80",
  },
  destructive: {
    bg: "var(--destructive)",
    color: "var(--destructive-fg)",
    hoverBg: "var(--destructive)/80",
  },
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  style,
  sx,
  ...props
}) => {
  const colors = variantColors[variantType];

  return (
    <Button
      {...props}
      sx={{
        backgroundColor: colors.bg,
        color: colors.color,
        "&:hover": {
          backgroundColor: colors.hoverBg ?? colors.bg,
        },
        ...sx,
      }}
      style={style}
    />
  );
};

export default CustomButton;
