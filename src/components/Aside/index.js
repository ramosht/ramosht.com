import React from 'react'
import * as s from './styled.js'

// Components
import Profile from "../Profile"
import { HamburgerSpin } from 'react-animated-burgers'

// state = {
//     isActive: false
// }

// toggleButton = () => {
//     this.setState({
//         isActive: !this.state.isActive
//     })
// }

const Aside = () => {
    return (
        <s.AsideWrapper>
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

            <s.Hamburger buttonColor="#000" barColor="white" buttonWidth={30}  />
        </s.AsideWrapper>   
    )
}

export default Aside