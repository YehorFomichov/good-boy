import * as yup from "yup";

export const donateStep1Schema = yup.object().shape({
  formOfHelp: yup.string().required("Please select form of help"),
  amount: yup
    .number()
    .min(1, "Please enter valid amount")
    .required("You must enter the amount of donation"),
});
export const donateStep2Schema = yup.object().shape({
  firstName: yup.string().required("Please enter your First Name"),
  lastName: yup.string().required("Please enter your Last Name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter your email"),
});
export const donateStep3Schema = yup.object().shape({
  licence: yup.boolean().required("You must accept licence"),
});
