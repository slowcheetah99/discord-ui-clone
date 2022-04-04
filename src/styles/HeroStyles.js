import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding: 2% 15% 20%;
  position: relative;
  overflow: hidden;
`;
export const TextContainer = styled.div`
  padding: 0% 0% 5%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p {
    width: 80%;
    text-align: center;
    letter-spacing: 1px;
    line-height: 2;
    font-weight: 600;
  }
`;

export const CtaContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding-inline: 5%;
  position: relative;
  z-index: 2;
`;

export const DownloadBtn = styled.button`
  padding: 2% 3%;
  width: 47.5%;
  border-radius: 40px;
  border: none;
  outline: none;

  & * {
    color: #36393f;
    text-decoration: none;
    font-size: 1.01rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const BrowserBtn = styled(DownloadBtn)`
  background-color: #36393f;
  & * {
    color: #fff;
  }
`;

export const BgClouds = styled.img`
  position: absolute;
  top: -26%;
  left: -98%;
  z-index: 0;
`;
export const LeftBg = styled.img`
  position: absolute;
  bottom: 8%;
  left: 0%;
  width: 30.5%;
  height: auto;
  z-index: 1;
`;
export const RightBg = styled.img`
  position: absolute;
  bottom: 8%;
  right: -2%;
  width: 35%;
  height: auto;
  z-index: 1;
`;
export const TinyStars = styled.img`
  position: absolute;
  top: 5%;
  left: 5%;
`;
