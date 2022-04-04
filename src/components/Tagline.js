import React, { Fragment } from "react";
import {
  TaglineWrapper,
  TaglineDiv,
  TaglineHeading,
  TaglineText,
  TaglineImg,
  TaglineCta,
  TaglineButton,
} from "../styles/TaglineStyles";
import { Link } from "react-router-dom";
import tagSvg from "../assets/just_chiling_landing.svg";
import { BsDownload as DownloadBtn } from "react-icons/bs";

const Tagline = () => {
  return (
    <Fragment>
      <TaglineWrapper>
        <TaglineDiv>
          <TaglineHeading>RELIABLE TECH FOR STAYING CLOSE</TaglineHeading>
          <TaglineText>
            Low-latency voice and video feels like you're in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </TaglineText>
        </TaglineDiv>
        <TaglineImg src={tagSvg} alt="just chilling" />
        <TaglineCta>
          <h4>Ready to start your journey?</h4>
          <TaglineButton>
            <Link to="/download">
              <span>
                <DownloadBtn />
              </span>
              Download for Mac
            </Link>
          </TaglineButton>
        </TaglineCta>
      </TaglineWrapper>
    </Fragment>
  );
};

export default Tagline;
