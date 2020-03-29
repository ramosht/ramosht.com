import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
    margin: 2rem auto;
    width: 100%;
`;

export const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
    color: #8899a6;
    text-decoration: none;
    transition: color .5s;
    margin: 0 .5rem;

    &:hover {
        color: #1fa1f2;
    }

    svg {
        fill: #bbb;
        width: 30px;
        height: 30px;
    }
`;