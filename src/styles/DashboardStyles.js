import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  width: 100vw;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
`;

export const Sidebar = styled.aside`
  grid-column: 1 / span 3;
  grid-row: 1 / -1;
  display: flex;
`;

export const Content = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #2f3136;
  display: flex;
  flex-direction: column;
  padding-inline: 5%;
  padding-top: 5%;

  input {
    background-color: #23272a;
    padding: 3%;
    outline: none;
    border: none;
    margin-bottom: 5%;
    border-radius: 2px;
  }

  div {
    display: flex;
    column-gap: 0.5rem;
    font-size: 1.15rem;
    color: #dcddde;
    margin-bottom: 10px;
    padding: 3%;
    transition: background-color 0.4s ease;
    border-radius: 2px;

    &:hover {
      background-color: #4f545c;
    }
  }
`;

export const Ctas = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  background-color: #23272a;
  padding-inline: 5%;
  padding-top: 40px;
`;

export const Center = styled.div`
  grid-row: 1 / -1;
  grid-column: 4 / -1;
  background-color: red;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;

export const Nav = styled.nav`
  background-color: #36393f;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  border-bottom: 2px solid #23272a;
  display: flex;
  column-gap: 2.5rem;
  font-size: 0.875rem;
  align-items: center;
  padding-left: 5%;

  span {
    display: flex;
    column-gap: 5px;
    align-items: center;
    font-weight: 800;
  }
`;

export const Aside = styled.div`
  background-color: #36393f;
  grid-row: 2 / -1;
  grid-column: 5 / -1;
  border-left: 1px solid #4f545c;
  padding-top: 8%;

  h3 {
    margin-left: 4%;
    color: #fff;
  }
`;

export const Main = styled.main`
  background-color: #36393f;
  grid-row: 2 / -1;
  grid-column: 1 / 5;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const Icon = styled.img`
  width: 40px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;

  &:nth-child(3) {
    border-radius: 100%;
    padding: 12.5px;
    background-color: #2f3136;
  }
`;

export const Messages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  align-items: center;

  & * {
    font-size: 0.95rem;
  }

  h6 {
    font-size: 0.85rem;
  }
`;
