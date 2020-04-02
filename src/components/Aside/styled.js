import styled from 'styled-components'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'

export const AsideWrapper = styled.aside`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: -110%;
    background: #333;
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
    color: #fff;

    // display: none;
`;

export const Navbar = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const NavbarItem = styled.li`
    text-transform: uppercase;
    margin: 1.25rem 0;
`;
    
export const NavbarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 50%;
    
    &.active {
        opacity: 100%;
    }
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