import React from 'react'
import * as PS from '../../components/Post/styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Curso from '../../components/Curso'
import ProfessionalExperience from '../../components/ProfessionalExperience'
import SocialLinks from '../../components/SocialLinks'

const Sobre = () => {
    return (
        <Layout>
            <SEO 
                title="Sobre mim" 
                description="Desenvolvedor JS, fotógrafo, músico e cristão. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main>
                <PS.PostHeader>
                    <PS.PostTitle>Um pouco sobre mim</PS.PostTitle>
                </PS.PostHeader>
                <PS.MainContent>
                    <div>
                        <p>Meu nome é Guilherme Ramos, nasci em Sorocaba/SP e sou desenvolvedor front-end há quase dois anos</p>
                        <p>Comecei minha carreira como desenvolvedor freelancer, trabalhando com empresas de pequeno porte. Nesse tempo, tive contato com diversas áreas, tais como front, back, infra, UX/UI, design, copywriting, enfim, todo tipo de B.O. que aparecia, era eu quem tinha de resolver. Apesar de parecer negativo, eu achei isso maravilhoso, porque pude explorar diversas ferramentas e técnicas que, do contrário, talvez nunca teria contato.</p>
                        <p>Sou uma pessoa bastante inquieta e eclética. Meus hobbies são: fotografia, música, leitura e esportes. Meu gosto músical também é variado: gosto de qualquer coisa, desde que seja rock (é brincadeira <span role="img" aria-label="Emoji com a língua para fora">😝</span> - ou não).</p>
                        <p>Estou o tempo todo aprendendo tecnologias e conceitos novos e tentando entender como posso usá-los para melhorar ainda mais a vida das pessoas. Afinal de contas, tecnologia é sobre isso, não é? Pessoas.</p>
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
                            atuacao="Desenvolvedor III"
                            instituicao="Cadmus Soluções em TI"
                            periodo="mai de 2020 - atualmente"
                        />
                        <ProfessionalExperience 
                            atuacao="Desenvolvedor de front-end"
                            instituicao="DOK Despachante"
                            descricao="Front-end das diversas áreas que compõem o ecossistema da empresa: sistema de checkout, sistema interno, landing pages, etc."
                            periodo="jul de 2019 - mai de 2020 (11 meses)"
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

                    <div>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>HTML5/CSS3</li>
                            <li>SASS</li>
                            <li>Bootstrap</li>
                            <li>Web Design Responsivo</li>
                            <li>UX/UI</li>
                            <li>JavaScript (ES6)</li>
                            <li>jQuery</li>
                            <li>Vue.js (Vuex)</li>
                            <li>React.js (Redux)</li>
                            <li>Gatsby.js</li>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>Git (Github e Bitbucket)</li>
                            <li>MySQL</li>
                            <li>O que eu não sei, aprendo rápido <span role="img" aria-label="Emoji de mago">🧙🏻‍♂️</span></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Conhecimentos</h2>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Google Analytics</li>
                            <li>SEO</li>
                        </ul>
                    </div>

                    <div className="aboutContato">
                        <SocialLinks iconSize="42px" iconColor="var(--text)" />
                    </div>
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default Sobre