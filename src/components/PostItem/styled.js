import styled from 'styled-components';
import { Link } from 'gatsby'

export const PostItemWrapper = styled(Link)`
  display: block;
  background: var(--postBackground);
  box-shadow: 0 0 .5rem rgba(0,0,0,0.15);
  border-radius: .25rem;
  text-decoration: none;
  margin-bottom: 1rem;

  * {
    transition: opacity .2s;
  }

  &:hover {
    * {
      opacity: .85;
    }
  }
`;

export const PostThumbnailWrapper = styled.div`
  width: 100%;
  height: 18rem;
  @media screen and (max-width: 767px) {
    height: 11rem;
  }
`;

export const PostThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const PostContent = styled.div`
  padding: 2rem;

  @media screen and (max-width: 575px) {
    padding: 1rem;
  }
`;

export const PostItemHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: .9rem;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PostDate = styled.time`
  color: var(--text);
`;

export const PostCategory = styled.span`
  color: var(--text);
  display: inline-block;
  padding: 0 .5rem;
  margin-left: 1rem;
  font-weight: 700;

  @media screen and (max-width: 575px) {
    margin: .5rem 0 0 0;
    padding: 0;
  }
`;

export const PostItemTitle = styled.h1`
  font-size: 1.375rem;
  line-height: 1.35;
  font-weight: 600;
  margin: 1rem 0 .5rem 0;
  color: var(--text);
  transition: color .2s;
`;

export const PostItemDescription = styled.p`
  font-size: 1.15rem;
  color: var(--text);
  line-height: 1.15;

  @media screen and (max-width: 575px) {
    display: none;
  }
`;