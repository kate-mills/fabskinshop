import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, ContactForm, PhoneNumber, FluidImage } from "../components/Complete"

import styled from 'styled-components'

const Contact = (props) => {
  const child = <p style={{textAlign: 'left', fontSize: '0.9rem', width: `80%`}}>Call/text us at <PhoneNumber/>, or use the form below and someone will quickly get back to you.</p>
  return (
    <Layout title="Schedule An Appointment" bannerChildren={child}>
      <SEO
        title={`Schedule A Facial Rejuvenation Treatment | ${props.data.site.siteMetadata.title}`}
        description="Schedule a facial rejuvenation treatment or spa treatment with a Licensed Esthetician in Napa, CA now."
        image={props.data.seoImg.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <div className="flexible">
          <FluidImage maxWidth="300px" fluid={props.data.seoImg.childImageSharp.fluid}/>
          <ContactForm treatment={props?.location?.state}/>
        </div>
      </PageWrapper>
    </Layout>
  )
}


const PageWrapper = styled.section`
  & {
    margin: 0 auto;
    .flexible{
      display: flex;
      flex-wrap:wrap-reverse;
      align-items: flex-end;
      justify-content: center;
      .fluid-img { width: 50%;}
    }
  }
`

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "super-skin/super-skin-schedule.jpg" }) {
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

export default Contact
