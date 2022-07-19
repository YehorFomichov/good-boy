import React from "react";
import { NextButton } from "../../common/buttons/Buttons";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import CheckBox from "../../common/form/CheckBox";
import { donateStep3Schema } from "../../../validation/donateFormValidation";
import { toast } from "react-toastify";
import shelterService from "../../../services/payment.service";
import { IPostShelterDonate } from "../../../types/donateForm";
import {
  FormInfo,
  GoNextButtonContainer,
  MainContainer,
  ProgressBarContainer,
  ResultContainer,
  Summary,
  TitleContainer,
  UserInputForm,
  DogImageContainer
} from "./DonatePage.styles";

const DonateFormSummary = () => {
  const { form: data } = useTypedSelector((state) => state.donateForm);
  const { changeStep, updateForm } = useActions();
  const sendForm = async () => {
    try {
      await donateStep3Schema.validate(data);
      const formToSend: IPostShelterDonate = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        value: String(data.amount),
      };
      if (data.formOfHelp === "specific") {
        formToSend.shelterID = data.shelter?.id;
      }
      if (data.phone) {
        formToSend.phone = data.phone;
      }
      const response = await shelterService.sendForm(formToSend);
      toast.success(response.messages[0].message);
    } catch (e: any) {
      toast.error(e.response.data.messages[0].message);
    }
  };
  return (
    <>
      <MainContainer>
        <ResultContainer>
          <ProgressBarContainer>
            <div className="three" />
            <div className="two" />
            <div className="one" />
          </ProgressBarContainer>
          <TitleContainer>
            <UserInputForm>Skontrolujte si zadané údaje</UserInputForm>
          </TitleContainer>
          <Summary>
            <FormInfo>
              <div>Akou formou chcem pomôcť</div>
              <div>
                {data.formOfHelp === "general"
                  ? "Chcem finančne prispieť celej nadácii"
                  : "Chcem finančne prispieť konkrétnemu útulku"}
              </div>
            </FormInfo>
            {data.formOfHelp === "specific" && data.shelter && (
              <FormInfo>
                <div>Najviac mi záleží na útulku</div>
                <div>{data.shelter.name}</div>
              </FormInfo>
            )}
            <FormInfo>
              <div>Suma ktorou chcem pomôcť</div>
              <div>{data.amount} €</div>
            </FormInfo>
            <FormInfo>
              <div>Meno a priezvisko</div>
              <div>
                {data.firstName} {data.lastName}
              </div>
            </FormInfo>
            <FormInfo>
              <div>E-mailová adresa</div>
              <div>{data.email}</div>
            </FormInfo>
            <FormInfo>
              <div>Telefónne číslo</div>
              <div>{data.phone}</div>
            </FormInfo>
          </Summary>
          <CheckBox
            label={"Súhlasím so spracovaním mojich osobných údajov"}
            value={data.licence}
            onChange={updateForm}
            name={"licence"}
          />
          <GoNextButtonContainer>
            <NextButton onClick={sendForm}>Odoslať formulár</NextButton>
            <NextButton onClick={() => changeStep(2)}>Späť</NextButton>
          </GoNextButtonContainer>
        </ResultContainer>
        <DogImageContainer />
      </MainContainer>
    </>
  );
};

export default DonateFormSummary;
