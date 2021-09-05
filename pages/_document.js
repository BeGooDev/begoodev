import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="fr" className="has-navbar-fixed-top">
                <Head>
                    <meta name="title" content="BeGooDev, Développeur freelance d'application web et mobiles sur le bassin Rennais."/>
                    <meta name="description" content="Expert en développement FullStack, d'application à forte charge, je prend en charge vos projets."/>
                    <meta name="keywords" content="développement,applications,rennes,java,springboot,android,angular,reactJS,js,javascript,php"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-S2D0WL7FN3"></script>
                    <script dangerouslySetInnerHTML={{__html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-S2D0WL7FN3');
                        `}} />

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
