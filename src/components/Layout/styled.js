import styled from 'styled-components'

export const Layout = styled.div`
    @media screen and (min-width: 768px) {
        padding-left: 20rem;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 25rem;    
    }
`;

export const Main = styled.main`
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    @media screen and (max-width: 767px) {
        padding: 1rem;
    }
    margin: auto;
    max-width: 70rem;
`;