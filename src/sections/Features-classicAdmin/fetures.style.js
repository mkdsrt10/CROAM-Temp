import styled from 'styled-components';

const FeturesSectionWrapper = styled.div`
   padding: 70px 0 10px 0;
    
   .top-shadow-left {
    display: inline-block;
       width: 50%;
       height: 20px;
       
       -ms-transform: skewY(-5deg); /* IE 9 */
        transform: skewY(-5deg);
        margin: 50px 0 50px 0;
        box-shadow: -3px -10px 10px rgba(0, 0, 0, 0.2);
        -webkit-backface-visibility: hidden;
   }
   .top-shadow-right {
    display: inline-block;
    width: 50%;
    height: 20px;
    -ms-transform: skewY(5deg); /* IE 9 */
    transform: skewY(5deg);
    margin: 50px 0 50px 0;
    box-shadow: 3px -10px 10px rgba(0, 0, 0, 0.2);
    -webkit-backface-visibility: hidden;
}
.bottom-shadow-left {
    display: inline-block;
       width: 50%;
       height: 20px;
       
       -ms-transform: skewY(5deg); /* IE 9 */
        transform: skewY(5deg);
        margin: 50px 0 50px 0;
        box-shadow: -3px 10px 10px rgba(0, 0, 0, 0.2);
        -webkit-backface-visibility: hidden;
   }
   .bottom-shadow-right {
    display: inline-block;
    width: 50%;
    height: 20px;
    -ms-transform: skewY(-5deg); /* IE 9 */
    transform: skewY(-5deg);
    margin: 50px 0 50px 0;
    box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.2);
    -webkit-backface-visibility: hidden;
}
   
    .fetures-block{
        text-align: center;
        .features-icon {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center; 
            padding: 15px; 
            border-radius: 5px;
            margin-bottom: 10px;

            &:before {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 5px;
                
                content: " ";
                opacity: 0.08;
            }

            img {
                display: block;
                margin: 0;
                height: 40%;
                width: 40%;
            }
        }
        h3{
            font-size: 22px;
            color: #1D316C;
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
        }
        p{
            margin: 0 0 50px 0;
            font-weight: 300;
        }

        &:hover{
            .features-icon {
                border-color: #DC7DCE; 
            }
        }
    }
    @media only screen and (max-width: 760px) {
        padding: 70px 0 60px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-block{
            text-align: center;
        }
    }
`

export default FeturesSectionWrapper;