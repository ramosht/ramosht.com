import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const MenuLinksItem = styled.li`
  text-transform: uppercase;
  margin: 1.25rem 0;

  .active {
    color: var(--white);
  }
`;

export const MenuLinksLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 50%;
  
  &.active {
      opacity: 100%;
  }
`;