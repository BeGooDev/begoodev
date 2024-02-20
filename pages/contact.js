import Link from "next/link";
import MainLayout from "../layouts/main";
import { getEmail, getLinkedInUrl, getPhoneNum, getTwitterDirectMessageUrl, getMaltUrl, getTwitterUrl, getTwitterUser, getEmailWithSpaces } from "../config";
import Head from "next/head";

export default function ContactPage() {

    const propsLayout = {
        header: {
            nav: { active: 'contact' }
        }
    }

    return (
        <>
            <Head>
                <title>BeGooDev -Contactez moi</title>
            </Head>
            <MainLayout {...propsLayout}>
                <div className="container is-max-desktop">
                    <h1 className="is-size-1-desktop has-text-centered">
                        Me contacter
                    </h1>
                </div>
                <div className="container is-max-desktop">
                    <h2 className="subtitle has-text-centered">Vous avez de la chance, je suis <span
                        className="has-text-weight-bold">disponible!</span></h2>
                </div>
                <div className="container is-max-desktop">
                    <hr />
                </div>
                <div className="container is-max-desktop">
                    <div className="columns is-multiline">
                        <div className="column is-one-third is-offset-one-third">
                            <Link href={`sms:${getPhoneNum()}`} title="Envoyez moi un message!">
                                <div
                                    className="phone button is-large phone is-fullwidth is-flex-direction-column p-5">
                                    <div>
                                        <span className="icon is-medium"><i className="fa fa-comment" /></span>
                                        <span>SMS</span>
                                    </div>
                                    <div className="has-text-weight-light is-size-6">
                                        {getPhoneNum()}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column is-one-third is-offset-one-third">
                            <Link href={`mailto:${getEmail()}`} title="Envoyez moi un email!">
                                <div
                                    className="button is-large mail is-fullwidth is-flex-direction-column p-5">
                                    <div>
                                        <span className="icon is-medium"><i className="fa fa-envelope" /></span>
                                        <span>Email</span>
                                    </div>
                                    <div className="has-text-weight-light is-size-6">
                                        {getEmailWithSpaces()}
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="column is-one-third is-offset-one-third">
                            <Link href={`tel:${getPhoneNum()}`} title="Appelez moi!" >
                                <div
                                    className="phone button is-large is-fullwidth is-flex-direction-column p-5">
                                    <div>
                                        <span className="icon is-medium"><i className="fa fa-phone" /></span>
                                        <span>Téléphone</span>
                                    </div>
                                    <div className="has-text-weight-light is-size-6">
                                        {getPhoneNum()}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column is-one-third is-offset-one-third">
                            <Link href={`${getTwitterDirectMessageUrl()}`} title="Envoyez moi un message sur Twitter!" target="_blank">
                                <div
                                    className="twitter button is-large is-fullwidth is-flex-direction-column p-5">
                                    <div>
                                        <span className="icon is-medium"><i className="fa fa-twitter" /></span>
                                        <span>Twitter</span>
                                    </div>
                                    <div className="has-text-weight-light is-size-6">
                                        {getTwitterUser()}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column is-one-third is-offset-one-third has-text-centered">
                            <Link href={`${getLinkedInUrl()}`} title="Connectons nous sur LinkedIn!" target="_blank">
                                <button className="button is-large linkedIn is-fullwidth">
                                    <span className="icon is-medium">
                                        <i className="fa fa-linkedin" />
                                    </span>
                                    <span>LinkedIn</span>
                                </button>
                            </Link>
                        </div>
                        <div className="column is-one-third is-offset-one-third has-text-centered">
                            <Link href={`${getMaltUrl()}`} title="Une mission a me proposer" target="_blank">
                                <button className="button is-large malt is-fullwidth">
                                    <span className="icon is-medium">
                                        <i className="fa fa-8x fa-malt" />
                                    </span>
                                    <span>Malt</span>
                                </button>
                            </Link>
                        </div>

                        {/*<div className="column is-one-third is-offset-one-third">*/}
                        {/*    <Link href="/PhilipeGibert.vcf">*/}
                        {/*        <button className="button is-large contact is-fullwidth">*/}
                        {/*            <span className="icon is-medium">*/}
                        {/*              <i className="fa fa-smile-o"/>*/}
                        {/*            </span>*/}
                        {/*            <span>Ajoute Moi</span>*/}
                        {/*        </button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
