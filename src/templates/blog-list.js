import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

import styled from 'styled-components';

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =  currentPage - 1 === 1 ? `/` : `/pages/${ currentPage - 1 }`;
  const nextPage = `/pages/${ currentPage + 1 }`;

  return (
    <Layout>
        <SEO 
          title="Início" 
          description="Sou desenvolvedor JS, fotógrafo, músico e cristão. Postagens semanais sobre o que imaginar que possa agregar algum valor 🧙🏻‍♂️"  />
        <PostList>
            {
                postList.map((
                    {
                        node: { 
                            frontmatter: { category, description, thumbnail, title, date }, 
                            fields: { slug }
                        }
                    }
                ) => (
                    <PostItem 
                        slug={slug}
                        category={category}
                        date={date}
                        title={title}
                        description={description}
                        thumbnail={thumbnail}
                        key={slug}
                        siteUrl={props.data.site.siteMetadata.siteUrl}
                    />
                ))
            }
        </PostList>
        <Pagination 
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
          numPages={numPages}
          currentPage={currentPage}
        />
        
    </Layout>
  )
}

export const query = graphql`
  query BlogList($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      skip: $skip,
      limit: $limit,
      sort: {
        fields: frontmatter___date, 
        order: DESC
      }
    ) {
      edges {
          node {
              fields {
                  slug
              }
              frontmatter {
                  category
                  description
                  thumbnail
                  title
                  date(formatString: "DD [de] MMMM, YYYY", locale: "pt-br")
              }
              timeToRead
          }
      }
    }
  }
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 1199px) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
  }
`;

export default BlogList;