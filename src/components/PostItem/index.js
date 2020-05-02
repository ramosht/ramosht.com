import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types'

export default function PostItem({ slug, category, date, title, description, thumbnail, siteUrl }) {
  return (
    <S.PostItemWrapper to={ slug }>
        <S.PostThumbnailWrapper>
          <S.PostThumbnailImage className="postThumbnailImage" src={`${siteUrl}/assets/img/${thumbnail}`} />
        </S.PostThumbnailWrapper>
        <S.PostContent>
          <S.PostItemHeader>
            <S.PostDate>{ date }</S.PostDate>
            <S.PostCategory>{ category }</S.PostCategory>
          </S.PostItemHeader>
          <S.PostItemTitle>{ title }</S.PostItemTitle>
          <S.PostItemDescription>{ description }</S.PostItemDescription>
        </S.PostContent>
    </S.PostItemWrapper>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
}