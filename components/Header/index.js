import Link from 'next/link';

export default function Header() {
    return (
        <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Philippe Gibert - BeGooDev
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbarMain" className="navbar-menu">
                <div className="navbar-start">

                </div>

                <div className="navbar-end">


                    <Link href="contact">
                        <a className="navbar-item">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
