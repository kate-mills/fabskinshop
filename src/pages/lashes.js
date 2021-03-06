import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Banner, ServiceItems, FluidImage } from "../components/Complete"

const HairRemoval = (props) => {
  const {data:{lash}} = props
  return(
  <Layout>
    <SEO title={`Lash Extensions in Napa, CA | ${props.data.site.siteMetadata.title} `} image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about our lash extension procedures performed by clinical Estheticians. We serve Napa, CA and surrounding areas."/>
    <PageWrapper>

      <Banner title="Lash Extensions"><FluidImage fluid={props.data.seoImg.childImageSharp.fluid} maxWidth="1000px"/></Banner>
      <section className="menu-box">
        <ServiceItems category="Lashes" items={lash} warning="*Eyelash extensions are synthetic or natural fiber extensions that are individually adhered with a permanent medical-grade adhesive to your own natural lashes, to lengthen, thicken and volumize your look without appearing false or fake. Lash extensions usually last up to 3 weeks. They’re great for a special event or for long-term wear for those who’d prefer not to curl and coat their lashes with mascara on a daily basis. Biweekly touch-ups are recommended."  warningWidth="750px"/>
      </section>
    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    lash: allAirtable(filter: {data: {category: {eq: "eyelash-extensions"}}}, sort: {fields: data___name}) {
      nodes {
        data {
          name
          description
          price
          category
          time
          hasPriceRange
          priceRange
        }
      }
    }
    seoImg:file(relativePath: { eq: "super-skin/fab-skin-lash.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    site{
      siteMetadata{
        title
      }
    }
  }
`

const PageWrapper = styled.section`
    .head-span{
      color: white;
      display: block;
      font-size: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      width: 100%;
    }
`
export default HairRemoval
