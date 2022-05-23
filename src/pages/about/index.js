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
                    <h1>About me</h1>
                </PS.PostHeader>
                <PS.MainContent>
                    <div>
                        <p>My name is Guilherme and I'm a Brazilian Frontend Engineer.</p>
                        <p>I started my career as a freelancer web designer, working for small companies. In this meantime, I had contact with many areas, like frontend, backend, UX/UI, graphic design, copywriting, etc. I had to deal with everything that required some attention during the development of the websites and, despite of seems like something negative, it was wonderful, because I could explore many areas, tools and techniques which, otherwise, I would hardly have contact. </p>
                        <p>I'm a creative, restless and curious person. My hobbies are photography, music, sports and languages. Also, my musical taste are also very ecletic: my playlists might include Metallica, Taylor Swift or Michael Jackson (not in this specific order).</p>
                        <p>I'm always learning new technologies and concepts and trying to learn how I can use them to improve other people's life. Because, after all, technology is about that, right? People.</p>
                    </div>

                    <div>
                        <h2>Experience</h2>
                        
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
                        <h2>Knowledges</h2>
                        <p>The technologies and concepts which I have contact daily</p>
                        <ul>
                            <li>Semantic HTML</li>
                            <li>Advanced CSS</li>
                            <li>CSS Preprocessors (Sass/SCSS)</li>
                            <li>JavaScript (ES6)</li>
                            <li>React.js (hooks)</li>
                            <li>React Native</li>
                            <li>Context API</li>
                            <li>Next.js</li>
                            <li>Gatsby.js</li>
                            <li>Node.js</li>
                            <li>Database (MongoDB, MySQL, Postgres)</li>
                            <li>Git (Github e Bitbucket)</li>
                            <li>What I still don't know, I can learn quickly <span role="img" aria-label="Emoji de mago">🧙🏻‍♂️</span></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Soft skills</h2>
                        <p>Knowledges or techniques that are not technologies, but I also have contact daily</p>
                        <ul>
                            <li>Creative</li>
                            <li>Clean Code</li>
                            <li>Responsive Web Design</li>
                            <li>Scrum Methodology</li>
                            <li>UX/UI (Figma, Photoshop)</li>
                            <li>Copywriting</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Idioms</h2>
                        <ul>
                            <li>Portuguese (Native Speaker)</li>
                            <li>English (C1)</li>
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