import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        --themeColor: #818c83;

        --text: #212121;
        --highlight: #3d2c40;
        --recommendedBackground: #f4f4f4;
        --recommendedColor: #aaa;
        --background: #fff;
        --postBackground: #fff;

        --black-01: #212121;
        --black-02: #444;
        --gray-01: #666;
        --gray-02: #aaa;
        --gray-03: #f4f4f4;
        --white: #fff;

        --sidebarBackground: url('https://wallpaperaccess.com/full/128783.jpg');
    }

    body.light {
        --themeColor: #3d2c40;

        --text: #fff;
        --highlight: #fff;
        --recommendedBackground: #261a26;
        --recommendedColor: #fff;
        --background: #3d2c40;
        --postBackground: #261a26;

        --sidebarBackground: url('https://blog.emania.com.br/wp-content/uploads/2015/11/composi%C3%A7%C3%A3o-astrofotografia.jpg');
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
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
        font-family: 'Raleway', sans-serif;
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
`;

export default GlobalStyles;