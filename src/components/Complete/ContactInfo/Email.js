import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        organization {
          email
          displayEmail {
            prefix
            suffix
            ext
          }
        }
      }
    }
  }
`

const Email = props => {
  const {site:{siteMetadata:{organization:{email, 
    displayEmail:{prefix, suffix, ext}
  }}}} = useStaticQuery(query)

  const formatter = (str) => {
    if(str && str.length > 0)
      return str.split(' ').join('%20')
  }
  let fmtSubject = formatter((props.subject))
  return (
    <a
      className={props.className}
      target="_top"
      href={`${email}?subject=${fmtSubject}`}
    >
      <span style={{whiteSpace: 'nowrap',}}>
        {prefix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {suffix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {ext}</span>
    </a>
  )
}
Email.defaultProps = {
    subject: 'General%20query',
}

export default Email
