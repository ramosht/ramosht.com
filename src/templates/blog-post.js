import React from 'react';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <h1>{ post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html}} />
    </>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
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