import styled from 'styled-components';

const TeamCardsSectionWrapper = styled.div`
  width: 55%;
  display: flex;
  margin: 90px auto;
  margin-top: 10%;
  opacity: 1;
  border-radius: 10px;
  text-align: center;
  border-width: 0 0 0px 0.2px;
  border-color: silver;
  border-style: solid;
    
  .card-txt{
    margin: 0;
    padding: 5%;
    opacity: 1;
  }
  
  .title{
    display: flex;
    justify-content: center;
    color: white;
    opacity: 1;
  }

  .img-team-card {
    display: flex;
    margin: 20px auto;
    width: 80%;
    opacity: 1;
    border-radius: 50%;
    box-shadow: 0px 5px 5px  rgba(0, 0, 0, 0.2), 0px -5px 5px  rgba(0, 0, 0, 0.2), 
            5px 0px 5px  rgba(0, 0, 0, 0.2), -5px 0px 5px  rgba(0, 0, 0, 0.2);
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
export default TeamCardsSectionWrapper;
