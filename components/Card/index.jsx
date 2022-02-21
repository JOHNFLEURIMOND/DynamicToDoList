import styled, { css } from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';

export const Card = styled.article`
border: 1px solid ${fleurimondColors.lightSmoke};
border-radius: 10px;
display: grid; 
width: 300px;
height: 325px;

@media(max-width: 800px){
  width:200px;
  height: 540px
}
@media(max-width: 430px){
  width: 200px;
  height: 540px;
}
}
`;


export const CardImage = styled.img`
object-fit: cover;
width: 100%;
`

export const Caption = styled.figcaption`
background-color: rgba(0,0,0,.7);
width: 100%;
`

export const CardHeader = styled.header`
  cursor: context-menu;
  border-bottom: 1px solid ${fleurimondColors.lightSmoke};
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: context-menu;
  text-align: center;
`;

export const CardBody = styled.figure`
  display: grid; 
  grid-template-areas: 200px 50px;
`;

export const PriceFieldset = styled.h3`
  color: ${fleurimondColors.dutchieBlue};
  font-family: 'proxima-nova', 'sans-serif';
  font-size: 1.25rem;
  border: 0;
`;

export const NameFieldset = styled.h3`
  color: ${fleurimondColors.black};
  padding: .75rem;
  font-size: 1rem;
  border: 0;
`;


export const Fieldset = styled.p`
  font-size: 1rem;
  text-decoration: none;
  color: ${fleurimondColors.smoke};
  padding: 0 32px;
  margin-top: 20px;
  border: 0;
`;

export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  font-size: 1rem;
  width: 100%;
  font-weight: 500;
  padding: 0 10px;
  margin: 5px;
`;

