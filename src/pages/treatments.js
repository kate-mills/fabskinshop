import React from "react"
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import { SEO, FluidImage, Btn } from "../components/Complete"

const Treatments = (props) => {
  return(
  <Layout>
    <SEO title={`A Clinical Approach To Skincare | ${props.data.site.siteMetadata.title}`} image={props.data.file.childImageSharp.fluid.src}/>
    <PageWrapper>
      <div className="flex-container">
        <div className="flex-item first">
        <FluidImage maxWidth="500px" fluid={props.data.file.childImageSharp.fluid}/>
          <h2>Learn More<span className="underline"/></h2>
          <ul>
          <li className="link"> <Link to="/facials-peels">Facials & Peels</Link> </li>
          <li className="link"> <Link to="/makeup">Makeup</Link> </li>
          <li className="link"> <Link to="/wax-and-lash">Wax & Lash Extensions</Link> </li>
          </ul>
        </div>
        <div className="flex-item">
          <h2>A Clinical Approach<span className="underline"/></h2>
          <p>All of our estheticians have worked with Dermatologists & Plastic Surgeons for well over a decade, giving them a clinical approach to skincare.</p>
          <p>With this background and continued education, our Estheticians will offer you a thorough skin analysis, as well as a broad range of treatment options perfectly suited to your needs.</p>
          <p>We will bring new life to your skin with our nurturing and intuitive touch.</p>
         <Btn className="container-btn" to="/schedule" text="Schedule an appointment" backgroundColor="var(--grey)" color="var(--black)" hoverColor="var(--primaryColor)" hoverBackground="var(--primaryDark)" />
        </div>
      </div>
    </PageWrapper>
  </Layout>
  )
}

const PageWrapper = styled.section`
  & {
    .flex-container{
      align-items: center;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      width: 100%;
    }
    h2{
      text-align: center;
      margin: 0 auto 0.5rem;
      width: 100%;
      .underline{
        background: var(--primaryColor);
        display:block;
        height: 3px;
        margin: 0 auto;
        margin-top: 0.25rem;
        width: 25%;
      }
    }
    .fluid-img,
    .flex-item{
      margin: 1rem auto;
      box-sizing: border-box;
      width: 100%;
      max-width: 500px;
    }
    .first{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .first > .fluid-img{
      width: 100%;
    }
    .first ul,
    .first ul li{
      margin: unset;
      padding: unset;
    }
    .first ul li a{
      display: block;
      font-size: 0.9rem;
      margin: 0.5rem;
      padding: 0.1rem 1rem;
      white-space: none;
    }
    .first ul li a:hover{
      background: var(--primaryColor);
      border-radius: 0.4rem;
      color: var(--white);
    }
    @media(min-width: 768px ){
      .flex-container{
        flex-direction: row;
      }
      .fluid-img,
      .flex-item{
        box-sizing: border-box;
        width: 45%;
      }
    }
  }
`
export const query = graphql`
  {
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
    file(relativePath: { eq: "super-skin/flower-pot.jpeg" }) {
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
