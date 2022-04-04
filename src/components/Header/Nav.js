import React from "react";
import { SiDiscord as Discord } from "react-icons/si";

import {
  NavContainer,
  NavEl,
  NavButton,
  LinkEl,
  LogoContainer,
} from "../../styles/NavStyles";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer to="/">
        <Discord />
        <span>Discord</span>
      </LogoContainer>
      <NavEl>
        <LinkEl to="/download">Download</LinkEl>
        <LinkEl to="/nitro">Nitro</LinkEl>
        <LinkEl to="/safety">Safety</LinkEl>
        <LinkEl to="/support">Support</LinkEl>
        <LinkEl to="/blog">Blog</LinkEl>
        <LinkEl to="/careers">Careers</LinkEl>
      </NavEl>
      <NavButton>
        <LinkEl to="/login">Login</LinkEl>
      </NavButton>
    </NavContainer>
  );
};

export default Nav;
