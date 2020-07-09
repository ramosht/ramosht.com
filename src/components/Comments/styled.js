import styled from 'styled-components';

export const CommentsWrapper = styled.section`
  margin: auto;
  
  iframe[src*='ads-iframe'] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--text) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--text);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
