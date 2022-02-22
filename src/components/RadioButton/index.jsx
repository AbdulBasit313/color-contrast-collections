import React from "react";
import styled from "styled-components";
import { device } from "../../styles/BreakPoints";
import { AbsCenter } from "../../styles/Global";

const RadioWrapper = styled.div``;

const RadioButtonStyle = styled.input`
  visibility: hidden;
  :checked ~ label {
    span {
      border: 2px solid #f4b400;
      :after {
        opacity: 1;
      }
    }
  }
`;

const RadioLabel = styled.label`
  color: #303030;
  font-size: 14px;
  font-weight: 400;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

const CustomRadioStyle = styled.span`
  left: -10px;
  top: 4px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  @media ${device.tablet} {
    top: 4px;
    width: 16px;
    height: 16px;
  }
  ::after {
    content: "";
    width: 12px;
    height: 12px;
    background: #f4b400;
    position: absolute;
    border-radius: 50%;
    ${AbsCenter}
    opacity: 0;
    transition: opacity 0.2s;
    @media ${device.tablet} {
      width: 10px;
      height: 10px;
    }
  }
`;

function RadioButton({ name, id, value, onChange, checked, text }) {
  return (
    <RadioWrapper>
      <RadioButtonStyle
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <RadioLabel htmlFor={id}>
        <CustomRadioStyle />
        {text}
      </RadioLabel>
    </RadioWrapper>
  );
}

export default RadioButton;
