import React from "react"
import { Link } from "gatsby"
import bulmaCarousel from 'bulma-carousel/';
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section class="carousel hero is-medium has-carousel">
        <div id="carousel-demo" class="hero-carousel">
          <div class="item-1" style={{ backgroundColor: '#000' }}>
          </div>
          <div class="item-2" style={{ backgroundColor: '#333' }}>
          </div>
          <div class="item-3" style={{ backgroundColor: '#222' }}>
          </div>
        </div>
        <div class="hero-head"></div>
        <div class="hero-body"></div>
        <div class="hero-foot"></div>
      </section>
    </Layout>
  )
}

export default IndexPage
