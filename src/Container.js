import styled from 'styled-components';

export const ContainerTitle = styled.h1`
  color: #6e6d7b;
  text-align: center;
  margin-top: 70px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  // tablets
  @media (min-width: 576px) {
    max-width: 540px;
  }

  // small desktops
  @media (min-width: 768px) {
    max-width: 720px;
  }

  // medium desktops
  @media (min-width: 992px) {
    max-width: 590px;
  }

  // large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  // extra large desktops and HD devices
  @media (min-width: 1800px) {
    max-width: 1720px;
  }
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
