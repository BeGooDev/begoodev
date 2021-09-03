import Link from "next/link";
import MainLayout from "../layouts/main";
import {getEmail, getLinkedInUrl, getPhoneNum, getTwitterDirectMessageUrl} from "../config";

export default function ContactPage() {

    return (
        <MainLayout>
            <div className="container is-max-desktop pt-2 pb-é">
                <h1 className="is-size-1-desktop has-text-centered">
                    Me contacter
                </h1>
            </div>
            <div className="container is-max-desktop pt-2 pb-6">
                <p className="is-size-2 has-text-centered">Vous avez de la chance, je suis <span
                    className="has-text-weight-bold">disponible!</span></p>

                <div className="columns is-multiline mt-5 mt-5">
                    <div className="column is-one-third is-offset-one-third">
                        <Link href={"sms:" + getPhoneNum()}>
                            <button className="button is-large phone is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-comment"/>
                                </span>
                                <span>SMS</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-one-third is-offset-one-third">
                        <Link href={"mailto:" + getEmail()}>
                            <button className="mail button is-large email is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-envelope"/>
                                </span>
                                <span>Email</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-one-third is-offset-one-third">
                        <Link href={"tel:" + getPhoneNum()}>
                            <button className="button is-large phone is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-phone"/>
                                </span>
                                <span>Téléphone</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-one-third is-offset-one-third has-text-centered">
                        <Link href={getTwitterDirectMessageUrl()}>
                            <button className="button is-large twitter is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-twitter"/>
                                </span>
                                <span>Tweet moi</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-one-third is-offset-one-third has-text-centered">
                        <Link href={getLinkedInUrl()}>
                            <button className="button is-large linkedIn is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-linkedin"/>
                                </span>
                                <span>LinkedIn</span>
                            </button>
                        </Link>
                    </div>
                    <div className="column is-one-third is-offset-one-third">
                        <Link href="/PhilipeGibert.vcf">
                            <button className="button is-large contact is-fullwidth">
                                <span className="icon is-medium">
                                  <i className="fa fa-smile-o"/>
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
