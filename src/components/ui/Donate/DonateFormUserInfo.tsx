import React from "react";

import {
  InputsContainer,
  MainContainer,
  ProgressBarContainer,
  TitleContainer,
  UserInfoTitle,
  UserInputForm,
  GoNextButtonContainer,
  DogImageContainer
} from "./DonatePage.styles";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {donateStep2Schema} from "../../../validation/donateFormValidation";
import {toast} from "react-toastify";
import InputForm from "../../common/form/InputForm";
import {NextButton} from "../../common/buttons/Buttons";

const DonateFormUserInfo = () => {
  const { form: data } = useTypedSelector((state) => state.donateForm);
  const { changeStep, updateForm } = useActions();
  const proceedToNextStep = async () => {
    try {
      const isValid = await donateStep2Schema.validate(data);
      if (isValid) changeStep(3);
    } catch (e: any) {
      toast.error(e.errors[0]);
    }
  };
  return (
    <>
      <MainContainer>
        <UserInputForm>
          <ProgressBarContainer>
            <div className="two" />
            <div className="one" />
            <div className="three" />
          </ProgressBarContainer>
          <TitleContainer>
            <UserInfoTitle>Potrebujeme od Vás zopár informácií</UserInfoTitle>
          </TitleContainer>
          <InputsContainer>
            <InputForm
              label={"Meno"}
              labelText={"Zadajte Vaše meno"}
              name={"firstName"}
              value={data.firstName}
              onChange={updateForm}
            />
            <InputForm
              label={"Priezvisko"}
              labelText={"Zadajte Vaše priezvisko"}
              name={"lastName"}
              value={data.lastName}
              onChange={updateForm}
            />
            <InputForm
              label={"E-mailová adresa"}
              labelText={"E-mailová adresa"}
              name={"email"}
              value={data.email}
              onChange={updateForm}
            />
            <InputForm
              label={"Telefónne číslo"}
              name={"phone"}
              value={data.phone}
              onChange={updateForm}
              phone={true}
            />
          </InputsContainer>
          <GoNextButtonContainer>
            <NextButton onClick={proceedToNextStep}>Pokračovať</NextButton>
            <NextButton onClick={() => changeStep(1)}>Späť</NextButton>
          </GoNextButtonContainer>
        </UserInputForm>
        <DogImageContainer />
      </MainContainer>
    </>
  );
};

export default DonateFormUserInfo;
