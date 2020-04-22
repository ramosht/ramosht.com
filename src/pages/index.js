import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from '../styles/pages/index'

const IndexPage = () => {
    const  { allMarkdownRemark } = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
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
    `);

    const postList = allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Início" />
            <S.PostList>
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
                        />
                    ))
                }
            </S.PostList>
            
        </Layout>
    )
}

export default IndexPage