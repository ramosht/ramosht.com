import styled from 'styled-components';
import { Link } from 'gatsby'

export const PostItemWrapper = styled(Link)`
  display: block;
  background: var(--postBackground);
  box-shadow: 0 0 .5rem rgba(0,0,0,0.15);
  border-radius: .25rem;
  padding: 2rem;
  text-decoration: none;
  margin: 1rem;

  &:hover {
    * {
      opacity: .75;
    }
  }
`;

export const PostItemHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: .9rem;
`;

export const PostDate = styled.time`
  color: #aaa;
  transition: opacity .2s;
`;

export const PostCategory = styled.span`
  color: var(--text);
  display: inline-block;
  padding: 0 .5rem;
  margin-left: 1rem;
  font-weight: 700;
  transition: opacity .2s;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.375rem;
  line-height: 1.35;
  font-weight: 600;
  margin: 1rem 0 .5rem 0;
  color: var(--text);
  transition: color .2s;
  transition: opacity .2s;
`;

export const PostItemDescription = styled.p`
  font-size: 1.15rem;
  color: var(--text);
  line-height: 1.15;
  transition: opacity .2s;
`;