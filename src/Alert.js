import styled from 'styled-components'

export const Alert = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  text-align: center;
  color: ${(props) => (props.success ? '#3c763d' : '#721c24')};
  background-color: ${(props) => (props.success ? '#dff0d8' : '#f8d7da')};
  border-color: ${(props) => (props.success ? '#d6e9c6' : '#f5c6cb')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
`;