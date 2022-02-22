import styled, { css } from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';

export const ProjectsSectionContainer = styled.div`
  display: grid;
  justify-items: left;
  align-items: left;
  grid-gap: 1rem;
  width: 100%;
  height: 80vw;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
  margin: 0;
  padding-left: 10rem;
  line-height: normal;
  background-color: ${fleurimondColors.white};
  grid-template-columns: 1fr;
  grid-template-rows: 50px 200px;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
  }
`;



export const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  grid-column: span 3;

  @media (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
    grid-column: span 2;
  }
`;
export const UL = styled.ul`
list-style: none;
`;
export const TextArea = styled.textarea`
display: block;
box-sizing: padding-box;
overflow: hidden;
margin-top: 10px;
margin-left: 50px;
width: 500px;
height: 100px;
-moz-border-bottom-colors: none;
-moz-border-left-colors: none;
-moz-border-right-colors: none;
-moz-border-top-colors: none;
background: none repeat scroll 0 0 ${fleurimondColors.graySmoke};
border-color: -moz-use-text-color ${fleurimondColors.white} ${fleurimondColors.white} -moz-use-text-color;
border-image: none;
border-radius: 6px;
border-style: none solid solid none;
border-width: medium 1px 1px medium;
padding: 10px;
width: 250px;
font-size: 14px;
margin: 50px auto;
box-shadow: 2px 2px 8px rgba(black, .3);
border: 0;

&:focus{
  background: ${fleurimondColors.white};
  border: none;
  outline: none;
}
`;


export const ButtonArea = styled.div`
display: grid;
grid-template-rows: 50px;
grid-template-columns: 150px 150px ;
grid-gap: 30px;
`;
export const CineDiv = styled.div`
  display: grid;
  grid-column: span 3;
`;
export const Button = styled.button`

  .first{
    background: #19c3d6;
    box-shadow: inset 0px 0px 0px 0px #ff0099;
    transition: all 0.5s ease-in-out;
  }
  .first:hover{
    box-shadow: inset 0px -200px 0px 0px #ff0099;
  }
  

`;
export const Form = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

display: flex;
flex-wrap: wrap;
flex-direction: column; 
align-items: center;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: ${fleurimondColors.black};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  div {
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Right = styled.div``;

export const Hamburger = styled.span`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const Bolt = styled.span`
  position: relative;
  margin: 50px;
  width: 30px;
  height: 50px;
  transform-origin: 50% 50%;
  transform: skewX(-30deg) skewY(-30deg) rotate(10deg);
  background-color: yellow;
  padding: 0;
  margin-left: 0;
  margin-right: 0;

  &:before {
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent ${fleurimondColors.graySmoke} transparent;
    top: 0px;
    left: -11px;
    padding: 0;
    margin: 0;
    content: '';
  }

  &:after {
    display: inline-block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent transparent ${fleurimondColors.graySmoke};
    bottom: 0px;
    right: 3px;
    content: '';
  }
`;
export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  display: block;
  font-size: 15px;
  width: 100%;
  font-family: 'proxima-nova', 'sans-serif';
  font-weight: 500;
  position: relative;
  padding: 0 10px;
  margin: 5px;
`;
