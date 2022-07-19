import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {DonateFormShelters, DonateFormUserInfo, DonateFormSummary} from "../ui/Donate";

const Stepper = () => {
    const { currentStep } = useTypedSelector((state) => state.donateForm);
    if (currentStep === 1) {
        return <DonateFormShelters />;
    }
    if (currentStep === 2) {
        return <DonateFormUserInfo />;
    }
    if (currentStep === 3) {
        return <DonateFormSummary />;
    }
    return null;
};

export default Stepper;
