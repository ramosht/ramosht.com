import styled from 'styled-components';
import { Lightbulb } from '@styled-icons/fa-regular/Lightbulb'

export const ThemeToggleWrapper = styled.button`
  background: transparent;
  border: none;

  @media screen and (min-width: 767px) {
    width: 4.5rem;
    height: 2rem;
    border-radius: 1.65rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 2px solid var(--white);
  }
  
  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ThemeToggleBullet = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transition: left .2s;
  left: ${ p => p.selected === 'light' ? '1rem' : 'calc(100% - 1rem)' };
  transform: translate(-50%, -50%);
  z-index: 2;
  
`;

export const ThemeToggleIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  z-index: 1;

  &.light {
    left: 1rem;
  }

  &.dark {
    left: calc(100% - 1rem);
  }
`;

export const LightbulbIcon = styled(Lightbulb)`
  svg, * {
    color: var(--lightbulb-color);
    transition: color .2s;
  }
`

export const ThemeToggleDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ThemeToggleMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;