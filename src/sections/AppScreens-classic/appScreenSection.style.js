import styled from 'styled-components';

import AppSecreenBG from 'assets/images/app/get-app/get-app-bg.png';

const AppScreenSctionWrapper = styled.div`
  padding: 40px 0 60px 0;
  position: relative;
    overflow: hidden;
    &:before{
    content: "";
    position: absolute;
    width: 500%;
    height: 40%;
    top: 30%;
    left: -10%;
    z-index: -1;
    background:  #e6e6f5 no-repeat;
    background-size: cover;
    background-position: center;
    transform: rotate(-3deg);
    }
    box-shadow: 0px 10px 10px  rgba(0, 0, 0, 0.2), 0px -5px 10px  rgba(0, 0, 0, 0.2);

  .heading {
    font-size: 3.7vw; 
    display: flex; 
    justify-content: center; 
    color: #1d316c;
    
  }

  .view-more-button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .app__screen__slider {
    .slick-dots {
      right: -103%;
      bottom: 180px;
      width: auto;
      z-index: 999;
      li {
        width: 115px;
        height: 80px;
        margin: 0 8px;
        transition: all 0.3s ease-in;
        img {
          max-width: 100%;
        }
      }
      li.slick-active {
        box-shadow: -1px 25px 17px #b8b7b7; 
      }
    }
  }

  .slick-slide {
    margin: 80px 0 0 0;
    position: relative;
    transform: scale(0.9);
  }
  .slick-slide.slick-active {
    position: relative;
    transform: scale(1);
    z-index: 3;
  }
  .slick-slide[data-index~='-2'] {
    margin-left: 100px;
  }

  .slick-slide.slick-active.slick-center.slick-current {
    position: relative;
    transform: scale(1);
    margin-right: 0;
    margin-left: 0;
    z-index: 4;
  }

  .slick-arrow {
    border: none;
    display: none;
    position: absolute;
    top: 3%;
    right: 3%;
    background: none;
    font-size: 50px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : '#FB7B81'}
    }
  }

  .slick-prev-icon {
    right: 8%;
  }
  @media only screen and (max-width: 912px) {
    &:before{
      content: "";
      position: absolute;
      width: 500%;
      height: 40%;
      top: 17%;
      left: -10%;
      z-index: -1;
      background:  #e6e6f5 no-repeat;
      background-size: cover;
      background-position: center;
      transform: rotate(-3deg);
      }
    padding: 60px 0 200px 0;
    .slick-arrow{
      top: auto;
      bottom: -100px;
      right: 42%;
    }
    .slick-prev-icon{
      right: 50%;
    }
    .slick-slide {
      margin: 60px 0 0 0;
    }
  }
  @media only screen and (max-width: 568px) {
    &:before{
      content: "";
      position: absolute;
      width: 500%;
      height: 40%;
      top: 35%;
      left: -10%;
      z-index: -1;
      background:  #e6e6f5 no-repeat;
      background-size: cover;
      background-position: center;
      transform: rotate(-3deg);
    }
    padding: 50px 0 0 0;
    .section-title-block{
      text-align: center;
      h4{
        width: 100%;
      }
      img{
        display: none;
      }
    }
    .view-more-button{
      display: none;
    }
    .slick-slide {
      margin: 50px 0 0 0;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 0 0 0;
    .slick-slide[data-index~='-2']{
      margin-left: 0;
    }
    .slick-list{
      padding: 0 !important;
    }
    .slick-slide.slick-active{
      margin-left: 0;
      margin-right: 0;
    }
    .slick-slide{
      margin: 40px 0 0 0;
      &.slick-active{
        transform: scale(1);
      }
      transform: scale(1);
      img{
        margin: 0 auto;
      }
    }
    .slick-arrow {
        right: 37%;
    }
    .slick-prev-icon{
      right: 50%;
    }
  }
`;

export default AppScreenSctionWrapper;
