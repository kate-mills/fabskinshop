import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className}) => {
  return (
    <div className={className}>
      <p className="heading">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </p>
    </div>
  )
}

export default styled(Title)`
  font-size  : 2.3rem;
  line-height: 2.3rem;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  .title {
    color: ${props => props.titleColor || 'var(--black)'};
  }
  .subtitle {
    color: ${props => props.subTitleColor || 'var(--primaryColor)'};
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
