import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as s from './styled'

const NotFoundImage = () => {
    const { notFoundImage } = useStaticQuery(
        graphql`
            query {
                notFoundImage: file(relativePath: {eq: "404.jpg"}) {
                    childImageSharp {
                        fixed(width: 400) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }

            }
        `
    );

    return <s.NotFound fixed={ notFoundImage.childImageSharp.fixed } />
}

export default NotFoundImage;