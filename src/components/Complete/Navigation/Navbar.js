import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {Link} from "gatsby"
import {navigationLinks} from '../../../constants/links'
import {PhoneNumber} from '../ContactInfo'
import {useGlobalContext} from '../../../context/context'
import NavSubmenu from './Submenu'


const Nav = ({toggleSidebar}) => {
  const { openSubmenu } = useGlobalContext()
  const displaySubmenu = (e)=>{
    const page_name = e.target.textContent;           // I get this text
    const tempBtn = e.target.getBoundingClientRect(); // I get object with coordinates
    const center = (tempBtn.left + tempBtn.right)/2; // center of anilink
    const bottom = (tempBtn.bottom - 3);             // bottom of anilink - 3px
    openSubmenu(page_name, {center, bottom});
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" width="175px" height="54px" />
          </Link>
          <button type="button" aria-label="Open sidebar" className="nav-opener" onClick={toggleSidebar}>
            <FaBars />
          </button>
            <NavSubmenu/>
        </div>
        <ul className="nav-links">
          {navigationLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}
                  onMouseOver={displaySubmenu}
                >{link.page}</Link>
              </li>
            )
          })}
          <li>
            <PhoneNumber className="phone"/>
          </li>
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  background: inherit;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: unset;
      margin-bottom: unset;
    }
  }
  .nav-opener {
    background: transparent;
    border: transparent;
    color: var(--black);
    cursor: pointer;
    outline: none;
    svg { font-size: 2rem; }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-opener {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      margin-bottom: unset;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--black);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--black);
        }
      }
      li:last-of-type a:hover {
        border-bottom: none;
      }
    }
  }
`

export default Nav
