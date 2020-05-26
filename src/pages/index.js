import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/Card"
import EventBlock from "../components/EventBlock"
import EventsList from "../components/EventsList"

import SEO from "../components/seo"
import "./styles.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-fullheight is-info">
        <div className="hero-head" renderAs="header">
          <div className="bd-notification is-info"></div>
        </div>
        <div className="hero-body has-text-centered">
          <div className="container align-center">
            <h1 className="title">Muito Mais que Amigos</h1>
            <h2 className="subtitle ">
              Uma igreja onde todos podem ser transformados pelo amor de Jesus
              Cristo
            </h2>
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <div className="bd-notification is-danger">V</div>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Card
              to="/sobre"
              title="Serviços"
              description="Teste de Descrição"
            />
          </div>
          <div className="column">
            <Card
              to="/servicos"
              title="Serviços"
              description="Teste de Descrição"
            />
          </div>
          <div className="column">
            <Card
              to="/departamentos"
              title="Serviços"
              description="Teste de Descrição"
            />
          </div>
          <div className="column">
            <Card
              to="/contato"
              title="Serviços"
              description="Teste de Descrição"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="title">Eventos</h1>
          <div className="columns">
            <div className="column">
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </div>
            <div className="column">
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </div>
            <div className="column">
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </div>
            <div className="column">
              <EventsList />
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fullwidth" style={{ height: "500px" }}>
        <div className="map-background">
          <div></div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
