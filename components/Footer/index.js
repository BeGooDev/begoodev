import Link from 'next/link';
import {getEmail, getGithubUrl, getPseudo, getTwitterUrl} from "../../config";


export default function Footer() {

    return (<footer className="footer">
        <div className="content has-text-centered">

            <div className="is-centered mb-5">
                <Link href={`mailto:` + getEmail()}>
                    <a target="_blank" className="mail fa-stack fa-2x mr-3 is-clickable" title="Envoyer moi un email">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-envelope fa-stack-1x fa-inverse"/>
                    </a>
                </Link>
                <Link href={getTwitterUrl()}>
                    <a target="_blank" className="twitter fa-stack fa-2x mr-3" title="Voir mon profil LinkedIn">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-twitter fa-stack-1x fa-inverse"/>
                    </a>
                </Link>
                <Link href={getGithubUrl()}>
                    <a target="_blank" className="github fa-stack fa-2x mr-3" title="Parcourir mes repos Github">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-github fa-stack-1x fa-inverse"/>
                    </a>
                </Link>
            </div>
            <p>
                Made with ❤️ By <Link href={getTwitterUrl()}><a target="-_blank">{getPseudo()}</a></Link>
            </p>
        </div>
    </footer>)
}
