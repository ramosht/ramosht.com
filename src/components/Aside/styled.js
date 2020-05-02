import styled from 'styled-components'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'

export const AsideWrapper = styled.aside`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: -110%;
    background-image: var(--sidebarBackground);
    background-color: var(--themeColor);
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    transition: left .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        width: 25rem;
        left: 0;
    }

    &.shown {
        left: 0;
    }
`;

export const MenuWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 576px) {
        justify-content: flex-start;
    }
`;

export const ThemeToggleWrapper = styled.div`
    margin-top: 1rem;
`;

export const ProfileWrapper = styled.div`
    display: block;
    text-align: center;
    color: var(--white);
`;

export const Hamburger = styled(HamburgerSpin)`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;