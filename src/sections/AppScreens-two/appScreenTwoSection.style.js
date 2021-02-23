import styled from 'styled-components';

import AppSecreenBG from 'assets/images/app/app-screen/05.png';

const AppScreenSctionTwoWrapper = styled.div`
  .app-screen-two-block{
    padding: 180px 0;
    background: url(${AppSecreenBG}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 70% center;
    .section-title{
      h4,h2{
        color: ${props => props.theme.white};
      }
    }
    .btn-group{
      display: flex;
    }
    .btn-outline{
      padding: 13px 17px;
      border: 1px solid ${props => props.theme.white};
      border-radius: 5px;
      color: ${props => props.theme.white};
      background: transparent;
      transition: all 0.3s ease-in;
      &:first-child{
        margin-right: 15px;
      }
      &:hover{
        background: ${props => props.theme.white};
        color: ${props => props.theme.primaryColor};
      }
    }
  }
  @media only screen and (max-width: 912px) {
   
  }
  @media only screen and (max-width: 568px) {
   
  }
  @media only screen and (max-width: 480px) {
    
  }
`;

export default AppScreenSctionTwoWrapper;
