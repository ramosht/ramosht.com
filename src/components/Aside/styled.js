import styled from 'styled-components'
import { HamburgerSpin } from 'react-animated-burgers'

export const AsideWrapper = styled.aside`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: -110%;
    background-image: var(--sidebarBackground);
    background-color: var(--sidebarBackgroundColor);
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
        width: 20rem;
        left: 0;
    }

    @media screen and (min-width: 1200px) {
        width: 25rem;
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
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    border-radius: 50%;
    height: 4.5rem;
    width: 4.5rem;
    border: 2px solid #3d2c40;

    &:active,
    &:focus {
        outline: none;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;