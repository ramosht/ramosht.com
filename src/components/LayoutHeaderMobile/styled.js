import styled from 'styled-components'
import {Link} from 'gatsby'

export const HeaderWrapper = styled(Link)`
    background: var(--toolbarBackground);
    transition: background-color .2s;
    padding: 0 1rem;
    height: 5rem;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    text-decoration: none;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-size: 1.1rem;
            margin-bottom: .15rem;
        }
        
        span {
            font-size: .75rem;
        }
    }

`;