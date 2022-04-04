import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavButton } from "./NavStyles";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: #202225;
  padding: 5% 10%;

  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavSection = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const TaglineSocial = styled.div`
  h4 {
    font-weight: 900;
    color: #404eed;
    font-size: 2.25rem;
    width: 70%;
  }
  span {
    color: #fff;
    display: inline-block;
    font-size: 0.9rem;
  }

  .flag-div {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
  }

  .socials {
    margin-top: 20px;
    a {
      display: inline-block;
      color: #fff;
      font-size: 1.5rem;

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
`;

export const LinkEl = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  align-items: center;
  * {
    display: block;
    color: #fff;
    font-size: 2rem;
  }

  span {
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 0.85rem;
  gap: 10px;
  font-weight: 600;

  p:first-child {
    color: #404eed;
  }
`;

export const CompanyNav = styled(FooterNav)``;

export const CareersNav = styled(FooterNav)``;

export const SecurityNav = styled(FooterNav)``;

export const Divider = styled.div`
  width: 100%;
  height: 4px;
  background-color: #404eed;
  margin-block: 2.5rem;
`;

export const Flag = styled.img`
  width: 25px;
  height: auto;
`;

export const FooterBtn = styled(NavButton)`
  background-color: #5865f2;

  * {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }
`;
