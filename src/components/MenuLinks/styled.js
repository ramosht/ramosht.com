import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const MenuLinksItem = styled.li`
  margin: 1.25rem 0;

  .active {
    color: var(--white);
  }
`;

export const MenuLinksLink = styled(Link)`
  color: var(--white);
  font-weight: 500;
  text-decoration: none;
  font-size: 1.25rem;
  opacity: 50%;
  
  &.active {
      opacity: 100%;
  }
`;