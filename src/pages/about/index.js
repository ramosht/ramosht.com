import React from 'react'
import {uuid} from 'uuidv4'
import * as PS from '../../components/Post/styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Certification from '../../components/Certification'
import Experience from '../../components/Experience'
import SocialLinks from '../../components/SocialLinks'
import {graphql, useStaticQuery} from 'gatsby';
import FormatDate from '../../utils/FormatDate';

const Sobre = () => {
    const formatDate = new FormatDate();

    const { allExperienceJson, allCertificationsJson } = useStaticQuery(
        graphql`
            query MyQuery {
                allExperienceJson(sort: {fields: start_date, order: DESC}) {
                    edges {
                        node {
                            id
                            company
                            description
                            end_date
                            is_current
                            location {
                                city
                                state
                            }
                            occupation
                            start_date
                        }
                    }
                }
                allCertificationsJson(sort: {order: DESC, fields: issue_date}) {
                    edges {
                        node {
                            children {
                                id
                            }
                            credential_id
                            credential_url
                            description
                            id
                            title
                            organization
                            issue_date
                        }
                    }
                }
            }
        `
    );

    return (
        <Layout>
            <SEO 
                title="Sobre mim" 
                description="Desenvolvedor JS, fotógrafo, músico e cristão. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main>
                <PS.PostHeader>
                    <h1>Um pouco sobre mim</h1>
                </PS.PostHeader>
                <PS.MainContent>
                    <div>
                        <p>Meu nome é Guilherme Ramos, nasci em Sorocaba/SP e sou desenvolvedor front-end há quase dois anos</p>
                        <p>Comecei minha carreira como desenvolvedor freelancer, trabalhando com empresas de pequeno porte. Nesse tempo, tive contato com diversas áreas, tais como front, back, infra, UX/UI, design, copywriting, enfim, todo tipo de B.O. que aparecia, era eu quem tinha de resolver. Apesar de parecer negativo, eu achei isso maravilhoso, porque pude explorar diversas ferramentas e técnicas que, do contrário, talvez nunca teria contato.</p>
                        <p>Sou uma pessoa bastante inquieta e eclética. Meus hobbies são: fotografia, música (toco violão e teclado), leitura e esportes. Meu gosto músical também é variado: gosto de qualquer coisa, desde que seja rock (é brincadeira <span role="img" aria-label="Emoji com a língua para fora">😝</span> - ou não).</p>
                        <p>Estou o tempo todo aprendendo tecnologias e conceitos novos e tentando entender como posso usá-los para melhorar ainda mais a vida das pessoas. Afinal de contas, tecnologia é sobre isso, não é? Pessoas.</p>
                    </div>

                    <div>
                        <h2>Experiência</h2>
                        
                        {allExperienceJson.edges.map(item => {
                            const experience = item.node;

                            const formattedStartDate = formatDate.formatDate(experience.start_date);
                            const formattedEndDate = formatDate.formatDate(experience.end_date);

                            const timeOfService = formatDate.differenceInWords(experience.start_date, experience.end_date, experience.is_current);

                            const location = `${experience.location.city}, ${experience.location.state}`

                            return (
                                <Experience 
                                    startDate={formattedStartDate}
                                    endDate={formattedEndDate}
                                    isCurrent={experience.is_current}
                                    company={experience.company}
                                    occupation={experience.occupation}
                                    location={location}
                                    timeOfService={timeOfService}
                                    description={experience.description}
                                    key={uuid()}
                                />
                            )
                        })}
                    </div>

                    <div>
                        <h2>Cursos e Especializações</h2>
                        {allCertificationsJson.edges.map(item => {
                            const certification = item.node;

                            const formattedIssueDate = formatDate.formatDate(certification.issue_date);

                            return (
                                <Certification 
                                    title={certification.title}
                                    organization={certification.organization}
                                    issue_date={formattedIssueDate}
                                    credential_id={certification.credential_id}
                                    credential_url={certification.credential_url}
                                    description={certification.description}
                                    key={uuid()}
                                />
                            )
                        })}
                    </div>

                    <div>
                        <h2>Conhecimentos</h2>
                        <p>As tecnologias e conceitos com os quais estou em contato diariamente</p>
                        <ul>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript (ES6)</li>
                            <li>jQuery</li>
                            <li>SCSS/Sass</li>
                            <li>Web Design Responsivo</li>
                            <li>React.JS (hooks)</li>
                            <li>React Native (me aventurando)</li>
                            <li>Styled Components</li>
                            <li>Gatsby.js</li>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Banco de Dados (MongoDB, MySQL, Postgres)</li>
                            <li>Git (Github e Bitbucket)</li>
                            <li>Clean Code</li>
                            <li>O que eu não sei, aprendo rápido <span role="img" aria-label="Emoji de mago">🧙🏻‍♂️</span></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Habilidades</h2>
                        <p>Áreas que, apesar de não ser profissional, estou sempre em contato nos meus projetos pessoais.</p>
                        <ul>
                            <li>Design Gráfico (Photoshop, Illustrator)</li>
                            <li>UX/UI (Figma, Photoshop)</li>
                            <li>Escrita (copywriting)</li>
                            <li>Google Analytics</li>
                            <li>SEO</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Idiomas</h2>
                        <ul>
                            <li>Inglês: Intermediário/Avançado</li>
                        </ul>
                    </div>

                    <div className="aboutContato">
                        <SocialLinks iconSize="42px" iconColor="var(--text)" />
                        <a className="aboutContatoMail" href="mailto:contato@ramosht.com">contato@ramosht.com</a>
                    </div>
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default Sobre