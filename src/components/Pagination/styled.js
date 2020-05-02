import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem .5rem 1rem;
  color: var(--text);
  font-size: 1.15rem;
`;

export const PaginationLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
`;