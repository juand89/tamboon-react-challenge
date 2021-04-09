import styled from 'styled-components';

export const Card = styled.div`
  margin: 10px;
  height: 420px;
  width: 550px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
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
`;
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 420px;
  width: 550px;
  border-radius: 3px;
  background-color: rgb(255, 255, 255, 0.9);
`;
export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #6e6d7b;
  font-size: 18px;
  height: 100%;
  width: 100%;
`;
export const CloseOverlay = styled.button`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  border: 0px;
  background-color: transparent;
  font-size: 18px;
  color: gray;
  font-weight: bold;
  margin-top: 10px;
`;
export const CardImg = styled.img`
  width: 550px;
  height: 350px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: fill;
`;
export const CardBtn = styled.button`
  width: 80px;
  height: 30px;
  font-weight: bold;
  background-color: transparent;
  color: #0000ff;
  border: 1px solid #0000ff;
  cursor: pointer;
`;
export const CardTitle = styled.span`
  width: 250px;
  color: #6e6d7b;
`;