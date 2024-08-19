import React from "react";
import { InputCardContainer } from "./styles";

const UserInputFormLayoutCard = ({ boxShadow, title, img, children }) => {
  return (
    <InputCardContainer boxShadow={boxShadow}>
      <div className="label__div">
        <img src={img} alt="input card" />
        <h1>{title}</h1>
      </div>
      {children}
    </InputCardContainer>
  );
};

export default UserInputFormLayoutCard;
