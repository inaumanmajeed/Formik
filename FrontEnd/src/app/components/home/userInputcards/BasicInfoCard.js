import React from "react";
import UserInputFormLayoutCard from "app/layouts/userInputCards";
import BasicImg from "app/assets/images/Home/basicInfo.svg";
import { Field } from "formik";
import CustomInput from "app/components/shared/input/Input";
import { FormContainer } from "../styles";

const BasicInfoCard = ({ boxShadow, isEditable }) => {
  return (
    <UserInputFormLayoutCard
      boxShadow={boxShadow}
      img={BasicImg}
      title={"Basic Information"}
    >
      <FormContainer>
        <Field
          name="fullName"
          type="text"
          disabled={isEditable}
          label="Full Name"
          placeholder="ie. John Doe"
          component={CustomInput}
        />
        <Field
          name="age"
          type="number"
          disabled={isEditable}
          label="Age"
          placeholder="ie. 25"
          component={CustomInput}
        />
        <Field
          name="email"
          type="email"
          disabled={isEditable}
          label="Email"
          placeholder="ie. abc@xyz.com"
          component={CustomInput}
        />
        <Field
          name="phoneNumber"
          type="number"
          disabled={isEditable}
          label="Phone Number"
          placeholder="ie. +923144444444"
          component={CustomInput}
        />
        <Field
          name="gender"
          type="text"
          disabled={isEditable}
          label="Gender"
          placeholder="ie. Male"
          component={CustomInput}
        />
        <Field
          name="maritalStatus"
          type="text"
          disabled={isEditable}
          label="Marital Status"
          placeholder="ie. Single"
          component={CustomInput}
        />
        <Field
          name="location"
          type="text"
          label="Location"
          disabled={isEditable}
          placeholder="ie. USA"
          component={CustomInput}
        />
        <Field
          name="nationality"
          type="text"
          disabled={isEditable}
          label="Nationality"
          placeholder="ie. USA"
          component={CustomInput}
        />
      </FormContainer>
    </UserInputFormLayoutCard>
  );
};

export default BasicInfoCard;
