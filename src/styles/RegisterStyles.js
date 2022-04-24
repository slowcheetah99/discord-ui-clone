import styled from "styled-components";
import { FormContainer, LoginForm, PasswordReset } from "./LoginStyles";

export const RegisterForm = styled(LoginForm)`
  width: 100%;
  margin-top: 5%;
`;

export const FormContainerRegister = styled(FormContainer)`
  flex-direction: column;
  width: 45%;
  aspect-ratio: 1 / 0.82;

  h3 {
    text-align: center;
  }
`;

export const LoginLink = styled(PasswordReset)``;
