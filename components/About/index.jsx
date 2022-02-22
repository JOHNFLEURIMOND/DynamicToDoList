import styled, { css } from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';
import { Link } from 'react-router-dom';

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


export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? '0' : '-100%')};

    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${fleurimondColors.white};
  font-size: 13px;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    padding: 8px 11px;
    color: ${fleurimondColors.palesasAqua};
    background-color: ${fleurimondColors.black};
    border-color: ${fleurimondColors.black};
    cursor: pointer;
    display: inline-block;
    letter-spacing: 0.02em;
    line-height: 1;

  transition: all 0.2s ease;
  &:hover {
    color: ${fleurimondColors.woooRed};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: ${fleurimondColors.woooRed};
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
