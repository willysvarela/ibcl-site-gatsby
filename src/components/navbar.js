import React, { useState } from 'react'

export default function Navbar() {

    const [colorful, setColorful] = useState(true);

  

    return (
        <nav className={(!colorful ? 'navbar is-transparent' : 'navbar ')} role="navigation" aria-label="main navigation" style={{ marginBottom: '-3.25rem' }}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /></a>
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
                </div>
            </div>
        </nav>
    )
}
