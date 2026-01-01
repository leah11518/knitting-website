import { CustomDialog } from "../../components/dialog";
import { ChangeEvent, useRef, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "../../components/button";
import Input from "../../components/input";
import { useDispatch } from "react-redux";
import { addPattern } from "../../redux/pattern-slice";
import { v4 as uuidv4 } from "uuid";

type PatternInfoProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const PatternInfo = ({ label, value, onChange }: PatternInfoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <Input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        type="number"
      />
    </div>
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
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | null>(null);

  const [patternValues, setPatternValues] = useState<Record<string, string>>(
    Object.fromEntries(patterns.map((p) => [p, ""]))
  );

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  const handlePatternChange = (key: string, value: string) => {
    setPatternValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const hasEmptyOrInvalidInput = Object.values(patternValues).some(
    (value) => value === "" || isNaN(Number(value))
  );

  const isConfirmDisabled = !file || hasEmptyOrInvalidInput;

  const onConfirm = () => {
    if (!file) return;

    const defaultName = file.name.replace(/\.[^/.]+$/, "");
    const newPattern = {
      id: uuidv4(),
      name: defaultName,
      filePath: URL.createObjectURL(file),
      yoke: Number(patternValues.yoke),
      body: Number(patternValues.body),
      ribbing: Number(patternValues.ribbing),
      arm1: Number(patternValues.arm1),
      ribbingArm1: Number(patternValues.ribbingArm1),
      arm2: Number(patternValues.arm2),
      ribbingArm2: Number(patternValues.ribbingArm2),
    };

    dispatch(addPattern(newPattern));
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
        isConfirmDisabled={isConfirmDisabled}
      >
        <DialogTitle>Add Pattern</DialogTitle>

        <DialogContent>
          {/* File chooser */}
          <div className="flex flex-col gap-2 pb-3">
            <CustomButton onClick={handleClick}>Choose File</CustomButton>

            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".jpg,.png"
            />

            {file && (
              <span className="text-sm text-muted-foreground">
                Selected file: <strong>{file.name}</strong>
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {patterns.map((pattern) => (
              <PatternInfo
                key={pattern}
                label={pattern}
                value={patternValues[pattern]}
                onChange={(value) => handlePatternChange(pattern, value)}
              />
            ))}
          </div>
        </DialogContent>
      </CustomDialog>
    </>
  );
};
