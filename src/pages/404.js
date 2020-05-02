import React from "react"
import SEO from "../components/seo"
import GlobalStyle from "../styles/global"
import NotFoundImage from "../components/NotFoundImage"
import styled from 'styled-components';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <>
  <GlobalStyle />
  <NotFoutWrapper>
    <SEO title="Página não encontrada" description="Eita, parece que essa página não existe mais. Mas volte ao blog para encontrar outros posts maneiros." />
    <h1>Eita, parece que essa página não existe mais</h1>
    <GoBack to="/">Voltar ao blog</GoBack>
    <NotFoundImage />
  </NotFoutWrapper>
  </>
);

const NotFoutWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  background-color: var(--background);
  padding: 0 2rem;
  box-sizing: border-box;

  h1 {
    font-size: 1.5rem;
    color: var(--text);
  }

  height: 100vh;
`;

const GoBack = styled(Link) `
  font-size: 1.5rem;
  border-bottom: 2px dashed var(--text);
  display: block;
  margin: 1rem 0 2rem 0; 
  text-decoration: none;
  color: var(--text);
`;

export default NotFoundPage;
