// CustomDialog.tsx
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CustomButton from "./button";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  isConfirmDisabled?: boolean;
  confirmText?: string;
  cancelText?: string;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  isConfirmDisabled,
  confirmText = "Confirm",
  cancelText = "Cancel",
  fullWidth = true,
  maxWidth = "sm",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      className="bg-secondary"
    >
      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions>
        <CustomButton onClick={onClose} variantType="primary">
          {cancelText}
        </CustomButton>
        {onConfirm && (
          <CustomButton
            disabled={isConfirmDisabled || false}
            onClick={onConfirm}
            sx={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-fg)",
              "&:hover": { backgroundColor: "var(--primary)/80" },
            }}
          >
            {confirmText}
          </CustomButton>
        )}
      </DialogActions>
    </Dialog>
  );
};
