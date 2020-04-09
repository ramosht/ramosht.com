import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'

import * as s from "./styled"

export default () => {
    const { site: { siteMetadata: { name, description } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    name
                    description
                }
            }
        }
    `)
    
    return (
        <s.ProfileWrapper>
            <Avatar />
            <s.ProfileName>{ name }</s.ProfileName>
            <s.ProfilePosition>{ description }</s.ProfilePosition>
            <SocialLinks />
        </s.ProfileWrapper>
    )
}