import React from 'react'
import * as S from './styled.js'
import MenuLinks from '../MenuLinks'
import {useMediaQuery} from 'react-responsive'

// Components
import Profile from "../Profile"
import ThemeToggle from '../ThemeToggle';

const Aside = (props) => {
    // const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});

    return (
        <S.AsideWrapper className={ props.asideState ? 'shown' : '' }>
            {isDesktop &&
                <>
                    <S.AsideBackgroundDark className="sidebarDark" />
                    <S.AsideBackgroundLight className="sidebarLight" />
                </>
            }

            <S.MenuWrapper>
                <MenuLinks />
            </S.MenuWrapper>

            {isDesktop &&
                <>
                    <S.ProfileWrapper>
                        <Profile />
                    </S.ProfileWrapper>

                    <S.ThemeToggleWrapper>
                        <ThemeToggle />
                    </S.ThemeToggleWrapper>
                </>
            }
        </S.AsideWrapper>   
    )
}

export default Aside