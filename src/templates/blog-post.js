import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPost from '../components/RecommendedPost';
import Comments from '../components/Comments';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pathContext }) => {
  const post = data.markdownRemark;

  const nextPost = pathContext.nextPost;
  const previousPost = pathContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <span dangerouslySetInnerHTML={{__html: post.html}}></span>
      </S.MainContent>
      <RecommendedPost 
        nextPost={nextPost}
        previousPost={previousPost}
      />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        category
        date(formatString: "DD [de] MMMM, YYYY", locale: "pt-br")
        thumbnail
        title
        description
      }
      html
    }
  }
`;

export default BlogPost;