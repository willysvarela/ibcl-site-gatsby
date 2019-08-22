import React from "react"
import { Link } from "gatsby"
import { Hero, Container, Heading, Box, Columns } from 'react-bulma-components'
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
            <Heading subtitle size={4} style={{ maxWidth: '60%', margin: 'auto' }}>
              Uma igreja onde todos podem ser transformados pelo amor de Jesus Cristo
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer className="has-text-centered">
          <div className="bd-notification is-danger">V</div>
        </Hero.Footer>
      </Hero>
      <Container>
        <h1>test</h1>
        <Columns>
          <Columns.Column>
            <Box paddingless>
              <Container>
                <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                <div className="box_body">
                  <span className="box_title">Serviços</span>
                  <span className="box_bar"></span>
                  <span className="box_description">The best place to start connecting with God at Good News is in our Services.</span>
                  <a className="box_link">Horários -></a>
                </div>
              </Container>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box paddingless>
              <Container>
                <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                <div className="box_body">
                  <span className="box_title">Serviços</span>
                  <span className="box_bar"></span>
                  <span className="box_description is-small ">The best place to start connecting with God at Good News is in our Services.</span>
                  <a className="box_link">Horários -></a>
                </div>
              </Container>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <a className="box_divlink">
              <Box paddingless>
                <Container>
                  <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                  <div className="box_body">
                    <span className="box_title">Serviços</span>
                    <span className="box_bar"></span>
                    <span className="box_description">The best place to start connecting with God at Good News is in our Services.</span>
                    <a className="box_link">Horários -></a>
                  </div>
                </Container>
              </Box>
            </a>
          </Columns.Column>
          <Columns.Column>
            <Box paddingless>
              <Container>
                <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                <div className="box_body">
                  <span className="box_title">Serviços</span>
                  <span className="box_bar"></span>
                  <span className="box_description">The best place to start connecting with God at Good News is in our Services.</span>
                  <a className="box_link">Horários -></a>
                </div>
              </Container>
            </Box>
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  )
}
export default IndexPage
