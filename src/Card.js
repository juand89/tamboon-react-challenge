import styled from 'styled-components';

export const Card = styled.div`
  margin: 10px;
  height: 420px;
  width: 550px;
  border-radius: 3px;
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
export const CardImg = styled.img`
  width: 550px;
  height: 350px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: fill;
`;
export const CardBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: #0000ff;
  border: 1px solid #0000ff;
  cursor: pointer;
`;
export const CardTitle = styled.span`
  width: 250px;
`;