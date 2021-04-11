import styled from 'styled-components'

export const DonationsContainer = styled.div`
	display: inline-block;
	margin-left: 15px;
`;

export const DonationsText = styled.span`
  color: #495057;
  text-align: center;
  white-space: nowrap;
  line-height: 1.5;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  color: #6e6d7b;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.375rem 0.75rem;
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const DonationsAmount = styled.span`
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #6e6d7b;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  
  // Mobile devices and tablets
  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
  // medium desktops and up
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;