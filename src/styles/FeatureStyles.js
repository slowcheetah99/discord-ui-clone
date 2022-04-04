import styled from "styled-components";

export const FeaturesWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding-block: 2%;
  background-color: #f6f6f6;
  margin-top: -2.75%;
`;

export const Feature = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10%;
  background-color: #f6f6f6;
  flex-direction: row;

  &:nth-child(odd) {
    background: #fff;
    flex-direction: row-reverse;
  }
`;

export const FeatureText = styled.div`
  padding-inline: 3%;
`;

export const Tagline = styled.h3`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 800;
  padding-inline: 0.75%;
`;

export const BodyCopy = styled.p`
  line-height: 1.6;
`;

export const FeatureImg = styled.img`
  width: 55%;
  height: auto;
  flex: 0.8;
`;
