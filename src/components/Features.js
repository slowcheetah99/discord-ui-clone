import React from "react";
import { features } from "../features";
import {
  FeaturesWrapper,
  Feature,
  FeatureText,
  Tagline,
  BodyCopy,
  FeatureImg,
} from "../styles/FeatureStyles";

const Features = () => {
  return (
    <FeaturesWrapper>
      {features().map((feature) => (
        <Feature key={feature.tagline}>
          <FeatureText>
            <Tagline>{feature.tagline}</Tagline>
            <BodyCopy>{feature.bodyCopy}</BodyCopy>
          </FeatureText>
          <FeatureImg src={feature.img} alt={feature.img} />
        </Feature>
      ))}
    </FeaturesWrapper>
  );
};

export default Features;
