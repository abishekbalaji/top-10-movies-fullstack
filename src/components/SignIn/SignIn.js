import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [{ email, password }, setFormFields] = useState(INITIAL_FORM_STATE);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form>
        <FormInput
          classes="form-input-custom"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={email}
          label="Email"
        />
        <FormInput
          classes="form-input-custom"
          name="password"
          type="password"
          value={password}
          onChange={handleInputChange}
          label="Password"
        />
        <Button>Sign In</Button>
        <Button>Google Sign In</Button>
      </form>
    </>
  );
};

export default SignIn;
