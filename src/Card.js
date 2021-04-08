import styled from 'styled-components';

export const Card = styled.div`
  margin: 10px;
  height: 400px;
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
`;