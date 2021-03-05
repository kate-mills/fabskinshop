import React from 'react'
import styled from 'styled-components'

const Banner = ({className,  title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      { subtitle && (<p>{subtitle }</p>)}
      {children}
    </BannerWrapper>
  )
}


const BannerWrapper = styled.div`
  & {
    text-align: center;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2.5rem;
    background-clip: content-box;
    background: inherit;    

    & h1 {
      color: var(--black);
      font-weight: 300;
      font-size: 2.5rem;
      padding: 0 1rem;
      width: 99%;
      margin: 2rem auto;
      white-space: pre-wrap !important;
    }
    & p {
      font-weight: 300;
      width: 90%;
      color: var(--black);
      margin: 0 auto;
      margin-bottom: 2rem;
      white-space: pre-wrap !important;
    }
  }
`
export default Banner
