import React from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  LoginInfo,
  FormGroup,
  RegisterLink,
  PasswordReset,
  SubmitBtn,
  QRCode,
} from "../styles/LoginStyles";
import { LogoContainer } from "../styles/NavStyles";
import { SiDiscord as Discord } from "react-icons/si";
import qrImg from "../assets/qr_code.png";

const Login = () => {
  return (
    <LoginContainer className="login-img">
      <LogoContainer to="/">
        <Discord />
        <span>Discord</span>
      </LogoContainer>

      <FormContainer>
        <LoginForm>
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
          <FormGroup>
            <label type="label" htmlFor="email">
              Email
            </label>
            <input type="text" id="email" name="form-email" />
          </FormGroup>
          <FormGroup>
            <label type="label" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" name="form-password" />
          </FormGroup>
          <PasswordReset to="/password-reset">
            Forgot your password?
          </PasswordReset>
          <SubmitBtn>Login</SubmitBtn>
          <RegisterLink to="/register">
            <span>Need an account?</span>
            <Link to="/register" className="link">
              Register
            </Link>
          </RegisterLink>
        </LoginForm>
        <LoginInfo>
          <QRCode src={qrImg} alt="qr code to scan" />
          <h2>Log in with QR Code</h2>
          <p>
            Scan this with <strong>Discord mobile app</strong> to log in
            instantly
          </p>
        </LoginInfo>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
