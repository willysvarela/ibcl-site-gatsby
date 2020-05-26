import React, { useState } from "react"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [colorful, setColorful] = useState(true)
  const [open, setOpen] = useState(false)
  return (
    <nav
      className={!colorful ? "navbar is-transparent" : "navbar"}
      role="navigation"
      aria-label="main navigation"
      style={{ marginBottom: open ? "0" : "-3.25rem" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo} />
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${open ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" className={`navbar-menu ${open ? "is-active" : ""}`}>
        <div className="navbar-start">
          <a className="navbar-item">Início</a>
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
