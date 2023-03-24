import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [{ name, email, password, confirmPassword }, setFormFields] =
    useState(INITIAL_FORM_STATE);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormFields(INITIAL_FORM_STATE);
  };
  return (
    <>
      <h2>Don't have an account?</h2>
      <span>Sign Up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          classes="form-input-custom"
          name="name"
          type="text"
          label="Display Name"
          value={name}
          onChange={handleInputChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          classes="form-input-custom"
          value={email}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          classes="form-input-custom"
          value={password}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          classes="form-input-custom"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <Button>Sign Up</Button>
      </form>
    </>
  );
};

export default SignUp;
