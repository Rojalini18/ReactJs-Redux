import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

const Pin = ({ length, setOtpHandler }) => {
  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputValue] = useState(new Array(length).fill(""));
  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputValue(inputBoxValue);

    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    console.log(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };
  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    console.log(e);
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    console.log(data);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div
      onPaste={handlePaste}
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid  black",
        width: "15%",
        margin: "auto",
        marginTop: "15px",
      }}
    >
      {inputBoxLen.map((_, index) => {
        return (
          <PinItem
            key={index}
            changeHandler={(e) => handleChange(e, index)}
            onBackSpaceHandler={(e) => handleBackspace(e, index)}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number,
  onCahnge: PropTypes.func,
};

export default Pin;
