import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as s from './styled'

const AvatarMobile = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
                    childImageSharp {
                        fixed(width: 45, height: 45) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    return <s.Avatar fixed={ avatarImage.childImageSharp.fixed } />
}

export default AvatarMobile;