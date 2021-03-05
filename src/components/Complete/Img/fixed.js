import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    defaultImg: file(relativePath: { eq: "default-image.jpg" }) {
      childImageSharp {
        fixed(width: 300, height:300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const FixedImage = (props) => {
  const {defaultImg:{childImageSharp:{fixed:defaultImg}}} = useStaticQuery(query);
  return (
    <div className="fixed-img"  style={{ marginBottom: props.marginBottom, }}>
      <Img fixed={props.fixed || defaultImg}/>
    </div>
  )
}
FixedImage.defaultProps = {
  marginBottom: `1.45rem`,
}

export default FixedImage
