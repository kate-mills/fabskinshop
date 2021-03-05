import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        organization {
          address {
            name
            street
            city
            state
            zip
          }
        }
      }
    }
  }
`

// Add prop.block for envelope style
const Address = props => {
  const {site:{siteMetadata:{organization:{address:{
    name,
    street,
    city,
    state,
    zip,
  }}}}} = useStaticQuery(query)

  return (
      <div className={props.className}>
        <address style={{ whiteSpace: 'pre-line' }}>
          <span
            className="company-name"
            style={{ paddingLeft: '0',}}
          >
            {name}
            {
              props.block ?
                <br/>
                :
                ', '
            }
          </span>
          <span
            className="street-address"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {street}
          </span>
          {
            props.block && <br/>
          }
          <span
            className="city"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {city},
          </span>
          <span
            className="state"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {state}
          </span>
          <span
            className="zip"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {zip}
          </span>
        </address>
      </div>
  )
}

export default Address
