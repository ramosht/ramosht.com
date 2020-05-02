import React from 'react'
import * as S from './styled'
import * as PS from '../../components/Post/styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Curso from '../../components/Curso'
import ProfessionalExperience from '../../components/ProfessionalExperience'

const Sobre = () => {
    return (
        <Layout>
            <SEO 
                title="Sobre mim" 
                description="Sou desenvolvedor JS, fotógrafo, músico e cristão. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main>
                <PS.PostHeader>
                    <PS.PostTitle>Um pouco sobre mim</PS.PostTitle>
                </PS.PostHeader>
                <PS.MainContent>
                    <div>
                        <p>Sou uma pessoa bastante inquieta, que está, o tempo todo, buscando entender como a tecnologia pode ser usada para melhorar ainda mais a vida das pessoa Afinal de contas, tecnologia é sobre isso, não é? Pessoa</p>
                        <ul className="informacoesPessoaisSobre">
                            <li>
                                <span className="t-semi-bold">Idade</span>: 22 anos
                            </li>

                            <li>
                                <span className="t-semi-bold">Residência</span>: Sorocaba/SP
                            </li>

                            <li>
                                <span className="t-semi-bold">Língua Estrangeira</span>: Inglês Avançado
                            </li>

                            <li>
                                <span className="t-semi-bold">Hobbies</span>: Fotografia, música e esportes
                            </li>

                            <li>
                                <span className="t-semi-bold">Frase</span>: "O melhor momento para plantar uma árvore foi há 20 ano O segundo melhor momento é agora."
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Cursos e Especializações</h2>
                        <Curso 
                            titulo="Formação Front-end"
                            instituicao="Alura Cursos Online"
                            data="mar de 2020"
                        />
                        <Curso 
                            titulo="Semana OmniStack 11"
                            instituicao="Rocketseat"
                            data="mar de 2020"
                        />
                        <Curso 
                            titulo="Formação SEO"
                            instituicao="Alura Cursos Online"
                            data="mai de 2019"
                        />
                    </div>

                    <div>
                        <h2>Experiências profissionais</h2>
                        <ProfessionalExperience 
                            atuacao="Desenvolvedor de front-end"
                            instituicao="DOK Despachante"
                            descricao="Front-end das diversas áreas que compõem o ecossistema da empresa: sistema de checkout, sistema interno, landing pages, etc."
                            periodo="jul de 2019 - atualmente (11 meses)"
                        />
                        <ProfessionalExperience 
                            atuacao="Professor"
                            instituicao="Cursinho do Prof. Carlão"
                            descricao="Aulas de noções de informática para concursos públicos. As aulas cobriam Windows 7, Pacote Office 2010, noções de Rede e Internet. Além das aulas, também cuidei da identidade visual (criando o logo) e das mídias sociais, criando imagens promocionais para os posts do Facebook e Instagram."
                            periodo="mar de 2019 - abr de 2019 (2 meses)"
                        />
                        <ProfessionalExperience 
                            atuacao="Assistente"
                            instituicao="Gabi Cupcakes"
                            descricao="Responsável pela presença digital da empresa, criando a identidade visual da empresa (logo, fonte e cores) e realizando um trabalho de marketing no Facebook e no Instagram."
                            periodo="jun de 2017 - mar de 2018 (10 meses)"
                        />
                        <ProfessionalExperience 
                            atuacao="Atendente de negócios"
                            instituicao="Horus Soluções e Serviços em Prevenção a Fraudes"
                            descricao="Análise e prevenção de fraudes em passagens aéreas. Também trabalhei no setor de TI,"
                            periodo="fev de 2016 - jul de 2017 (1 ano e 6 meses)"
                        />
                    </div>
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default Sobre