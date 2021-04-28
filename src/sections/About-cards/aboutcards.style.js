import styled from 'styled-components';

const AboutCardsSectionWrapper = styled.div`
  background: #1d316c no-repeat;
  padding: 0 0 0 0;
  width: 55%;
  display: flex;
  margin: 90px auto;
  margin-top: 10%;
  box-shadow: 0px 10px 10px  rgba(0, 0, 0, 0.2), 0px -10px 10px  rgba(0, 0, 0, 0.2), 
              10px 0px 10px  rgba(0, 0, 0, 0.2), -10px 0px 10px  rgba(0, 0, 0, 0.2);
  opacity: 1;
  border-radius: 5px;
  text-align: center;

  // psuedo-element shine animation left side
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    top: 0;
    filter: blur(60px);
    transform: translateX(-60px) skewX(-2deg);
  }

  // psuedo-element shine animation right side
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    top: 0;
    filter: blur(10px);
    transform: translateX(-60px) skewX(-2deg);
  }

  // grow button and change background gradient on hover
  &:hover {
    background-image: (linear-gradient(to left, #2d8fe5, #d155b8));
    transform: scale(1.2);
    cursor: pointer;

    // psuedo-elements for right- and left-side shine animations
    &::before,
    &::after {
      transform: translateX(500px) skewX(-2deg);
      transition: 0.8s;
    }
  }

  .card-txt{
    padding: 5% 5% 0 7%;
    color: white;
    opacity: 1;
    font-size: small;
  }
  
  .title{
    display: flex;
    justify-content: center;
    color: white;
    opacity: 1;
  }

  .img-about-card {
    display: flex;
    margin: 0 auto;
    width: 30%;
    padding: 15px 0;
    opacity: 1;
  }

  @media only screen and (max-width: 1024px) {
    width: 70%;
  }

  @media only screen and (max-width: 912px) {
    width: 80%;
  }

  @media only screen and (max-width: 480px) {
    width = 100%;
  }
`
export default AboutCardsSectionWrapper;
