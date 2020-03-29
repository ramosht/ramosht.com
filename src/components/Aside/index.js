import React, { useState } from 'react'
import * as s from './styled.js'

// Components
import Profile from "../Profile"

const Aside = () => {
    const [ hamburgerState, setHamburgerState ] = useState(false);
    const [ asideState, setAsideState ] = useState(false);
    
    function toggleButton() {
        setHamburgerState(!hamburgerState);
        setAsideState(!asideState);
    }
    
    return (
        <s.AsideWrapper className={ asideState ? 'shown' : '' }>
            <s.Navbar>
                <s.NavbarItem>
                    <s.NavbarLink to="/" activeClassName="active">Início</s.NavbarLink>
                </s.NavbarItem>
                <s.NavbarItem>
                    <s.NavbarLink to="/sobre" activeClassName="active">Sobre mim</s.NavbarLink>
                </s.NavbarItem>
                <s.NavbarItem>
                    <s.NavbarLink to="/blog" activeClassName="active">Blog</s.NavbarLink>
                </s.NavbarItem>
                <s.NavbarItem>
                    <s.NavbarLink to="/portfolio" activeClassName="active">Portfolio</s.NavbarLink>
                </s.NavbarItem>
                <s.NavbarItem>
                    <s.NavbarLink to="/contato" activeClassName="active">Contato</s.NavbarLink>
                </s.NavbarItem>
            </s.Navbar>

            <s.ProfileWrapper>
                <Profile />
            </s.ProfileWrapper>

            <s.Hamburger isActive={hamburgerState} onClick={() => toggleButton()} buttonColor="#000" barColor="white" buttonWidth={30}  />
        </s.AsideWrapper>   
    )
}

export default Aside