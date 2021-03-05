import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import { SEO, Btn, FluidImage, ServiceItems } from "../components/Complete"

const Makeup = (props) => {
  const {data:{onLocation}} = props
  const {data:{inStudio}} = props
  return(
  <Layout title="Makeup Services">
    <SEO title={`Makeup Services in Napa, CA | ${props.data.site.siteMetadata.title}`}
      image={props.data.seoImg.childImageSharp.fluid.src}
      description="Learn about makeup, lash extension, & other facial rejuvenation procedures. We serve Napa, CA and surrounding areas."/>
    <PageWrapper>
      <FluidImage fluid={props.data.seoImg.childImageSharp.fluid} maxWidth="1000px"/>
      <p className="click-to-schedule">Click on a service below to contact us about about an appointment now.</p>

      <div className="menu-box">
        <ServiceItems category="In Studio" items={inStudio} />
        <ServiceItems category="On Location" items={onLocation}/>
      </div>
      <p className="click-to-schedule">Click on a service above to contact us about about an appointment now.</p>
    <div className="schedule-btns">
      <Btn className="btn" to="/facials-peels"  text="Facials & Peels Menu" backgroundColor="var(--grey)" color="var(--black)"/>
      <Btn className="btn" to="/wax-and-lash"  text="Waxing & Lashes Menu" backgroundColor="var(--grey)" color="var(--black)"/>
    </div>
    </PageWrapper>
  </Layout>
  )
}

export const query = graphql`
  {
    inStudio: allAirtable(filter: {data: {category: {eq: "in-studio-makeup"}}}, sort: {fields: data___name, order: ASC}) {
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
    onLocation: allAirtable(filter: {data: {category: {eq: "on-location-makeup"}}}, sort: {fields: data___name, order: ASC}) {
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
    seoImg:file(relativePath: { eq: "super-skin/super-skin-spa-makeup.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const PageWrapper = styled.section`
    .menu-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      align-items: baseline;
    }
    .menu-box> div{
      min-width: 250px;
      max-width: 40%;
    }
    .head-span{
      color: white;
      display: block;
      font-size: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      width: 100%;
    }
    .click-to-schedule {
      font-size: 0.9rem;
      font-style: italic;
      margin-top: 1rem;
      text-align: center;
    }
    .schedule-btns{
      margin: 0 auto;
      margin-top: 3rem;
      width: 100%;

      .btn{
        display: block;
        margin: 2rem auto 0;
        max-width: fit-content;
      }
    }
  }
`
export default Makeup
