import styled from 'styled-components';
import { Link } from 'gatsby'

export const PostItemWrapper = styled(Link)`
  display: block;
  background: #fff;
  box-shadow: 0 0 .5rem rgba(0,0,0,0.15);
  border-radius: .25rem;
  padding: 2rem;
  text-decoration: none;
  margin: 1rem;

  @media screen and (min-width: 1200px) {
    max-width: 30rem;
  }

  &:hover {
    h1 {
      color: #01d4b3;
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
`;

export const PostCategory = styled.span`
  display: block;
  padding: .5rem;
  background: #01d4b3;
  color: #fff;
  margin-left: 1rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
  margin: 1rem 0 .5rem 0;
  color: #1C1018;
  transition: color .2s;
`;

export const PostItemDescription = styled.p`
  font-size: 1.15rem;
  color: #666;
`;