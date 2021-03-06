import React from "react"
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn, ServiceItems } from "../components/Complete"

const Treatments = (props) => {
  return(
  <Layout>
    <SEO
      title={`Facials, Peels, & Skin Rejuvenation Procedures  with clinical Estheticians in Napa, CA | ${props.data.site.siteMetadata.title}`}
      image={props.data.seoImg.childImageSharp.fluid.src}/>
    <PageWrapper>
      <FluidImage fluid={props.data.seoImg.childImageSharp.fluid} maxWidth="1000px"/>
      <section className="menu-box">
        <ServiceItems items={props.data.fp} category="Facials & Peels" />
        <ServiceItems items={props.data.hr} category="Waxing" mini warning="*Facial waxing requires the discontinuation of retinoids for 7-10 days prior and is contraindicated for Accutane® users." warningWidth= "250px"/>
      </section>
      <Btn className="btn" to="/contact"  text="Contact Us" backgroundColor="var(--grey)" color="var(--black)"/>
    </PageWrapper>
  </Layout>
  )
}

const PageWrapper = styled.section`
  .menu-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .head-span{
    color: white;
    display: block;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    width: 100%;
  }
  .btn{
    display: block;
    margin: 1rem auto 2rem;
    width: fit-content;
  }
  .click-to-schedule {
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 1rem;
    text-align: center;
  }
  @media(min-width:768px){
    .menu-box {
      flex-wrap: nowrap;
      >:nth-child(1){
          max-width: 50%;
      }
      > :nth-child(2){
      }
    }
  }
`

export const query = graphql`
  {
    fp:allAirtable(filter: {data: {category: {eq: "facials-peels"}}}, sort: {fields: data___name}) {
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
    extras:allAirtable(filter: {data: {category: {eq: "extras"}}}, sort: {fields: data___name}) {
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
    hr: allAirtable(filter: {data: {category: {eq: "hair-removal"}}}, sort: {fields: data___name}) {
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


    allAirtable {
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
    seoImg:file(relativePath: { eq: "super-skin/super-skin-spa-facial.jpg" }) {
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
export default Treatments
