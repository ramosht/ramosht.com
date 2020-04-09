import React, { useState } from 'react'
import * as s from './styled.js'
import MenuLinks from '../MenuLinks'

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
            <MenuLinks />

            <s.ProfileWrapper>
                <Profile />
            </s.ProfileWrapper>

            <s.Hamburger isActive={hamburgerState} onClick={() => toggleButton()} buttonColor="#01d4b3" barColor="white" buttonWidth={30}  />
        </s.AsideWrapper>   
    )
}

export default Aside