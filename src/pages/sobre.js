import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Curso from '../components/Curso'

import * as s from '../styles/pages/sobre'

const Sobre = () => {
    return (
        <Layout>
            <SEO title="Sobre" />
            
            <div className="introducao">
                <h2 className="layout--title">Um pouco sobre mim</h2>
                <s.Paragraph>Sou uma pessoa bastante inquieta, que está, o tempo todo, buscando entender como a tecnologia pode ser usada para melhorar ainda mais a vida das pessoas. Afinal de contas, tecnologia é sobre isso, não é? Pessoas.</s.Paragraph>
                <s.IntroducaoLista>
                    <s.IntroducaoItem><span className="t-semi-bold">Nome</span>: Guilherme Henrique Teodoro Ramos</s.IntroducaoItem>
                    <s.IntroducaoItem><span className="t-semi-bold">Idade</span>: 22 anos</s.IntroducaoItem>
                    <s.IntroducaoItem><span className="t-semi-bold">Residência</span>: Sorocaba/SP</s.IntroducaoItem>
                    <s.IntroducaoItem><span className="t-semi-bold">Língua</span> Estrangeira: Inglês Avançado</s.IntroducaoItem>
                    <s.IntroducaoItem><span className="t-semi-bold">Hobbies</span>: Fotografia, música e esportes</s.IntroducaoItem>
                    <s.IntroducaoItem><span className="t-semi-bold">Frase</span>: "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."</s.IntroducaoItem>
                </s.IntroducaoLista>
            </div>

            <div className="especializacao">
                <h2 className="layout--title">Cursos e Especializações</h2>
                <Curso />
                <Curso />
                <Curso />
                <Curso />
            </div>

            <div className="experiencias">
                <h1 className="layout--title">Experiências profissionais</h1>
                <Curso />
                <Curso />
                <Curso />
                <Curso />
            </div>
        </Layout>
    )
}

export default Sobre