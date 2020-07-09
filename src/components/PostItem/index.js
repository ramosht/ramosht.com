import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types'
import PostItemThumbnail from '../PostItemThumbnail';

export default function PostItem({ slug, category, date, title, description, thumbnail, siteUrl }) {
  const sanitizedThumbnailUrl = thumbnail.split('').slice(11,).join('');
  const descriptionSize = 75;
  const sanitizedDescription = description.slice(0, descriptionSize);
  
  return (
    <S.PostItemWrapper to={ slug }>
        <S.PostThumbnailWrapper>
          <PostItemThumbnail className="postThumbnailImage" alt={title} filename={sanitizedThumbnailUrl}/>
        </S.PostThumbnailWrapper>
        <S.PostContent>
          <S.PostItemHeader>
            <S.PostDate>{ date }</S.PostDate>
            <S.PostCategory>{ category }</S.PostCategory>
          </S.PostItemHeader>
          <S.PostItemTitle>{ title }</S.PostItemTitle>
          <S.PostItemDescription>{ description.length > descriptionSize ? `${sanitizedDescription}...` : sanitizedDescription }</S.PostItemDescription>
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