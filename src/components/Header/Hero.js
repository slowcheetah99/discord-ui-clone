import React from "react";
import { Link } from "react-router-dom";
import { BsDownload as DownloadIcon } from "react-icons/bs";

import {
  TextContainer,
  HeroContainer,
  CtaContainer,
  DownloadBtn,
  BrowserBtn,
  BgClouds,
  LeftBg,
  RightBg,
  TinyStars,
} from "../../styles/HeroStyles";
import bgClouds from "../../assets/center_bg_landing_header.svg";
import leftBg from "../../assets/left_bg_landing_header.svg";
import rightBg from "../../assets/right_bg_landing_header.svg";
import tinyStars from "../../assets/tiny_stars_landing.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community .Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </TextContainer>

      <CtaContainer>
        <DownloadBtn>
          <Link to="/download">
            <span>
              <DownloadIcon />
            </span>
            Download for Mac
          </Link>
        </DownloadBtn>
        <BrowserBtn>
          <Link to="/browser">Open Discord in your Browser</Link>
        </BrowserBtn>
      </CtaContainer>

      <BgClouds src={bgClouds} alt="bg-clouds" />
      <LeftBg src={leftBg} alt="aliens chilling" />
      <RightBg src={rightBg} alt="chatting aliens" />
      <TinyStars src={tinyStars} alt="small stars" />
    </HeroContainer>
  );
};

export default Hero;
