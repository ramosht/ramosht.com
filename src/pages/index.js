import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Início" />
            <PostItem 
                slug="/about/"
                category="UX/UI"
                date="12 de Outubro, 2020"
                title="Diga não ao Medium: tenha sua própria plataforma"
                description="Algumas razões para você ter sua própria plataforma ao invés de soluções como Medium."
            />

        </Layout>
    )
}

export default IndexPage