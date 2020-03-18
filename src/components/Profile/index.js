import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
`;

const ProfileName = styled.h1`
    font-size: 1.25rem;
    margin-bottom: 0;
`;

const ProfilePosition = styled.p`
    font-size: 0.9rem;
`;

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
        <ProfileWrapper>
            <Avatar />
            <ProfileName>{ name }</ProfileName>
            <ProfilePosition>{ position }</ProfilePosition>
        </ProfileWrapper>
    )
}