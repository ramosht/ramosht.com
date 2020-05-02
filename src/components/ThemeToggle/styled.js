import styled from 'styled-components';

export const ThemeToggleWrapper = styled.button`
  width: 3rem;
  height: 1.65rem;
  background: #261a26;
  border-radius: 1.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ThemeToggleBullet = styled.div`
  height: 1rem;
  width: 1rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transition: left .2s;
  left: ${ p => p.selected === 'light' ? '0.75rem' : 'calc(100% - 0.75rem)' };
  transform: translate(-50%, -50%);
  
`;

export const ThemeToggleIcon = styled.div``;