import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;600;700&display=swap');

    body {
        --black-01: #212121;
        --black-02: #444444;
        --gray-01: #666666;
        --gray-02: #aaaaaa;
        --gray-03: #f4f4f4;
        --white: #ffffff;

        * {
            font-family: 'Raleway', sans-serif;
        }

    }

    body.light {
        --themeColor: #818c83;

        --text: #212121;
        --highlight: #3d2c40;
        --recommendedBackground: #f4f4f4;
        --recommendedColor: #aaaaaa;
        --background: #ffffff;
        --postBackground: #ffffff;

        --hamburgerColor: #818c83;

        background: var(--background);
    }

    body.dark {
        --themeColor: #3d2c40;

        --text: #ffffff;
        --highlight: #ffffff;
        --recommendedBackground: #261a26;
        --recommendedColor: #ffffff;
        --background: #3d2c40;
        --postBackground: #261a26;

        --hamburgerColor: #261a26;

        background: var(--background);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .layout--title {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .t-semi-bold {
        font-weight: 600;
    }

    .sidebarDark, .sidebarLight {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-property: opacity, background-color;
        transition-duration: .5s;
        z-index: -1;
    }

    body.light {
        .sidebarLight {
            opacity: 1;
        }

        .sidebarDark {
            opacity: 0;
        }
    }

    body.dark {
        .sidebarLight {
            opacity: 0;
        }

        .sidebarDark {
            opacity: 1;
        }
    }

`;

export default GlobalStyles;