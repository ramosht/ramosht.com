import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'

import * as s from "./styled"

export default () => {
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
        <s.ProfileWrapper>
            <Avatar />
            <s.ProfileName>{ name }</s.ProfileName>
            <s.ProfilePosition>{ position }</s.ProfilePosition>
        </s.ProfileWrapper>
    )
}