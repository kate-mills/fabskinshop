import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    defaultImg: file(relativePath: { eq: "default-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const FluidImage = (props) => {
  const {defaultImg} = useStaticQuery(query);
  return (
    <div className="fluid-img" style={{maxWidth: props.maxWidth, marginBottom: props.marginBottom,}}>
      <Img fluid={props.fluid || defaultImg.childImageSharp.fluid}/>
    </div>
  )
}
FluidImage.defaultProps = {
  maxWidth: `300px`,   // should equal query maxWidth
  marginBottom: `1.45rem`,
}

export default FluidImage
