import {createSlice} from "@reduxjs/toolkit";
import {DonateFormState} from "../types/donateForm";

const initialState: DonateFormState = {
  form: {
    formOfHelp: "general",
    shelter: null,
    amount: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licence: false,
  },
  currentStep: 1,
};

const donateFormSlice = createSlice({
  name: "donateForm",
  initialState,
  reducers: {
    formUpdated: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state.form = {...state.form, [name]: value};
    },
    stepUpdated: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});
const { reducer: donateFormReducer } = donateFormSlice;
const { formUpdated, stepUpdated } = donateFormSlice.actions;
export const updateForm =
  (payload: { name: string; value: any }) =>
  (dispatch: (arg: { payload: any; type: string }) => void) => {
    dispatch(formUpdated(payload));
  };
export const changeStep =
  (payload: number) =>
  (dispatch: (arg: { payload: number; type: string }) => void) => {
    dispatch(stepUpdated(payload));
  };
export default donateFormReducer;
