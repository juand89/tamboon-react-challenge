import styled from 'styled-components'

export const RadioForm = styled.form`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const RadioLabel = styled.label`
  display: flex;
  padding-right: 10px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  padding-right: 5px;
  width: 16px;
  height: 16px;
  transition: 0.2s all linear;
  position: relative;
  
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    top: 4px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    top: 0px;
  }
`;