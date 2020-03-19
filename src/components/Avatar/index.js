import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as s from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
                    childImageSharp {
                        fixed(width: 60, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    return <s.Avatar fixed={ avatarImage.childImageSharp.fixed } />
}

export default Avatar;