import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import TeamCardsSectionWrapper from './teamcards.style'

const CardExample = ({img, title, text, dept, affiliation}) => {
  return (
    <TeamCardsSectionWrapper>
      <MDBCard>
        <MDBCardImage className="img-team-card" src={img}/>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText className="card-txt">
            {text}
            <br></br>
            {dept}
            <br></br>
            {affiliation}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </TeamCardsSectionWrapper>
  )
}

export default CardExample;