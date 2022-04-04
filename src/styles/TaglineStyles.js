import styled from "styled-components";

export const TaglineWrapper = styled.section`
  padding: 10% 10%;
  background-color: #f6f6f6;
`;

export const TaglineDiv = styled.div`
  text-align: center;
  padding-inline: 5%;
`;

export const TaglineHeading = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

export const TaglineText = styled.p`
  color: #72767d;
  font-weight: 500;
`;

export const TaglineImg = styled.img`
  display: block;
`;

export const TaglineCta = styled.div`
  width: 100%;
  text-align: center;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const TaglineButton = styled.button`
  width: 30%;
  padding: 2% 3%;
  border-radius: 40px;
  border: none;
  outline: none;
  background-color: #404eed;

  & * {
    text-decoration: none;
    color: #fff;
    font-size: 1.01rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
