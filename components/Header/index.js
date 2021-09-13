import Link from 'next/link';
import classNames from "classnames";

import {Component} from 'react';


class Header extends Component{
    static defaultProps = {
        nav : {
            active : ''
        }
    }
    
    state = {
        activeToggleNav: false
    }

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this)
    }


    /**
     * Toggle menu
     */
    toggleMenu() {
        this.setState(prevState => ({
                activeToggleNav: !prevState.activeToggleNav
        }))
    }

    render() {
        const {activeToggleNav} = this.state;
        console.log(this.props);

        return (
            <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        Philippe Gibert - BeGooDev
                    </a>

                    <a role="button" className={classNames('navbar-burger', {'is-active': activeToggleNav})}
                       aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample" onClick={this.toggleMenu}>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div id="navbarMain" className={classNames('navbar-menu', {'is-active': activeToggleNav})}>
                    <div className="navbar-start">

                    </div>

                    <div className="navbar-end">
                        <Link href="/developpement">
                            <a className={classNames("navbar-item", {"is-active" : this.props.nav?.active === 'development'  })}>
                                Développement
                            </a>
                        </Link>

                        <Link href="/contact">
                            <a className={classNames("navbar-item", {"is-active" : this.props.nav.active === 'contact'})}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}




export default Header
