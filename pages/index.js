import MainLayout from "../layouts/main";

export default function Home() {
    return (
        <MainLayout>
            <div className="container is-max-desktop p-5">
                <h1 className="is-size-1-desktop has-text-centered">
                    Développeur freelance d'application web et mobiles
                </h1>
            </div>

            <div className="container is-max-desktop p-5">
                <div className="columns is-multiline is-mobile">
                    <div className="column is-4-desktop is-full-mobile">
                        <figure className="image is-square">
                            <img className="has-ratio" width="580" height="580" src="/img/photo-profil.jpg"
                                 alt="Philippe Gibert Développeur Freelance"/>
                        </figure>
                    </div>
                    <div className="column">
                        <p>
                            Je suis développeur web depuis plus de 13 ans, spécialisé dans les applications complexes à
                            fortes charges et application mobiles de qualité.
                        </p>
                        <p className="my-5">
                            Je suis très polyvalent! Je suis capable de maitriser votre projet dans son ensemble,
                            depuis l'analyse de votre besoin, la mise en place de l'architecture application,
                            l'optimisation, les tests, le développement, jusqu'a votre produit. Je porte une grande
                            attention à la
                            qualité du
                            code et au suivi de vos projets.
                        </p>
                        <p className="pt-5">
                            <div className="buttons pt-4 is-centered">
                                <button className="button is-primary">Prendre contact</button>
                            </div>
                        </p>
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
                            <img src="/svg/undraw_Web_developer_re_h7ie.svg"/>
                        </figure>
                        <p>
                            Je prends en charge le développement de votre application web et mobile en veillant
                            concevoir
                            une architecture solide et à la qualité du code.
                        </p>
                    </div>
                    <div className="column is-one-third-desktop is-full-mobile has-text-centered-mobile">
                        <figure className="image is-square">

                            <img src="/svg/undraw_Code_thinking_re_gka2.svg"/>
                        </figure>
                        <p>
                            Votre application est lente? J'analyse votre code et vous conseil sur les bonnes pratiques
                            pour
                            booster vos projets!
                        </p>
                    </div>
                    <div className="column is-one-third-desktop is-full-mobile has-text-centered-mobile">
                        <figure className="image is-square">

                            <img src="/svg/undraw_Mobile_apps_re_3wjf.svg"/>
                        </figure>
                        <p>
                            Besoin d'un conseil pour les choix technologiques de vos projets, sur les outils à mettre en
                            place pour faire du développement de qualité?
                            Je suis là!
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
