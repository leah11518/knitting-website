import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Pattern = {
  id: string; // unique identifier for routing
  name: string;
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
  reducers: {
    addPattern: (state, action: PayloadAction<Pattern>) => {
      state.push(action.payload);
    },
    removePattern: (state, action: PayloadAction<string>) => {
      return state.filter((pattern) => pattern.id !== action.payload);
    },
  },
});

export const { addPattern, removePattern } = patternSlice.actions;

export default patternSlice.reducer;
