import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styled';

const PostItemThumbnail = ({ thumbnail }) => {
    // const { thumbnailImage } = useStaticQuery(
    //     graphql`
    //         query {
    //             thumbnailImage: file(relativePath: { eq: ${thumbnail} }) {
    //                 childImageSharp {
    //                     fluid(maxWidth: 320) {
    //                         ...GatsbyImageSharpFluid
    //                     }
    //                 }
    //             }
    //         }
    //     `
    // );

    // return <S.Thumbnail fluid={ thumbnailImage.childImageSharp.fluid } />
}

export default PostItemThumbnail;