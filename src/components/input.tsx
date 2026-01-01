import * as React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ value, onChange, ...props }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="outlined"
      size="small"
      fullWidth
      sx={(theme) => ({
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create(["border-color", "box-shadow"], {
            duration: theme.transitions.duration.short,
          }),

          "& fieldset": {
            borderColor: theme.palette.divider,
          },

          "&:hover fieldset": {
            borderColor: theme.palette.text.secondary,
          },

          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        },

        "& input": {
          padding: "10px 12px",
        },
      })}
      {...props}
    />
  );
};

export default Input;
