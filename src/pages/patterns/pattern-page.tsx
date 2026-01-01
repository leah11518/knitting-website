import { usePatterns } from "../../redux/redux-store";
import { CustomDialog } from "../../components/dialog";
import { ChangeEvent, useRef, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "../../components/button";
import { AddPattern } from "./add-pattern";

export const Patterns = () => {
  const patterns = usePatterns();

  return (
    <>
      {patterns.length === 0 ? (
        <>
          <div>No patterns yet</div>
          <AddPattern />
        </>
      ) : (
        <div>
          <AddPattern />
        </div>
      )}
    </>
  );
};
