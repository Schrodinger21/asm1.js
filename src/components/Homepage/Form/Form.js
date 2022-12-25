import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <h1 className="formTitle">Save time, save money!</h1>
      <span className="formDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="formInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Form;
