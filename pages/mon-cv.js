import Head from "next/head";
import MainLayout from "../layouts/main";
import Link from "next/link";

export default function stackPage() {

    const propsLayout = {
        header: {
            nav: {active: 'development'}
        }
    }

    return (
        <>
            <Head>
                <title>BeGooDev - Mes compétences en développement</title>
                <meta name="keywords" content="php,java,angular,javascript"/>
            </Head>
            <MainLayout {...propsLayout}>
                <div className="container is-max-desktop has-text-centered">
                    <h1 className="is-size-1-desktop">Développement d'application</h1>
                    <div className="subtitle">Les compétences que j'ai à vous offrir</div>
                </div>
                <div className="container is-fullwidth">
                    <hr/>
                </div>
                <div className="container is-max-desktop">
                    <div className="content">
                        <section className="section">
                            <p>
                                Développeur depuis 2009, j'ai travaillé dans des environnements variés,
                                le plus souvent dans des équipes de petite taille, où il a toujours fallu s'adapter
                                en fonction des besoins, développer de nouvelles compétences et apprendre de nouvelles
                                choses.
                            </p>
                            <p>
                                Mon profil polyvalent et mes capacités d'adaptation me permettent de m'acclimater
                                l'environnement de travail de votre équipe.
                                De plus je suis un excellent intermediaire technique pour faciliter les echanges entre
                                les
                                différentes spécialitées que composent votre entreprise.
                            </p>
                            <div className="columns">
                                <div
                                    className="column is-4 is-offset-one-third is-full-mobile has-text-centered-mobile">
                                    <figure className="image is-square">
                                        <img src="/svg/undraw_Developer_activity_re_39tg.svg" alt="Mes compétences"/>
                                    </figure>
                                </div>
                            </div>
                        </section>

                        <section className="section">
                            <h3 className="is-size-3">
                                Voici les technologies que je maitrise :
                            </h3>
                            <div className="columns is-multiline">
                                <div className="column is-center">
                                    <h4 className="title is-size-4">
                                        Backend
                                    </h4>
                                    <hr/>
                                    <ul>
                                        <li>Java
                                            <ul>
                                                <li>SpringBoot</li>
                                                <li>Tests
                                                    <ul>
                                                        <li>JUnit</li>
                                                        <li>Mockito</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>PHP
                                            <ul>
                                                <li>Laravel</li>
                                                <li>Tests
                                                    <ul>
                                                        <li>PHPUnit</li>
                                                        <li>Atoum</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Base de données / Moteur de recherche
                                            <ul>
                                                <li>PostgreSQL</li>
                                                <li>MySQL/MariaDB</li>
                                                <li>ElasticSearch</li>
                                                <li>MongoDB</li>
                                                <li>Redis</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Serveur
                                            <ul>
                                                <li>Apache</li>
                                                <li>Nginx</li>
                                                <li>RabbitMQ</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="column is-one-third-desktop">
                                    <h4 className="title is-size-4">
                                        Front-end
                                    </h4>
                                    <hr/>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS
                                            <ul>
                                                <li>Bulma</li>
                                                <li>Bootstrap</li>
                                                <li>Materialize</li>
                                            </ul>
                                        </li>
                                        <li>Javascript
                                            <ul>
                                                <li>Angular</li>
                                                <li>ReactJS</li>
                                                <li>JQuery</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h4 className="title is-size-4">
                                        Méthodes de travail
                                    </h4>
                                    <hr/>
                                    <ul>
                                        <li>Git</li>
                                        <li>Agile
                                            <ul>
                                                <li>Scrum</li>
                                            </ul>
                                        </li>
                                        <li>Qualité logiciel
                                            <ul>
                                                <li>CI</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <p>
                                J'aime apprendre de nouvelles choses, en fonction de vos besoins mais aussi de mes
                                envies!
                                Savoir s'adapter à de nouveaux langages, de nouveaux framework ou de nouveaux outils
                                fait
                                partie de ma philosophie.
                                Je n'hésiterai donc pas à enrichir cette liste.
                            </p>
                            <div className="buttons is-centered">
                            <Link href="/contact">
                                <a title="Contactez-moi">
                                    <button className="button is-primary">
                                        Alors contactez-moi!
                                    </button>
                                </a>
                            </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
