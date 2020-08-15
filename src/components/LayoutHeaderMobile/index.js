import React from 'react'
import { HeaderWrapper } from './styled.js'
import { useStaticQuery, graphql } from 'gatsby'
import AvatarMobile from '../AvatarMobile'

const LayoutHeaderMobile = () => {    
    const { site: { siteMetadata: { name, position } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    name
                    position
                }
            }
        }
    `)

    return (
        <HeaderWrapper to="/">
            <AvatarMobile />
            <div>
                <h1>{name}</h1>
                <span>{position}</span>
            </div>
        </HeaderWrapper>
    )
}

export default LayoutHeaderMobile