import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f123;
  flex: 1;
`;
export const Main = styled.div`
  display: flex;
  height: 100% ${-Container};
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.div`
  background-color: #123;
  width: 30%;
  height: 750px;
  margin: 10px;
`;

export const Content = styled.div`
  background-color: #123912;
  width: 60%;
  height: 750px;
`;
