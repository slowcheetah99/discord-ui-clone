import styled from "styled-components";
import bgImg from "../assets/login_bg.svg";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-image: url(${bgImg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2% 10%;
  color: #dcddde;
`;

export const FormContainer = styled.div`
  background-color: #36393f;
  width: 57.5%;
  aspect-ratio: 1/0.7;
  margin: 5% auto;
  border-radius: 10px;
  padding: 2%;
  display: flex;
  column-gap: 3%;
`;

export const LoginForm = styled.form`
  width: 50%;
  height: 100%;

  p {
    font-size: 0.85rem;
    margin-top: 0.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const LoginInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 0.5rem;
  margin-bottom: 1.5rem;

  label {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 800;
  }

  input {
    border: 1.5px solid #202225;
    padding: 10px 5px;
    background-color: #2f3136;
    border-radius: 2px;
  }
`;

export const RegisterLink = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`;
export const PasswordReset = styled(Link)`
  font-size: 0.75rem;
  color: #00b0f4;
  font-weight: 600;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-top: 1.5rem;
  width: 100%;
  padding-block: 3%;
  font-size: 1rem;
  color: #fff;
  background-color: #5865f2;
  font-weight: 800;
  border-radius: 2px;
  margin-bottom: 1rem;
`;

export const QRCode = styled.img`
  padding: 4%;
  border-radius: 10px;
  background-color: #fff;
`;
