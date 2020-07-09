import styled from "styled-components"

export const PostHeader = styled.header`
  padding: 1rem 0 0;
  color: var(--text);
  margin: auto;	
  max-width: 70rem;
  margin-bottom: 1rem;

  h1 {
    font-size: 2.5rem;
    line-height: 1.15;
    font-weight: 700;
    margin: .5rem auto;

    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
  }
`

export const PostDescription = styled.h2`
  font-size: 1.25rem;
  line-height: 1.25;

  @media screen and (max-width: 1200px) {
    font-size: 1.15rem;
  }
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0;
`

export const PostThumbnail = styled.img`
  width: 100%;
  max-width: 100%;
  margin-top: 1rem;
`;

export const MainContent = styled.section`
  padding: 1 rem 0;
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
    font-size: 1.05rem;
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
    margin: 0 auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2rem;
    margin: 0 auto 1rem;

    &.informacoesPessoaisSobre {
      list-style: none;
      padding: 0
    }
  }

  li {
    & + li {
      padding-top: 0.65rem;
    }

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
    line-height: 1.25;
  }
  
  h1 {
    font-size: 1.75rem;
    margin: 2.4rem auto 1rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin: 1.4rem auto 1rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 1.5rem auto .5rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.3rem;
    }
  }

  h4 {
    font-size: 1.15rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: bold;
    
    @media screen and (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  strong {
    font-weight: bold;
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
    color: var(--text);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--white);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .aboutContato {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
  
      li {
        margin: 0 1rem;
        padding: 0;

        @media screen and (min-width: 576px) {
          margin: 0 2rem;
        }
        
        a {
          border: none;
        }
      }
      
    }
  }
`