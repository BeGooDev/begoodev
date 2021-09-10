import Head from "next/head";
import Link from "next/link";
import MainLayout from "../layouts/main";


export default function page404() {
    return (
        <>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <MainLayout>

                <section className="section">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered">
                                <h1 className="title">404 Page Not Found</h1>
                                <p className="subtitle">Vous vous trouvez au mauvais endroit!</p>
                                <div className="buttons is-centered">

                                    <Link href="/">
                                        <button className="button is-primary">Home</button>
                                    </Link>
                                    <Link href="/">
                                        <button className="button is-secondary">Contact</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="column has-text-centered">
                                <img src="/img/404.jpg"/>
                            </div>
                        </div>
                    </div>
                </section>

            </MainLayout>
        </>);
}
