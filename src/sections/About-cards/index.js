import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import AboutCardsSectionWrapper from './aboutcards.style'

const CardExample = ({ img, title, text }) => {
    return (
        <AboutCardsSectionWrapper>
            <MDBCard>
                <MDBCardImage className="img-fluid img-about-card" src={img} waves/>
                <MDBCardBody>
                    <MDBCardTitle className="title">{title}</MDBCardTitle>
                    <MDBCardText className="card-txt">
                        {text}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </AboutCardsSectionWrapper>
    )
}

export default CardExample;