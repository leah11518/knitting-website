import { CustomDialog } from "../../components/dialog";
import { ChangeEvent, useRef, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "../../components/button";
import Input from "../../components/input";

type PatternInfoProps = {
  valueToInput: string;
};

const PatternInfo = (props: PatternInfoProps) => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder={props.valueToInput}
      className="py-2"
    />
  );
};

const patterns = [
  "yoke",
  "body",
  "ribbing",
  "arm1",
  "ribbingArm1",
  "arm2",
  "ribbingArm2",
];

export const AddPattern = () => {
  const [open, setOpen] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length === 1) {
      console.log(files);
    }
  };

  const onConfirm = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton variant="outlined" onClick={() => setOpen(true)}>
        Add a new pattern
      </CustomButton>
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
      >
        <DialogTitle>Add Pattern</DialogTitle>
        <DialogContent>
          <CustomButton onClick={handleClick}>Choose File</CustomButton>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
            accept=".jpg,.png"
          />
          {patterns.map((pattern, index) => {
            return (
              <div key={index} className="py-1">
                <PatternInfo valueToInput={pattern} />
              </div>
            );
          })}
        </DialogContent>
      </CustomDialog>
    </>
  );
};
