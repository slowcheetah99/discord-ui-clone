import React from "react";
import { LoginContainer, FormGroup, SubmitBtn } from "../styles/LoginStyles";
import {
  RegisterForm,
  FormContainerRegister,
  LoginLink,
} from "../styles/RegisterStyles";
import { LogoContainer } from "../styles/NavStyles";
import { SiDiscord as Discord } from "react-icons/si";

const Register = () => {
  return (
    <LoginContainer>
      <LogoContainer to="/">
        <Discord />
        <span>Discord</span>
      </LogoContainer>

      <FormContainerRegister>
        <h3>Create an account</h3>
        <RegisterForm>
          <FormGroup>
            <label type="label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="register-email" />
          </FormGroup>

          <FormGroup>
            <label type="label" htmlFor="username">
              Username
            </label>
            <input type="text" id="username" name="register-username" />
          </FormGroup>

          <FormGroup>
            <label type="label" htmlFor="password">
              Email
            </label>
            <input type="password" id="password" name="register-password" />
          </FormGroup>

          <SubmitBtn>Continue</SubmitBtn>

          <LoginLink to="/login">Already have an account?</LoginLink>
        </RegisterForm>
      </FormContainerRegister>
    </LoginContainer>
  );
};

export default Register;
