import styled from 'styled-components';


export const Card = styled.div`
  margin: 10px;
  margin-top: 20px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    height: 520px;
    width: 640px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    height: 420px;
    width: 550px;
  }
`;
export const CardList = styled.div`
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
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 45px;
  align-items: center;
  // Mobile devices
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
  background-color: rgb(255, 255, 255, 0.9);

  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    height: 520px;
    width: 640px;
  }

  // medium desktops and up
  @media (min-width: 992px) {
    height: 420px;
    width: 550px;
  }
`;
export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #6e6d7b;
  height: 100%;
  width: 100%;

  // Mobile devices
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const CloseOverlay = styled.button`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  border: 0px;
  background-color: transparent;
  color: gray;
  font-weight: bold;
  margin-top: 10px;

  // Mobile devices
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const CardImg = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: fill;

  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    height: 440px;
    width: 640px;
  }

  // medium desktops and up
  @media (min-width: 992px) {
    width: 550px;
    height: 350px;
  }
`;
export const CardBtn = styled.button`
  border-radius: 2px;
  background-color: transparent;
  color: #0000ff;
  border: 1.5px solid #0000ff;
  cursor: pointer;
  // Mobile devices
  @media only screen and (min-width: 480px) {
    width: 95px;
    height: 35px;
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    width: 80px;
    height: 30px;
    font-size: 16px;
  }
`;
export const CardTitle = styled.span`
  width: 250px;
  color: #6e6d7b;
  font-weight: bold;
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;