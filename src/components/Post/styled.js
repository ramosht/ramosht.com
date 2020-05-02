import styled from "styled-components"

export const PostHeader = styled.header`
  margin: auto;
  max-width: 70rem;
  padding: 1rem 0 0;
  color: var(--text);
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }
  font-weight: 700;
  margin: 1rem auto;
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  @media screen and (max-width: 1200px) {
    font-size: 1.75rem;
  }
  font-weight: 200;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0;
`

export const PostThumbnail = styled.img`
  width: 100%;
  max-width: 100%;
  margin-top: 1rem;
`;

export const MainContent = styled.section`
  padding: 2rem 0;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--text);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 0.069rem;

    @media screen and (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .gatsby-highlight .plain-text {
    color: var(--gray-03);
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;

    &.informacoesPessoaisSobre {
      list-style: none;
      padding: 0
    }
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--white);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--highlight);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    @media screen and (max-width: 1200px) {
      font-size: 1.8rem;
    }
  }
  h2 {
    font-size: 2.1rem;
    @media screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    @media screen and (max-width: 1200px) {
      font-size: 1.4rem;
    }
  }
  h4 {
    font-size: 1.4rem;
    @media screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
  }
  h5 {
    font-size: 1.2rem;
    @media screen and (max-width: 1200px) {
      font-size: 1rem;
    }
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--white);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`