import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

export default function Experience() {

    return (
        <>
            <h2>Expériences professionnelles</h2>
            <Tabs defaultActiveKey="2021-2023"
                  className="mb-3"
            >
                <Tab title="2021-2023" eventKey="2021-2023">
                    <h3>Développeur chez Nakama</h3>
                    <h4>Intégrateur Web - Énergie Demain - avril/ mai 2023.</h4>
                    <p>Réalisation d'une nouvelle application permettant aux utilisateurs de suivre
                        les travaux de rénovations de leur bâtiment.
                        Création de composants réutilisables et modulables en Angular, basés sur des
                        maquettes Figma.
                        Angular 15. GitLab. StorybookJS.</p>
                    <h4>Business analyst/ scrum master/ testeur - novembre 2022 - mars
                        2023</h4>
                    <p>Chargé de la migration d'anciens écrans en AngularJS/ Play Framework en
                        Angular 9 </p>
                    <ul>
                        <li>Respect du métier.</li>
                        <li>Intégration normes graphiques Energy Pool</li>
                        <li>Test unitaires (Jasmine)</li>
                        <li>Réecriture de controller Java en Kotlin</li>
                    </ul>
                    <h4>Développeur Angular - novembre 2021 - août 2022</h4>
                    <p>Chargé de la migration d'anciens écrans en AngularJS/ Play Framework en
                        Angular 9 </p>
                    <ul>
                        <li>Respect du métier.</li>
                        <li>Intégration normes graphiques Energy Pool</li>
                        <li>Test unitaires (Jasmine)</li>
                        <li>Réecriture de controller Java en Kotlin</li>
                    </ul>
                </Tab>
                <Tab title="2020-2021" eventKey="2020-2021">
                    <h2>Alternant développeur full-stack Java/ Angular chez Energy Pool
                        - Lyon</h2>
                    <p>Novembre 2020 - Août 2021</p>
                    <p>Chargé de la migration d'anciens écrans en AngularJS/ Play Framework en
                        Angular 9 </p>
                    <ul>
                        <li>Intégration des normes graphiques Energy Pool</li>
                        <li>Test unitaires</li>
                        <li>Réecriture de controller Java en Kotlin</li>
                    </ul>
                </Tab>
                <Tab title="2019" eventKey="2019">
                    <h3>Ingénieur Etudes et Développement à Adaming Conseil -
                        Lyon.</h3>
                    <p>Avril 2019 - septembre 2019</p>
                    <p>Prestataire externe Adaming Conseil pour Sopra Steria.
                        Département monétique pour le compte du Crédit Agricole</p>
                    <ul>
                        <li>Développement COBOL/ Pacbase.</li>
                        <li>Manipulation de base de données DB2 avec SQL et d'écrans CICS.
                        </li>
                        <li>Intégration de programmes.</li>
                        <li>Débuggage et gestion du bon fonctionnement des programmes.</li>
                        <li>Relation direct avec le client</li>
                    </ul>
                </Tab>
                <Tab title="2018" eventKey="2018">
                    <p>Mars - Septembre</p>
                    <p>Rédacteur web à Bodas.net - Barcelone - Espagne.</p>
                    <ul>
                        <li>Gestion des contenus visuels et textuels du site.</li>
                        <li>Rédaction d'articles publicitaires destinés à promouvoir les
                            entreprises des clients, optimisés pour Google Panda (SEO).
                        </li>
                        <li>Veiller à ce que les entreprises présentées respectent des
                            critères de qualité élevés : retouches d'images (Gimp) et de
                            textes.
                        </li>
                        <li>Renforcement de l'espagnol.</li>
                    </ul>
                </Tab>
            </Tabs>
            <h2>Education</h2>
            <Tabs>
                <Tab title="2021" eventKey="2021"><p>Alternance à School By Hi!t,
                    Lyon.</p>
                    <p>Douze semaines de cours centrées sur Java et Angular. Réalisation de TP hebdomadaires.
                        Projet fil rouge final en deux semaines intensives :
                        création d'une plate-forme pour les promotions suivantes en Java en back et Angular en front.
                    </p>
                    <h4>Technologies:</h4>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Front-end</th>
                            <th>Back-end</th>
                            <th>Base de données</th>
                            <th>Outils</th>
                            <th>Cloud</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Angular</td>
                            <td>Java</td>
                            <td>MySql</td>
                            <td>Docker</td>
                            <td>Amazon Web Service</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Spring</td>
                            <td>Hibernate</td>
                            <td>Kubernetes</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>ElasticSearch</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab title="2020" eventKey="2020"><p>Bootcamp Javascript Full stack à La Caspule,
                    Lyon.</p>
                    <p>Bootcamp de onze semaines React/ React Native/ NodeJS/ MongoDB. Réalisation de projets
                        hebdomadaires et d'un projet final en intensif.</p>
                    <h4>Technologies:</h4>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Front-end</th>
                            <th>Back-end</th>
                            <th>Design</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>HTML</td>
                            <td>Node.JS</td>
                            <td>Bootstrap</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>Express</td>
                            <td>Ant Design</td>
                        </tr>
                        <tr>
                            <td>Javascript</td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>React Native et Expo</td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab title="2019" eventKey="2019"><p>Formation ingénieur Etudes et Développement Mainframe
                    - Adaming Conseil, Lyon.</p>
                    <p> Durant onze semaines, j'ai suivi la formation délivrée par Adaming Conseil. Nous avons
                        autant
                        travaillé sur la pratique que sur la théorie du développement informatique.
                        Durant cette formation, j'ai pu apprendre le développement en COBOL, la création et la
                        manipulation
                        d'écrans
                        CICS et l'utilisation de base de données SQL. Les journées alliaient cours le matin et
                        exercices
                        pratiques
                        l'après midi.
                    </p>
                </Tab>
                <Tab title="2017" eventKey="2017"><p>Master 2 Relations Internationales spécialité
                    Francophonie et Développement Durable - Lyon 3.</p>
                    <p> Mention assez bien. Mémoire sur les thèmes de l'agriculture biologique, du commerce équitable,
                        des énergies renouvelables et de l'économie circulaire, leurs applications et leurs potentiels.
                    </p></Tab>
            </Tabs>
        </>
    )
}
