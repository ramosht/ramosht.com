import React, {useState, useCallback} from 'react';
import { Link } from 'gatsby'
import ThemeToggle from '../ThemeToggle'

import { HouseDoor } from '@styled-icons/bootstrap/HouseDoor'
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'

import {ToolbarWrapper, ToolbarContainer, ToolbarItem, Hamburger} from './styled'

const LayoutToolbarMobile = (props) => {
  const [ hamburgerState, setHamburgerState ] = useState(false);

  function toggleButton() {
    setHamburgerState(!hamburgerState)
    props.setAsideState(!props.asideState)
  }

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  return (
    <ToolbarWrapper>
      <ToolbarContainer>
        <ToolbarItem>
          <Link to='/'>
            <HouseDoor size={24} />
          </Link>
        </ToolbarItem>
        <ToolbarItem>
          <ThemeToggle />
        </ToolbarItem>
        <ToolbarItem onClick={toggleButton}>
          <Hamburger isActive={hamburgerState} barColor="white" buttonWidth={24}  />
        </ToolbarItem>
        <ToolbarItem onClick={scrollTop}>
          <UpArrowAlt size={24} />
        </ToolbarItem>
      </ToolbarContainer>
    </ToolbarWrapper>
  )
}

export default LayoutToolbarMobile