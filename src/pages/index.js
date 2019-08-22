import React from "react"
import { Link } from "gatsby"
import { Hero, Container, Heading } from 'react-bulma-components'
import Layout from "../components/layout" 
import SEO from "../components/seo"
import './styles.scss'

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
            <Heading title size={1}>Muito Mais que Amigos</Heading>
            <Heading subtitle size={4} style={{maxWidth: '60%', margin: 'auto'}}>
              Uma igreja onde todos podem ser transformados pelo amor de Jesus Cristo
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer>
          <div className="bd-notification is-danger">V</div>
        </Hero.Footer>
      </Hero>
    </Layout>
  )
}
export default IndexPage
