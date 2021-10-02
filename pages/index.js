import MainLayout from "../layouts/main";
import Link from "next/link";
import Head from "next/head";
import Hero from '../components/Hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>BeGooDev, Développeur d'applications web et mobiles sur Rennes</title>
            </Head>
            <MainLayout>
                <Hero></Hero>

                <div className="container is-max-desktop has-text-centered">


                    <h1 className="is-size-1">
                        Développeur freelance
                    </h1>
                    <div className="subtitle">
                        Réalisation de vos applications web et mobiles sur le bassin Rennais
                    </div>
                </div>

                <div className="container is-max-desktop">
                    <hr />
                </div>

                <div className="container is-max-desktop p-5">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-4-desktop is-full-mobile">
                            <figure className="image">
                                <img className="has-ratio is-rounded" width="580" height="580" src="/img/photo-profil.jpg"
                                     alt="Philippe Gibert Développeur Freelance"/>
                            </figure>
                        </div>
                        <div className="column">
                            <p>
                                Je suis développeur web depuis plus de 13 ans, spécialisé dans les applications complexes à
                                fortes charges et applications mobiles de qualité.
                            </p>
                            <p className="my-5">
                                Je suis très polyvalent! Je suis capable de maitriser votre projet dans son ensemble :
                                depuis l'analyse de votre besoin, la mise en place de l'architecture applicative,
                                l'optimisation, les tests, le développement, etc... Je porte une grande
                                attention à la
                                qualité du
                                code et au suivi de vos projets.
                            </p>
                            <div className="pt-5">
                                <div className="buttons pt-4 is-centered">
                                    <Link href="/contact">
                                        <button className="button is-primary">Prendre contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container is-max-desktop p-5">
                    <h2 className="is-size-2 has-text-centered">
                        Mes compétences
                    </h2>
                    <div className="columns is-mobile is-multiline">
                        <div className="column is-one-third-desktop is-full-mobile has-text-centered-mobile">
                            <figure className="image is-square">
                                <img src="/svg/undraw_Web_developer_re_h7ie.svg" alt="Mes compétences"/>
                            </figure>
                            <p className="px-2">
                                Je prends en charge le développement de votre application web et mobile en veillant
                                concevoir
                                une architecture solide et à la qualité du code.
                            </p>
                        </div>
                        <div className="column is-one-third-desktop is-full-mobile has-text-centered-mobile">
                            <figure className="image is-square">

                                <img src="/svg/undraw_Code_thinking_re_gka2.svg" alt="boostez vos projets" />
                            </figure>
                            <p className="px-2">
                                Votre application est lente?
                                J'analyse votre code et vous conseille sur les bonnes pratiques pour booster vos projets!
                            </p>
                        </div>
                        <div className="column is-one-third-desktop is-full-mobile has-text-centered-mobile">
                            <figure className="image is-square">

                                <img src="/svg/undraw_Mobile_apps_re_3wjf.svg" alt="Besoin d'un conseil?"/>
                            </figure>
                            <p className="px-2">
                                Besoin d'un conseil pour les choix technologiques de vos projets, sur les outils à mettre en
                                place pour faire du développement de qualité?
                                Je suis là!
                            </p>
                        </div>
                    </div>
                    <div className="buttons is-centered">
                        <Link href="/development"><a><button className="button">Découvrez ma stack!</button></a></Link>
                    </div>
                </div>
            </MainLayout>
        </>

    )
}
