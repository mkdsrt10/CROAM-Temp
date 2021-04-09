import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import TeamCardsSectionWrapper from './teamcards.style'

const CardExample = ({img, title, text}) => {
  return (
    <TeamCardsSectionWrapper>
    <MDBCol>
      <MDBCard>
        <MDBCardImage className="img-team-card" src={img}/>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText className="card-txt">
            {text}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </TeamCardsSectionWrapper>
  )
}

export default CardExample;