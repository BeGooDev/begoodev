import Link from "next/link";
import MainLayout from "../layouts/main";

export default function ContactPage() {
    return (
        <MainLayout>
            <div className="container is-max-desktop p-5">
                <h1 className="is-size-1-desktop has-text-centered">
                    Me contacter
                </h1>
            </div>
            <div className="container is-max-desktop p-5">
                <p className="is-size-2 has-text-centered">Vous avez de la chance, je suis <span
                    className="has-text-weight-bold">disponible!</span></p>

                <div className="columns is-multiline mt-5">
                    <div className="column is-half is-offset-one-quarter">
                        <Link href="mailto:philippe.gibert@gmail.com">
                            <button className="button is-large email is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fab fa-whatsapp"/>
                                </span>
                                <span>SMS Moi</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Link href="mailto:philippe.gibert@gmail.com">
                            <button className="button is-large email is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fab fa-github"/>
                                </span>
                                <span>Email Moi</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Link href="mailto:philippe.gibert@gmail.com">
                            <button className="button is-large email is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fab fa-whatsapp"/>
                                </span>
                                <span>Téléphone Moi</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-half is-offset-one-quarter has-text-centered">
                        <Link href="https://twitter.com/giboow">
                            <button className="button is-large twitter">
                                <span className="icon is-medium">
                                  <i className="fab fa-twitter"/>
                                </span>
                                <span>Tweet Moi</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Link href="/PhilipeGibert.vcf">
                            <button className="button is-large twitter is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fab fa-twitter"/>
                                </span>
                                <span>Ajoute Moi</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
