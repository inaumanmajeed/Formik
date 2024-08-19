import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";
import { FormContainer } from "../styles";
import SchoolIcon from "app/assets/images/Home/school.svg";

const EducationInfoCard = ({ boxShadow, isEditable }) => {
  return (
    <UserInputFormLayoutCard
      boxShadow={boxShadow}
      img={SchoolIcon}
      title={"Education Information"}
    >
      <FormContainer>
        <Field
          name="highestEducationalQualification"
          type="text"
          label="Highest Educational Qualification"
          disabled={isEditable}
          placeholder="ie. MBA"
          component={CustomInput}
        />
        <Field
          name="collegeUniversity"
          type="text"
          label="College/University"
          placeholder="ie. LUMS"
          disabled={isEditable}
          component={CustomInput}
        />
        <Field
          name="employedIn"
          type="text"
          label="Employed In"
          disabled={isEditable}
          placeholder="ie. Private"
          component={CustomInput}
        />
        <Field
          name="occupation"
          type="text"
          label="Occupation"
          disabled={isEditable}
          placeholder="ie. Software Engineer"
          component={CustomInput}
        />
        <Field
          name="countryOfResidence"
          type="text"
          disabled={isEditable}
          label="Country of Residence"
          placeholder="ie. USA"
          component={CustomInput}
        />
        <Field
          name="annualIncome"
          type="number"
          label="Annual Income"
          disabled={isEditable}
          placeholder="ie. 100000"
          component={CustomInput}
        />
        <Field
          name="workTravel"
          type="text"
          label="Work Travel"
          placeholder="ie. Often"
          disabled={isEditable}
          component={CustomInput}
        />
        <Field
          name="livingWithFamily"
          type="text"
          label="Living with Family"
          placeholder="ie. Yes"
          disabled={isEditable}
          component={CustomInput}
        />
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default EducationInfoCard;
