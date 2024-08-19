import React from "react";
import { CustomInputMainContainer } from "./styles";

const CustomInput = ({
  field,
  form,
  isEditable = false,
  type = "text",
  label,
  ...props
}) => {
  return (
    <CustomInputMainContainer>
      <label>{label}</label>
      <input disabled={isEditable} {...field} type={type} {...props} />
      {form.errors[field.name] && form.touched[field.name] ? (
        <div className="error">{form.errors[field.name]}</div>
      ) : null}
    </CustomInputMainContainer>
  );
};

export default CustomInput;
