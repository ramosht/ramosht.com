import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPost from '../components/RecommendedPost';
import Comments from '../components/Comments';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  const nextPost = pageContext.nextPost;
  const previousPost = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.thumbnail} />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <h1>{post.frontmatter.title}</h1>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.PostThumbnail src={`${data.site.siteMetadata.siteUrl}/${post.frontmatter.thumbnail}`} />
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
    site {
      siteMetadata {
        siteUrl
      }
    }
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