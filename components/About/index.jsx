import styled, { css } from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';

export const ProjectsSectionContainer = styled.div`
  display: grid;
  justify-items: left;
  align-items: left;
  grid-gap: 1rem;
  width: 100%;
  height: 100vw;
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