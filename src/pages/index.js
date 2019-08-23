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
        <Columns>
          <Columns.Column>
            <a className="box_divlink">
              <Box paddingless>
                <Container>
                  <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                  <div className="box_body">
                    <span className="box_title">Serviços</span>
                    <span className="box_bar"></span>
                    <span className="box_description">The best place to start connecting with God at Good News is in our Services.</span> 
                  </div>
                </Container>
              </Box>
            </a>
          </Columns.Column>
          <Columns.Column>
            <a className="box_divlink">
              <Box paddingless>
                <Container>
                  <img className="box_img" src="http://m23v9ttw6p-flywheel.netdna-ssl.com/wp-content/themes/goodnews-v1/images/gallery/worship/worship-15-800x425.jpg" />
                  <div className="box_body">
                    <span className="box_title">Serviços</span>
                    <span className="box_bar"></span>
                    <span className="box_description is-small ">The best place to start connecting with God at Good News is in our Services.</span> 
                  </div>
                </Container>
              </Box>
            </a>
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
                  </div>
                </Container>
              </Box>
            </a>
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
                  </div>
                </Container>
              </Box>
            </a>
          </Columns.Column>
        </Columns>
      </Container>
      <Container>

      </Container>
      <Container className="is-fullhd" style={{ height: '500px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=" width={window.innerWidth} height={500} frameborder="0" allowfullscreen></iframe>
      </Container>
    </Layout>
  )
}
export default IndexPage
