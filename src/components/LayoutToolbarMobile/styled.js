import styled from 'styled-components'
import { HamburgerSpin } from 'react-animated-burgers'

export const ToolbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: var(--toolbarBackground);
  transition: background-color .2s;
  z-index: 1000000;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const ToolbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;

  svg {
    color: #fff;
  }
`;

export const Hamburger = styled(HamburgerSpin)`
    height: 30px;

    &:active,
    &:focus {
        outline: none;
    }
`;