import styled from "styled-components";

import imgHero from "assets/images/headingwall1.jpg";

const HeroSectionWrapper = styled.div`
  /* color: #1D316C; */
  background: url(${imgHero}) center center/cover no-repeat;
  background-position: 50% 50%;
  height: 700px;
  width: 100%;
  dispay: flex;
  flex-deirection: column;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  p {
    margin: 0 0 75px 0;
  }
  .section-title {
    h4 {
      font-size: 85%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      span {
        background: ${props => props.theme.primaryColor};
        padding: 7px 13px;
        color: light green;
        border-radius: 25px;
        margin-right: 7px;
        line-height: 100%;
      }
    }
    h1 {
      font-weight: 300;
      font-size: 55px;
      line-height: 75px;
      margin: 130px 0 35px 0;
      span{
        font-weight: 600;
      }
      color: white;
    }
  }
  .banner-btn.one {
    background: #52de97;
    color: #e0f5ea;
    &:hover {
      background: #e0f5ea;
      color: #52de97;
    }
  }
  .banner-btn.two {
    background: #ffebec;
    color: #fb7b81;
    &:hover {
      background: #fb7b81;
      color: #ffebec;
    }
  }
  .banner-btn + .banner-btn {
    margin-left: 30px;
  }
  .app-screen-image-wrapper {
    position: relative;
    width: 75%;
    margin: 0 0 0 auto;
    .thumb {
      position: absolute;
      box-shadow: 0 0 40px ${props => props.theme.shadowColor};
      border-radius: 10px;

      img {
        height: 100%;
      }

      &.one {
        bottom: 3%;
        left: -20%;
        height: 50%;
      }

      &.two {
        top: 3%;
        right: -18%;
        height: 28%;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .app-screen-image-wrapper {
      margin: 0 auto;
      .thumb {
        &.one {
          left: -15%;
        }
      }
    }
    p {
      margin: 0 0 45px 0;
    }
    .section-title {
        h1 {
            font-weight: 300;
            font-size: 50px;
            line-height: 75px;
            margin: 130px 0 0 0;
            span{
                font-weight: 600;
            }
            color: white;
        }
    }
  }
  @media only screen and (max-width: 990px) {
    
    padding-top: 120px;
    .section-title {
      margin-bottom: 18px;
      width: 100%;
      h1 {
        font-weight: 300;
        font-size: 55px;
        line-height: 75px;
        margin: 380px 0 35px 0;
        span{
          font-weight: 600;
        }
        color: white;
      }
      h4 {
        margin-bottom: 8px;
      }
    }
    p {
      margin: 0 20px 30px 0;
    }
    .banner-btn {
      min-width: 150px;
      font-size: 14px;
    }
    .banner-btn + .banner-btn {
      margin-left: 12px;
    }
    .app-screen-image-wrapper {
      width: 85%;
      margin: 0 auto;
      .thumb {
        &.one,
        &.two {
          display: none;
        }
      }
    }
    .vintage-box {
      &:before {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 100px 0 0 0;
    .section-title {
        h1 {
            font-size: 42px;
            line-height: 50px;
            margin: 450px 0 0 20px;
        }
    }
    .banner-btn + .banner-btn {
      margin-left: 30px;
    }
    .app-screen-image-wrapper {
      margin-top: 70px;
      width: 75%;
    }
  }
  @media only screen and (max-width: 568px) {
    .section-title {
        h1 {
            font-size: 36px;
            line-height: 50px;
          margin: 450px 0 0 20px;
        }
    }
    .app-screen-image-wrapper {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 120px 0 0px 0;
    .section-title {
      h1 {
        font-size: 36px;
        line-height: 50px;
        margin: 450px 0 0 20px;
      }
    }
    .vintage-box {
      &:before {
        content: none;
      }
    }
  }
  @media only screen and (max-width: 380px) {
    .section-title {
      h1 {
        font-size: 36px;
        line-height: 50px;
        margin: 450px 0 0 20px;
      }
      h4 {
        font-size: 12px;
      }
    }
    .banner-btn {
      font-size: 14px;
      min-width: 127px;
      padding: 14px 12px;
    }
    .banner-btn + .banner-btn {
      margin-left: 15px;
    }
  }
  @media only screen and (max-width: 330px) {
    .section-title {
      h1 {
        margin: 450px 0 0 20px;
        font-size: 36px;
        line-height: 50px;
      }
    }
  }
`;

export default HeroSectionWrapper;
