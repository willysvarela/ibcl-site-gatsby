import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
export default function Navbar() {

    const [colorful, setColorful] = useState(true);



    return (
        <nav className={(!colorful ? 'navbar is-transparent' : 'navbar ')} role="navigation" aria-label="main navigation" style={{ marginBottom: '-3.25rem' }}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io"><img src={logo} /></a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Início
                    </a>
                    <a className="navbar-item" href="/">
                        Sobre
                    </a>
                    <a className="navbar-item" href="/">
                        Conexão
                    </a>
                    <a className="navbar-item" href="/">
                        Mensagens
                    </a>
                    <a className="navbar-item" href="/">
                        Testemunhos
                    </a>
                </div>
            </div>
        </nav>
    )
}
