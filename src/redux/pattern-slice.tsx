import { createSlice } from "@reduxjs/toolkit";

type Pattern = {
  filePath: string;
  yoke: number;
  body: number;
  ribbing: number;
  arm1: number;
  ribbingArm1: number;
  arm2: number;
  ribbingArm2: number;
  cable?: number;
};

const initialState: Pattern[] = [];

const patternSlice = createSlice({
  name: "pattern",
  initialState: initialState,
  reducers: {},
});

// export const { usePattern } = patternSlice.actions;

export default patternSlice.reducer;
