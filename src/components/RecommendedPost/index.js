import React from 'react';
import * as S from './styled';
import propTypes from 'prop-types';

const RecommendedPost = ({ nextPost, previousPost }) => {

  return (
    <S.PostPaginationWrapper>
      {previousPost && 
        <S.PostPaginationLink to={previousPost.fields.slug}>
          {previousPost.frontmatter.title}
        </S.PostPaginationLink>}
        
      {nextPost && 
        <S.PostPaginationLink to={nextPost.fields.slug}>
          {nextPost.frontmatter.title}
        </S.PostPaginationLink>}
    </S.PostPaginationWrapper>
  )
}

RecommendedPost.propTypes = {
  nextPost: propTypes.shape({
    fields: {
      slug: propTypes.string.isRequired
    },
    frontmatter: {
      title: propTypes.string.isRequired
    }
  }),
  previousPost: propTypes.shape({
    fields: {
      slug: propTypes.string.isRequired
    },
    frontmatter: {
      title: propTypes.string.isRequired
    }
  }),
}

export default RecommendedPost;