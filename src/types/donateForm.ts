export interface IDonateForm {
  formOfHelp: "general" | "specific";
  shelter: IShelter | null;
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  licence: boolean;
}
export interface IShelter {
  id: number;
  name: string;
}

export interface DonateFormState {
  form: IDonateForm;
  currentStep: number;
}
export interface IPostShelterDonate {
  firstName: string;
  lastName: string;
  email: string;
  value: string;
  phone?: string;
  shelterID?: number;
}
