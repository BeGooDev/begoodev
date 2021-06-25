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

                <div className="columns">
                    <div className="column">
                        <button className="button is-large">
                                <span className="icon is-medium">
                                  <i className="fab fa-github"/>
                                </span>
                            <span>Email</span>
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
