import React, { useState } from 'react'
import * as S from './styled.js'
import MenuLinks from '../MenuLinks'

// Components
import Profile from "../Profile"
import ThemeToggle from '../ThemeToggle';

const Aside = () => {
    const [ hamburgerState, setHamburgerState ] = useState(false);
    const [ asideState, setAsideState ] = useState(false);
    
    function toggleButton() {
        setHamburgerState(!hamburgerState);
        setAsideState(!asideState);
    }
    
    return (
        <S.AsideWrapper className={ asideState ? 'shown' : '' }>
            <S.AsideBackgroundDark className="sidebarDark" />
            <S.AsideBackgroundLight className="sidebarLight" />

            <S.MenuWrapper>
                <MenuLinks />
            </S.MenuWrapper>

            <S.ProfileWrapper>
                <Profile />
            </S.ProfileWrapper>

            <S.ThemeToggleWrapper>
                <ThemeToggle />
            </S.ThemeToggleWrapper>

            <S.Hamburger isActive={hamburgerState} onClick={() => toggleButton()} buttonColor="#261a26" barColor="white" buttonWidth={36}  />
        </S.AsideWrapper>   
    )
}

export default Aside