import React, { useEffect, useState } from "react";
import SelectValue from "../../common/select/SelectValue";
import shelterService from "../../../services/payment.service";
import { SheltersAPI } from "../../../types/sheltersAPI";
import SelectField from "../../common/form/SelectField";
import {
  NextButton,
  DonateCategoriesImageContainer,
  DonateCategoriesLeftButton,
  DonateCategoriesRightButton,
  DonateCategoriesTitle,
} from "../../common/buttons/Buttons";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { donateStep1Schema } from "../../../validation/donateFormValidation";
import { toast } from "react-toastify";
import {
  MainContainer,
  MainSection,
  ProgressBarContainer,
  TitleContainer,
  DonateButtonContainer,
  SelectPriceContainer,
  SelectShelterContainer,
  SelectShelterInfo,
  GoNextButtonContainer,
  DogImageContainer
} from "./DonatePage.styles";

const DonateFormShelters = () => {
  const { form: data } = useTypedSelector((state) => state.donateForm);
  const { changeStep, updateForm } = useActions();
  const [shelters, setShelters] = useState<SheltersAPI[]>([]);
  const handleChangeTypeOfHelp = (value: string) => {
    const name = "formOfHelp";
    if (value === "general") {
      updateForm({ name, value });
      updateForm({ name: "shelter", value: null });
    } else {
      updateForm({ name, value });
    }
  };
  const handleChangeShelter = (value: SheltersAPI) => {
    const name = "shelter";
    updateForm({ name, value });
  };
  async function getResp() {
    const resp = await shelterService.getShelters();
    setShelters(resp.shelters);
  }
  useEffect(() => {
    getResp();
  }, []);
  const proceedToNextStep = async () => {
    try {
      const isValid = await donateStep1Schema.validate(data);
      if (isValid) changeStep(2);
    } catch (e: any) {
      toast.error(e.errors[0]);
    }
  };
  return (
    <>
      <MainContainer>
        <MainSection>
          <ProgressBarContainer>
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </ProgressBarContainer>
          <TitleContainer>
            <div>Vyberte si možnosť, ako chcete pomôcť</div>
          </TitleContainer>
          <DonateButtonContainer>
            <DonateCategoriesLeftButton
              onClick={() => handleChangeTypeOfHelp("general")}
              active={data.formOfHelp === "general"}
            >
              <DonateCategoriesImageContainer>
                <div>
                  <picture>
                    <source srcSet={'/ellipse.png'} type={'image/png'}/>
                  <img
                    className="image1"
                    src="/ellipse.png"
                    alt={'ellipse'}
                  /></picture>
                  <picture>
                    <source srcSet={'/wallet.png'} type={'image/png'}/>
                  <img
                    className="image2"
                    src="/wallet.png"
                    alt={'wallet'}
                  /></picture>
                </div>
              </DonateCategoriesImageContainer>
              <DonateCategoriesTitle>
                Chcem finančne prispieť konkrétnemu útulku
              </DonateCategoriesTitle>
            </DonateCategoriesLeftButton>
            <DonateCategoriesRightButton
              onClick={() => handleChangeTypeOfHelp("specific")}
              active={data.formOfHelp === "specific"}
            >
              <DonateCategoriesImageContainer>
                <div>
                  <picture>
                    <source srcSet={'/ellipse.png'}/>
                  <img
                    className="image1"
                    src="/ellipse.png"
                    alt={'ellipse'}
                  /></picture>
                  <picture>
                    <source srcSet={'/paw1.png'}/>
                  <img
                    className="image3"
                    src="/paw1.png"
                    alt={'paw'}
                  /></picture>
                </div>
              </DonateCategoriesImageContainer>
              <DonateCategoriesTitle>
                Chcem finančne prispieť celej nadácii
              </DonateCategoriesTitle>
            </DonateCategoriesRightButton>
          </DonateButtonContainer>
          {shelters.length > 0 && data.formOfHelp === "specific" && (
            <SelectShelterContainer>
              <SelectShelterInfo>
                <div>O projekte</div>
                <div>Nepovinné</div>
              </SelectShelterInfo>
              <SelectField
                name={"shelter"}
                options={shelters}
                onChange={handleChangeShelter}
              />
            </SelectShelterContainer>
          )}
          <SelectPriceContainer>
            <p>Suma, ktorou chcem prispieť</p>
            <SelectValue onChange={updateForm} />
          </SelectPriceContainer>
          <GoNextButtonContainer>
            <NextButton onClick={proceedToNextStep}>Pokračovať</NextButton>
          </GoNextButtonContainer>
        </MainSection>
        <DogImageContainer>
          <picture>
            <source srcSet={'/dog.png'}/>
            <img src='/dog.png' alt={'Dog image'}/>
          </picture>
        </DogImageContainer>
      </MainContainer>
    </>
  );
};

export default DonateFormShelters;
