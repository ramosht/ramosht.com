import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'

import * as s from "./styled"

export default () => {
    const { site: { siteMetadata: { name, description, position } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    name
                    description
                    position
                }
            }
        }
    `)
    
    return (
        <s.ProfileWrapper>
            <Avatar />
            <div className="header">
                <h1>{ name }</h1>
                <span>{ position }</span>
            </div>
            <p>{ description }</p>
            <SocialLinks iconSize="24px" iconColor="#fff" />
        </s.ProfileWrapper>
    )
}