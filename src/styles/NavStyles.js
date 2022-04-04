import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 10%;
  align-items: center;
`;

export const NavEl = styled.nav`
  flex: 0.6;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const LinkEl = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;

  * {
    font-size: 2rem;
    color: #fff;
  }

  span {
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 1rem;
  }
`;

export const NavButton = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  outline: none;

  & * {
    color: #000;
    font-weight: 800;
  }
`;
