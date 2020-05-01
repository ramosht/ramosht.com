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

    @media screen and (min-width: 768px) {
        width: 25rem;
        left: 0;
    }

    &.shown {
        left: 0;
    }
`;

export const ProfileWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 100%;

    transform: translateX(-50%);
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