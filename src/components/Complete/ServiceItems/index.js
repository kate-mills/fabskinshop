import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const ServiceItems = (props) => {
  return (
    <ServiceItemsWrapper className={props.mini ? `mini`: `` } warningWidth={props.warningWidth}>
      <h2 className="category">{props.category} <span className="underline"/></h2>
      <div className="menu-items">
        {props.items.nodes.map(({data:treatment}, index)=> {
          return(
            <div key={index}>
              <Link to="/schedule" state={{
                name: treatment.name,
                time: treatment.time,
                warning: props.warning,
                }}>
                  <h3 className="menu-item">
                    <div className="name">{treatment.name} </div>
                    <div className="price">
                      {!props.mini && <span className="time">{treatment.time}</span>}
                      {treatment.priceRange || ` $ ${treatment.price} `}
                    </div>
                  </h3>
                  <p className="desc">{treatment.description}</p>
                </Link>
              </div>
            )
          })
        }
      {props.warning && <p className="warning">{props.warning}</p>}
      </div>
      </ServiceItemsWrapper>
    )
}

const ServiceItemsWrapper = styled.div`
  & {
    box-sizing; border-box;
    margin: 0 auto;
  }
  &.mini{
    box-sizing; border-box;
    margin: 0 auto;
    max-width: 330px;
  }
  .category{
    color: var(--black);
    font-weight: 700;
    margin: 1.45rem auto;
    padding: 0 0.4rem;
    text-transform: uppercase;
    width: fit-content;
    .underline {
      display: block;
      height: 3px;
      background: var(--primaryColor);
      margin: 0 auto;
      margin-top: 0.25rem;
      width: 50%;
    }
  }
  &.mini { height: fit-content;}
  &.mini .menu-item{
    box-sizing: border-box;
    background: var(--descBg);
    display: grid
    grid-template-columns: 1.5fr, 0.5fr;
    max-width: 250px;
  }
  .menu-item{
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 0.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    .name{}
    .time{
      color: var(--primaryColor);
      font-size: 0.75rem;
      font-style: italic;
      font-weight:300;
      min-width: fit-content;
      padding-right: 0.3rem;
      text-align: center;
    }
    .price{
      line-height: 0.7rem;
      margin-left: 0.2rem;
      font-size: 0.75rem;
      text-align: right;
    }
  }
  & .desc{
    background: var(--descBg);
    font-size: 0.8rem;
    margin: 0 auto 1.5rem;
    padding: 0 0.5rem;
    text-align: justify;
  }
  & .menu-items{
    margin: 0 auto;
    width: fit-content;
  }
  & .warning {
    font-size: .75rem;
    max-width: ${props => props.warningWidth ? props.warningWidth: `100%`};
    white-space: pre-wrap;
    letter-spacing: normal;
  }
`

export default ServiceItems
