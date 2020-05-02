import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostPaginationWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
  
export const PostPaginationLink = styled(Link)`
  width: 50%;
  padding: 2rem 1rem;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  color: #999;
  flex-grow: 1;
  color: var(--text);
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: background-color .2s;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  &:hover {
    background-color: var(--postBackground);
  }
`

export const PostPaginationLabel = styled.span`
  display: block;
  font-style: italic;
  margin-bottom: .5rem;
`