import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
    margin: 0 auto;
    width: 100%;
`;

export const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const SocialLinksItem = styled.li`
    margin: 0 2.5%;
`;

export const SocialLinksLink = styled.a`
    text-decoration: none;
    transition: color .5s;
    // margin: 0 .5rem;

    svg {
        fill: ${ props => props.iconColor };
        width: ${ props => props.iconSize };
        height: ${ props => props.iconSize };
    }
`;

export const IconContainer = styled.span``;