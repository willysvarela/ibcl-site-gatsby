import React from "react"
import { Link } from "gatsby"
import { Hero, Container, Heading, Box, Columns } from "react-bulma-components"
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
      <Hero size="fullheight" color="primary">
        <Hero.Head renderAs="header">
          <div className="bd-notification is-info"></div>
        </Hero.Head>
        <Hero.Body>
          <Container className="align-center has-text-centered">
            <Heading title size={1}>
              Muito Mais que Amigos
            </Heading>
            <Heading
              subtitle
              size={4}
              style={{ maxWidth: "60%", margin: "auto" }}
            >
              Uma igreja onde todos podem ser transformados pelo amor de Jesus
              Cristo
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer className="has-text-centered">
          <div className="bd-notification is-danger">V</div>
        </Hero.Footer>
      </Hero>
      <Container>
        <Columns>
          <Columns.Column>
            <Card
              to="/sobre"
              title="Serviços"
              description="Teste de Descrição"
            />
          </Columns.Column>
          <Columns.Column>
            <Card
              to="/servicos"
              title="Serviços"
              description="Teste de Descrição"
            />
          </Columns.Column>
          <Columns.Column>
            <Card
              to="/departamentos"
              title="Serviços"
              description="Teste de Descrição"
            />
          </Columns.Column>
          <Columns.Column>
            <Card
              to="/contato"
              title="Serviços"
              description="Teste de Descrição"
            />
          </Columns.Column>
        </Columns>
      </Container>
      <Container>
        <div>
          <Heading title size={1}>
            Eventos
          </Heading>
          <Columns>
            <Columns.Column>
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </Columns.Column>
            <Columns.Column>
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </Columns.Column>
            <Columns.Column>
              <EventBlock
                title="Noite Havaiana"
                description="Uma noite especial em que os casais daIBCL poderão ouvir sobre Comunicação no Casamento."
                date="28 de Fevereiro de 2020"
              />
            </Columns.Column>
            <Columns.Column>
              <EventsList />
            </Columns.Column>
          </Columns>
        </div>
      </Container>
      <Container className="is-fullhd" style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb="
          width={window.innerWidth}
          height={500}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Container>
    </Layout>
  )
}
export default IndexPage
