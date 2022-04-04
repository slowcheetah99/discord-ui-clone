import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter as Twitter,
  AiOutlineInstagram as Instagram,
  AiFillYoutube as Youtube,
} from "react-icons/ai";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { SiDiscord as Discord } from "react-icons/si";

import {
  FooterWrapper,
  NavSection,
  TaglineSocial,
  FooterNav,
  CompanyNav,
  CareersNav,
  Flag,
  SecurityNav,
  Divider,
  LinkEl,
  FooterBtn,
} from "../styles/FooterStyles";
import flag from "../assets/usa_flag.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <NavSection>
        <TaglineSocial>
          <h4>IMAGINE A PLACE</h4>
          <div className="flag-div">
            <Flag src={flag} alt="USA flag" />
            <span>English, USA</span>
          </div>

          <div className="socials">
            <a href="www.twitter.com">
              <Twitter />
            </a>
            <a href="www.instagram.com">
              <Instagram />
            </a>
            <a href="www.facebook.com">
              <Facebook />
            </a>
            <a href="www.youtube.com">
              <Youtube />
            </a>
          </div>
        </TaglineSocial>
        <FooterNav>
          <p>Product</p>
          <p>Download</p>
          <p>Nitro</p>
          <p>Status</p>
        </FooterNav>

        <CompanyNav>
          <p>Company</p>
          <p>About</p>
          <p>Jobs</p>
          <p>Branding</p>
          <p>Newsroom</p>
        </CompanyNav>

        <CareersNav>
          <p>Resources</p>
          <p>Collage</p>
          <p>Support</p>
          <p>Safety</p>
          <p>Blog</p>
          <p>Feedback</p>
          <p>Developers</p>
          <p>StreamKit</p>
        </CareersNav>

        <SecurityNav>
          <p>Policies</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Guidelines</p>
          <p>Acknowledgment</p>
          <p>Licenses</p>
          <p>Moderation</p>
        </SecurityNav>
      </NavSection>
      <Divider />
      <div className="footer-bottom">
        <LinkEl to="/">
          <Discord />
          <span>Discord</span>
        </LinkEl>
        <FooterBtn>
          <Link to="/register">Sign Up</Link>
        </FooterBtn>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
